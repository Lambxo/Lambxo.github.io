import { useNavigate } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CursorGrid from '../components/CursorGrid'
import './Home.css'

const stats = [
  { index: '01 / DISCIPLINE', icon: '✦', num: '3', label: '热爱技能' },
  { index: '02 / MODULES', icon: '⊞', num: '12', label: '工作室单元' },
  { index: '03 / STAGE', icon: '○', num: '7', label: '舞台瞬间' },
  { index: '04 / CYCLE', icon: '◷', num: '24', label: '小时灵感' },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="page home-page">
      <Header />

      {/* Status strip */}
      <div className="home-status-strip">
        <div className="home-status-left caption-micro">
          <span className="home-status-dot" />
          SYSTEM STATUS: OPERATIONAL &nbsp;// &nbsp;INDEX REF. 2026.LAMB-01
        </div>
        <div className="home-status-right caption-micro">
          <span>LOC: 31°13'N 121°28'E</span>
          <span>MOD: HOMEPAGE</span>
          <span className="text-red" style={{ fontWeight: 800 }}>SECT 01</span>
        </div>
      </div>

      {/* Hero: 8:4 asymmetric split */}
      <main className="home-hero">
        {/* LEFT — big headline + CTAs */}
        <section className="home-hero-left" style={{ position: 'relative', overflow: 'hidden' }}>
          {/* CursorGrid 鼠标跟踪背景 */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <CursorGrid
              cellSize={64}
              color="#FF3000"
              radius={160}
              falloff="smooth"
              holdTime={350}
              fadeDuration={700}
              lineWidth={1}
              maxOpacity={0.7}
              fillOpacity={0}
              gridOpacity={0}
              cellRadius={0}
              clickPulse
              pulseSpeed={550}
            />
          </div>
          {/* 内容层，叠在 CursorGrid 之上 */}
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="home-archive-tag">
            <span className="caption-micro" style={{ background: '#000', color: '#fff', padding: '4px 8px' }}>ARCHIVE INTRO</span>
            <div className="home-tag-line" />
            <span className="caption-micro text-red" style={{ fontWeight: 800 }}>LAMB STUDIO</span>
          </div>

          <h1 className="home-headline display-hero">
            欢迎来到<br />我的主页<span className="home-dot">.</span>
          </h1>

          <p className="home-body body-lg">
            Lamb 是一位将画画、唱歌与跳舞揉进日常实践的设计师。这里是工作室索引，
            而非一份标准简历堆砌。
          </p>

          <p className="home-system caption-micro" style={{ opacity: 0.5 }}>
            // DESIGN × SOUND × MOVEMENT × SYSTEM ARCHITECTURE
          </p>

          <div className="home-cta-row">
            <button className="btn-primary" onClick={() => navigate('/contact')}>
              联系我 <ArrowRight size={18} strokeWidth={2.5} />
            </button>
            <button className="btn-secondary" onClick={() => navigate('/works')}>
              看看作品 <ExternalLink size={16} strokeWidth={2.5} />
            </button>
            <span className="home-est caption-micro" style={{ opacity: 0.5 }}>
              GRID-BASED RATIONALE &nbsp;■&nbsp; EST. 2026
            </span>
          </div>
          </div>{/* end content z:1 */}
        </section>

        {/* RIGHT — geometry + stats */}
        <aside className="home-hero-right swiss-grid-pattern">
          {/* Geometry composition */}
          <div className="home-geo-panel">
            <div className="home-geo-header">
              <span className="caption-micro">FIG. 01 // GEOMETRY MATRIX</span>
              <span className="caption-micro text-red">1:1 ASPECT</span>
            </div>
            <div className="home-geo-canvas">
              {/* Bauhaus composition */}
              <div className="home-geo-outer" />
              <div className="home-geo-sq-big" />
              <div className="home-geo-circle-lg" />
              <div className="home-geo-sq-mono">
                <span style={{ fontSize: 28, fontWeight: 900 }}>L</span>
                <span className="caption-micro" style={{ opacity: 0.5 }}>STUDIO</span>
              </div>
              <div className="home-geo-red-sq" />
              <div className="home-geo-arc" />
            </div>
            <div className="home-geo-footer">
              <span className="caption-micro" style={{ opacity: 0.6 }}>BAUHAUS COMPOSITION</span>
              <span className="caption-micro" style={{ opacity: 0.6 }}>© SYSTEM ARCHIVE</span>
            </div>
          </div>

          {/* Stats grid */}
          <div className="home-stats-grid">
            {stats.map((s) => (
              <div className="home-stat-cell" key={s.index}>
                <div className="home-stat-header">
                  <span className="caption-micro text-red" style={{ fontWeight: 800 }}>{s.index}</span>
                  <span className="caption-micro" style={{ opacity: 0.4 }}>{s.icon}</span>
                </div>
                <div className="home-stat-num">{s.num}</div>
                <div className="caption-micro" style={{ opacity: 0.7 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </aside>
      </main>

      {/* Bottom section tag strip */}
      <div className="home-section-strip">
        <div className="home-section-tag">
          <span className="caption-micro">SECTION A // VISUAL IDENTITY</span>
          <span className="caption-micro text-red" style={{ fontWeight: 800 }}>#01-PAINT</span>
        </div>
        <div className="home-section-tag" style={{ borderLeft: '4px solid #000' }}>
          <span className="caption-micro">SECTION B // VOCAL EXPRESSION</span>
          <span className="caption-micro text-red" style={{ fontWeight: 800 }}>#02-VOICE</span>
        </div>
        <div className="home-section-tag" style={{ borderLeft: '4px solid #000' }}>
          <span className="caption-micro">SECTION C // RHYTHMIC KINETICS</span>
          <span className="caption-micro text-red" style={{ fontWeight: 800 }}>#03-DANCE</span>
        </div>
      </div>

      <Footer />
    </div>
  )
}
