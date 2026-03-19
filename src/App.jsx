import { useEffect, useRef, useState } from 'react'
import { ITEMS, MARQUEE_WORDS, MARQUEE_COLORS, BADGE_LABELS } from './data.js'
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

/* ── Timeline item ── */
function TLItem({ item }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Show immediately if already in viewport
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight) { setVisible(true); return }
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const dotStyle = item.color
    ? { background: item.color, borderColor: item.color, boxShadow: `0 0 0 3px ${item.color}22` }
    : {}

  return (
    <div ref={ref} className={`${s.tlItem} ${visible ? s.tlItemIn : ''}`}>
      <div className={s.tlYear}>{item.year}</div>
      <div className={s.tlSpine}>
        <div className={s.tlDot} style={dotStyle} />
        <div className={s.tlConnector} />
      </div>
      <div className={s.tlBody}>
        <div className={s.tlMeta}>
          <span className={s.tlTag}>{item.tag}</span>
          <Badge status={item.status} />
        </div>
        <h3 className={s.tlTitle} style={item.color ? { color: item.color } : {}}>
          {item.title}
        </h3>
        {item.domain && <p className={s.tlDomain}>{item.domain}</p>}
        <p className={s.tlDesc}>{item.desc}</p>
        {item.href && (
          <a
            className={s.tlLink}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: item.color }}
          >
            Visit {item.domain} ↗
          </a>
        )}
        {item.domain && (
          <a
            href={item.href || '#'}
            target={item.href ? '_blank' : undefined}
            rel={item.href ? 'noopener noreferrer' : undefined}
            className={s.tlThumb}
            style={{ borderColor: item.color ? `${item.color}33` : 'var(--fainter)' }}
          >
            <div className={s.tlThumbInner} style={{ background: item.color ? `${item.color}0A` : 'var(--page)' }}>
              <span className={s.tlThumbIcon} style={{ color: item.color || 'var(--faint)' }}>↗</span>
              <span className={s.tlThumbLabel}>{item.domain}</span>
            </div>
          </a>
        )}
      </div>
    </div>
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
            <div className={s.scrollHint}>The story ↓</div>
          </div>
          <div className={s.heroPhoto}>
            <img src="/marchoag-glow.png" alt="Marc Hoag" className={s.heroImg} />
          </div>
        </div>
      </header>

      {/* Marquee */}
      <Marquee />

      {/* Timeline */}
      <main className={s.tlSection}>
        <p className={s.sectionLabel}>The story so far</p>
        <div className={s.tl}>
          {ITEMS.map((item, i) => <TLItem key={i} item={item} />)}
        </div>
      </main>

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
              <a href="https://hoaglaw.ai/contact" target="_blank" rel="noopener noreferrer">Book a call ↗</a>
              <a href="mailto:marc@hoaglaw.ai">marc@hoaglaw.ai</a>
            </div>
            <div className={s.footerGroup}>
              <p className={s.footerGroupLabel}>Find me</p>
              <span>Mill Valley, CA</span>
              <a href="tel:+14152750505">415.275.0505</a>
            </div>
          </div>
        </div>
        <p className={s.footerSmall}>
          © {new Date().getFullYear()} Marc Hoag · Attorney Advertisement · Prior results do not guarantee a similar outcome.
        </p>
      </footer>
    </>
  )
}
