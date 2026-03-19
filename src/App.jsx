import { useEffect, useRef, useState } from 'react'
import { PROJECTS, PODCAST_URL, MARQUEE_WORDS, MARQUEE_COLORS, BADGE_LABELS } from './data.js'
import s from './App.module.css'

/* ── Marquee ── */
function Marquee() {
  const repeated = [...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS]
  return (
    <div className={s.mqWrap}>
      <div className={s.mqTrack}>
        {repeated.map((w, i) => (
          <span key={i} className={s.mqWord} style={{ color: MARQUEE_COLORS[i % MARQUEE_COLORS.length] }}>
            {w} <span className={s.mqDot}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── Badge ── */
function Badge({ status }) {
  if (!status || !BADGE_LABELS[status]) return null
  return <span className={`${s.badge} ${s['badge_' + status]}`}>{BADGE_LABELS[status]}</span>
}

/* ── Project card ── */
function ProjectCard({ item }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight) { setVisible(true); return }
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const isRedacted = !item.domain && !item.href
  const Wrapper = item.href ? 'a' : 'div'
  const wrapperProps = item.href
    ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Wrapper
      ref={ref}
      className={`${s.card} ${visible ? s.cardIn : ''} ${isRedacted ? s.cardRedacted : ''}`}
      style={{ '--accent': item.color }}
      {...wrapperProps}
    >
      {item.ogImage ? (
        <div className={s.cardThumb}>
          <img src={item.ogImage} alt={item.title} className={s.cardThumbImg} loading="lazy" style={{ ...(item.ogFit && { objectFit: item.ogFit }), ...(item.ogPos && { objectPosition: item.ogPos }), ...(item.ogScale && { transform: `scale(${item.ogScale})` }) }} />
        </div>
      ) : item.domain ? (
        <div className={s.cardThumb}>
          <span className={s.cardThumbIcon}>↗</span>
          <span className={s.cardThumbLabel}>{item.domain}</span>
        </div>
      ) : (
        <div className={s.cardThumbRedacted}>
          <span className={s.cardThumbIcon}>?</span>
        </div>
      )}

      <div className={s.cardBody}>
        <div className={s.cardMeta}>
          <span className={s.cardTag}>{item.tag}</span>
          <Badge status={item.status} />
        </div>
        <h3 className={s.cardTitle}>{item.title}</h3>
        <p className={s.cardDesc}>{item.desc}</p>
        {item.domain && (
          <span className={s.cardLink}>Visit {item.domain} ↗</span>
        )}
      </div>
    </Wrapper>
  )
}

/* ── App ── */
export default function App() {
  return (
    <>
      {/* Hero */}
      <header className={s.hero}>
        <div className={s.heroInner}>
          <div className={s.heroText}>
            <p className={s.kicker}>marchoag.com</p>
            <h1 className={s.hed}>
              I <span className={s.lime}>build.</span><br />
              I also happen<br />
              to be <em>a <span className={s.coral}>lawyer.</span></em>
            </h1>
            <p className={s.sub}>
              Founder, vibe coder, and California-licensed attorney since 2008.
              A decade-plus at the intersection of technology, startups, and law —
              building companies, shipping products, and helping AI startups move
              fast without breaking things legally.
            </p>
            <div className={s.pills}>
              {['Mill Valley, CA', 'Cal Bar 2008', 'BHBA AI & Law Chair', 'Founder', 'Vibe Coder'].map(p => (
                <span key={p} className={s.pill}>{p}</span>
              ))}
            </div>
            <div className={s.scrollHint}>See what I'm building ↓</div>
          </div>
          <div className={s.heroPhoto}>
            <img src="/marchoag-glow.png" alt="Marc Hoag" className={s.heroImg} />
          </div>
        </div>
      </header>

      {/* Marquee */}
      <Marquee />

      {/* Projects Grid */}
      <main className={s.gridSection}>
        <h2 className={s.sectionLabel}>Live now</h2>
        <div className={s.grid}>
          {PROJECTS.filter(p => p.status === 'live' || p.status === 'launched').map((item, i) => (
            <ProjectCard key={i} item={item} />
          ))}
        </div>

        <h2 className={`${s.sectionLabel} ${s.sectionLabelSub}`}>Coming soon</h2>
        <div className={s.grid}>
          {PROJECTS.filter(p => p.status === 'soon' || p.status === null).map((item, i) => (
            <ProjectCard key={i} item={item} />
          ))}
        </div>
      </main>

      {/* Background */}
      <section className={s.bioSection}>
        <h2 className={s.sectionLabel}>Background</h2>
        <p className={s.bioText}>
          Licensed by the California Bar in 2008, Marc founded Venturocket — a
          VC-backed, Series A-funded jobs marketplace that reimagined hiring with
          an AdWords-inspired pay-per-connection model. He spun out Twibble, a
          social media marketing tool for Twitter, and later built an autonomous
          vehicle-focused consultancy. He also hosted{' '}
          <a href={PODCAST_URL} target="_blank" rel="noopener noreferrer" className={s.bioLink}>
            Autonomous Vehicles with Marc Hoag
          </a>{' '}
          (2016–2023), a 200-episode podcast covering the self-driving industry.
          The founder instinct never left — it just found new outlets.{' '}
          <a href="https://linkedin.com/in/marchoag" target="_blank" rel="noopener noreferrer" className={s.bioLink}>
            Learn more on LinkedIn ↗
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className={s.footer}>
        <div className={s.footerInner}>
          <div>
            <div className={s.footerBig}>Let's<br /><em>talk.</em></div>
            <div className={s.socialRow}>
              <a className={s.socialLink} aria-label="LinkedIn" href="https://linkedin.com/in/marchoag" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a className={s.socialLink} aria-label="X" href="https://x.com/marchoag" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" /></svg>
              </a>
              <a className={s.socialLink} aria-label="GitHub" href="https://github.com/marchoag" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
              </a>
              <a className={s.socialLink} aria-label="TikTok" href="https://tiktok.com/@marc.hoag.ai.lawyer" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" /></svg>
              </a>
            </div>
          </div>
          <div className={s.footerLinks}>
            <div className={s.footerGroup}>
              <p className={s.footerGroupLabel}>Writing</p>
              <a href="https://hoaglaw.ai/blog" target="_blank" rel="noopener noreferrer">Blog ↗</a>
              <a href="https://www.futureperfect.news" target="_blank" rel="noopener noreferrer">Newsletter ↗</a>
              <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5291815" target="_blank" rel="noopener noreferrer">SSRN ↗</a>
            </div>
            <div className={s.footerGroup}>
              <p className={s.footerGroupLabel}>Work with me</p>
              <a href="https://hoaglaw.ai" target="_blank" rel="noopener noreferrer">Hoag Law.ai ↗</a>
              <a href="https://skyriven.ai" target="_blank" rel="noopener noreferrer">Skyriven.ai ↗</a>
              <a href="https://finnly.ai" target="_blank" rel="noopener noreferrer">Finnly.ai ↗</a>
              <a href="mailto:marc@marchoag.com">marc@marchoag.com</a>
            </div>
            <div className={s.footerGroup}>
              <p className={s.footerGroupLabel}>Find me</p>
              <span>Marin County, CA</span>
            </div>
          </div>
        </div>
        <p className={s.footerSmall}>
          © {new Date().getFullYear()} Marc Hoag · Attorney Advertisement · Prior results do not guarantee a similar outcome.
        </p>
        <p className={s.footerSmall} style={{ marginTop: '.5rem' }}>
          <a href="/privacy.html">Privacy</a> · <a href="/terms.html">Terms</a> · <a href="/stack.html">Colophon</a>
        </p>
      </footer>
    </>
  )
}
