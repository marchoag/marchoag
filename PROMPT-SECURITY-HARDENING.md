# Security Hardening Prompt for Next.js on Render

Drop this into Claude Code for any Next.js project deployed on Render.

---

## Prompt

I need you to audit and harden this Next.js application deployed on Render. Another one of my services was hit by an automated bot that executed a shell script on the server trying to install a cryptominer crontab, and a separate attacker used a stolen Stripe API key to attempt creating fraudulent Connect accounts. I want to prevent all of that here. Do the following:

### 1. Fix standalone server mode (OOM prevention)

Check `next.config.mjs` — if it has `output: 'standalone'`, the start command MUST use the standalone server, not `next start`. Fix `package.json`:

- Change `build` to: `next build && cp -r .next/static .next/standalone/.next/static && cp -r public .next/standalone/public`
- Change `start` to: `node .next/standalone/server.js`

If there's no `output: 'standalone'`, add it to next.config.mjs and make the above changes. This dramatically reduces memory usage on Render (boot time drops from ~1000ms to ~40ms, significantly lower memory footprint).

Verify the build passes and the standalone server boots before committing.

Do NOT change anything in the Render dashboard — the package.json changes make the existing Render commands (`pnpm run build` / `pnpm run start`) work correctly.

### 2. Add bot/scanner blocklist to middleware

Add an early-exit check at the TOP of the middleware function (before any auth, rate limiting, or Supabase client creation) that returns a proper 404 for known scanner paths. The 404 response MUST include `Content-Type: text/plain` and a body like `'Not Found'` — otherwise browsers will download an empty file instead of displaying a 404.

Exact paths to block (use a Set for O(1) lookup):
- WordPress probes: `/wp-admin`, `/wp-login.php`, `/wp-includes`, `/wp-content`, `/xmlrpc.php`, `/wp-cron.php`, `/wp-json`
- Config file probes: `/.env`, `/.env.local`, `/.env.production`, `/.env.backup`, `/config.php`, `/config.yml`, `/configuration.php`, `/.aws/credentials`, `/.docker/config.json`, `/.kube/config`
- Admin panels: `/admin`, `/adminer.php`, `/phpmyadmin`, `/pma`, `/manager`, `/cpanel`
- Git/VCS probes: `/.git`, `/.git/config`, `/.git/head`, `/.svn`, `/.svn/entries`, `/.hg`
- Database dumps: `/backup`, `/backup.sql`, `/database.sql`, `/dump.sql`, `/db.sql`
- Server probes: `/server-status`, `/server-info`, `/.htaccess`, `/.htpasswd`
- RCE/webshell probes: `/a`, `/b`, `/c`, `/x`, `/test`, `/tmp`, `/temp`, `/shell`, `/cmd`, `/eval`, `/console`, `/cgi-bin`, `/upload`, `/uploads`, `/fileupload`
- Spring/Java probes: `/actuator`, `/actuator/env`, `/actuator/health`
- Misc: `/.well-known/security.txt`
- Node probes: `/node_modules`, `/package.json`, `/package-lock.json`, `/yarn.lock`, `/pnpm-lock.yaml`, `/.npmrc`

Block by file extension: `.php`, `.asp`, `.aspx`, `.jsp`, `.cgi`, `.sh`, `.sql`

Block by path prefix (use an array with `startsWith`): `/wp-*`, `/cgi-bin/*`, `/admin/*`, `/.git/*`, `/.svn/*`, `/.env*`, `/node_modules/*`, `/vendor/*`, `/debug/*`, `/console/*`

### 3. Add rate limiting

If there's no rate limiter in middleware, add an in-memory one:
- 30 requests per minute per IP for API routes
- Use `x-forwarded-for` header or `request.ip` for IP identification
- Periodic cleanup of the rate limit map (every 60 seconds)
- Return 429 when limit exceeded

### 4. Security headers

Verify these headers are set in `next.config.mjs` via the `headers()` async function (add if missing):
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-DNS-Prefetch-Control: on`
- `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- Content-Security-Policy (appropriate for the app's needs — be careful with `unsafe-eval`, only include if a dependency like Recharts requires it)
- For staging environments: `X-Robots-Tag: noindex, nofollow` (gate behind an env var check)

### 5. CSRF protection

For any API routes that handle POST/PUT/DELETE, verify there's an origin check in middleware against `NEXT_PUBLIC_APP_URL`. Exempt webhook endpoints that need external access (e.g., Stripe webhooks — those should use signature verification instead).

### 6. Stripe API key security

If this project uses Stripe:
- Check if the project is using a standard `sk_live_` key or a restricted key
- If using a standard key: recommend creating a **Restricted key** in the Stripe dashboard (Developers → API keys → Create restricted key) with permissions limited to ONLY the endpoints the app actually uses (e.g., Checkout Sessions, Customers, Subscriptions, Prices, Products). Deny everything else, especially Accounts/Connect.
- Replace the standard `sk_live_` key in Render env with the restricted `rk_live_` key
- The standard key stays in Stripe as a break-glass backup but should never be deployed
- This prevents attackers from using a leaked key to create Connect accounts, transfer funds, or access endpoints your app doesn't need

### 7. Staging basic auth

If the app has a staging environment with basic auth:
- Ensure the `atob()` base64 decoding is wrapped in a try-catch (malformed base64 throws an unhandled exception)
- Exempt webhook paths from basic auth (they need external access)

### 8. Audit for code execution vectors

Search the entire codebase (excluding node_modules) for:
- `child_process`, `exec`, `spawn`, `execSync`, `fork`
- `eval(`, `new Function(`, `vm.`
- Any route that accepts file uploads — verify type whitelist and size restrictions
- Any route that fetches user-provided URLs (SSRF risk — verify private IP ranges are blocked)

Report anything found.

### 9. Remove dead dependencies

Search for any packages in `package.json` that are not imported anywhere in the actual application code (exclude scripts/ and test files). Unused dependencies are unnecessary attack surface and can cause peer dependency conflicts. Remove them with `npm uninstall`.

### 10. Verify and commit

- Run `npm run build` to verify everything passes
- Briefly start the standalone server to confirm it boots
- Commit all changes

### 11. Post-deployment checklist (manual, not code)

After deploying, remind me to:
- Set up **UptimeRobot** (free) to monitor the production URL and email on downtime
- Check **Render** settings for health check email notifications
- Check **Stripe** dashboard (Developers → Logs) for any suspicious API calls from unknown IPs
- If using Stripe: create a restricted key and replace the standard secret key in Render env
- Review any other secrets in Render env vars and consider whether they should be rotated
