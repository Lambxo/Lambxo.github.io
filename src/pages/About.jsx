import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './About.css'

export default function About() {
  const navigate = useNavigate()

  return (
    <div className="page about-page">
      <Header />

      <main className="about-main">
        {/* Page header */}
        <div className="about-page-header">
          <div className="about-section-tag">
            <span className="caption-micro text-red" style={{ fontWeight: 800 }}>02. PROFILE</span>
            <div className="about-tag-line" />
            <span className="caption-micro" style={{ opacity: 0.5 }}>ARCHITECTURAL DOSSIER // 2026</span>
          </div>
          <div className="about-title-row">
            <h1 className="headline-lg about-title">关于我</h1>
            <p className="body-md about-intro">
              设计不是主观情绪的宣泄，而是秩序与节奏的建立。画画、
              唱歌与跳舞构成了我的日常观察切片与形式训练。
            </p>
          </div>
          <div className="about-meta-strip">
            <div className="about-meta-cell">
              <span className="caption-micro" style={{ opacity: 0.5 }}>DISCIPLINE</span>
              <span className="caption-micro" style={{ fontWeight: 800 }}>SYSTEMS & RHYTHM</span>
            </div>
            <div className="about-meta-cell">
              <span className="caption-micro" style={{ opacity: 0.5 }}>COORDINATES</span>
              <span className="caption-micro" style={{ fontWeight: 800 }}>31°13'N / 121°28'E</span>
            </div>
            <div className="about-meta-cell">
              <span className="caption-micro" style={{ opacity: 0.5 }}>MODULAR RATIO</span>
              <span className="caption-micro" style={{ fontWeight: 800 }}>DIN 476 / √2 : 1</span>
            </div>
            <div className="about-meta-cell">
              <span className="caption-micro" style={{ opacity: 0.5 }}>STATUS</span>
              <span className="caption-micro" style={{ fontWeight: 800, display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 8, height: 8, background: '#FF3000', display: 'inline-block' }} />
                ACTIVE FORM
              </span>
            </div>
          </div>
        </div>

        {/* Three hobby modules */}
        <div className="about-modules">
          {/* Module 01 — Drawing (large left) */}
          <div className="about-module about-module-drawing">
            <div className="about-module-header">
              <span className="caption-micro text-red" style={{ fontWeight: 800 }}>01. OBSERVATION</span>
              <span className="caption-micro" style={{ opacity: 0.5 }}>MODULE // 01</span>
            </div>
            <div className="about-fig-label caption-micro" style={{ opacity: 0.5 }}>FIG. 01 — FORM & SPACE</div>
            <h2 className="headline-sm about-module-title">
              画画 / DRAWING
            </h2>
            {/* Geometric FIG.01 */}
            <div className="about-geo about-geo-drawing swiss-grid-pattern">
              <div className="geo-d-outer" />
              <div className="geo-d-sq-dark" />
              <div className="geo-d-circle" />
              <div className="geo-d-crosshair-h" />
              <div className="geo-d-crosshair-v" />
              <div className="geo-d-dot" />
              <span className="geo-label geo-label-tl caption-micro">VERTEX [0, 1]</span>
              <span className="geo-label geo-label-br caption-micro text-red">INTERSECT_04</span>
            </div>
            <p className="body-md about-module-desc">
              速写是捕捉动态张力最直接的触角。在黑白线条与几何结构中，寻找物体的物理边界与比例律动。
            </p>
            <div className="about-module-footer">
              <span className="caption-micro" style={{ opacity: 0.5 }}>MEDIUM: RAW GRAPHITE</span>
              <span className="caption-micro" style={{ opacity: 0.5 }}>CANVAS: BOUNDLESS</span>
            </div>
          </div>

          {/* Right column — Singing + Dancing */}
          <div className="about-modules-right">
            {/* Module 02 — Singing */}
            <div className="about-module about-module-singing">
              <div className="about-module-header">
                <span className="caption-micro text-red" style={{ fontWeight: 800 }}>02. HARMONICS</span>
                <span className="caption-micro" style={{ opacity: 0.5 }}>MODULE // 02</span>
              </div>
              <div className="about-fig-label caption-micro" style={{ opacity: 0.5 }}>FIG. 02 — FREQUENCY & HARMONICS</div>
              <div className="about-singing-row">
                <div>
                  <h2 className="headline-sm about-module-title">唱歌 / SINGING</h2>
                  <p className="body-md about-module-desc">
                    声波与视觉排版遵循同样的节拍。唱音的强弱、停顿与共鸣，对应版面中的留白与字重层级。
                  </p>
                </div>
                {/* Waveform geo */}
                <div className="about-geo-wave">
                  <div className="wave-circle" />
                  {[5,10,16,20,14,18,12,8,15,9,6].map((h, i) => (
                    <div key={i} className="wave-bar" style={{ height: h * 4, background: i === 4 ? '#FF3000' : '#000' }} />
                  ))}
                </div>
              </div>
              <div className="about-module-footer">
                <span className="caption-micro" style={{ opacity: 0.5 }}>MODULATION: ANALOG AURAL</span>
                <span className="caption-micro" style={{ opacity: 0.5 }}>INTERVALS: MEASURED CADENCE</span>
              </div>
            </div>

            {/* Module 03 — Dancing */}
            <div className="about-module about-module-dancing">
              <div className="about-module-header">
                <span className="caption-micro text-red" style={{ fontWeight: 800 }}>03. DYNAMICS</span>
                <span className="caption-micro" style={{ opacity: 0.5 }}>MODULE // 03</span>
              </div>
              <div className="about-fig-label caption-micro" style={{ opacity: 0.5 }}>FIG. 03 — KINETIC MOMENTUM</div>
              <div className="about-dancing-row">
                <div>
                  <h2 className="headline-sm about-module-title">跳舞 /<br />DANCING</h2>
                  <p className="body-md about-module-desc">
                    身体在空间中的移动即是三维动效。每一次重心的切换与力量回弹，都是交互动效最真实的参照。
                  </p>
                </div>
                {/* Motion vectors geo */}
                <div className="about-geo-motion">
                  <svg viewBox="0 0 120 90" style={{ width: '100%', height: '100%' }}>
                    <line x1="10" y1="70" x2="60" y2="20" stroke="#000" strokeWidth="2.5" />
                    <line x1="60" y1="20" x2="100" y2="50" stroke="#FF3000" strokeWidth="2.5" />
                    <circle cx="60" cy="20" r="5" fill="#000" />
                    <text x="55" y="14" fontSize="8" fontFamily="Inter" fontWeight="800" fill="#000">APEX (0,-45°)</text>
                    <text x="62" y="55" fontSize="8" fontFamily="Inter" fontWeight="800" fill="#FF3000">PIVOT ACCELERATION</text>
                  </svg>
                </div>
              </div>
              <div className="about-module-footer">
                <span className="caption-micro" style={{ opacity: 0.5 }}>PHYSICS: INERTIAL MOMENTUM</span>
                <span className="caption-micro" style={{ opacity: 0.5 }}>AXIS: Z-ROTATIONAL VECTOR</span>
              </div>
            </div>
          </div>
        </div>

        {/* Manifesto bottom strip */}
        <div className="about-manifesto">
          <div className="about-manifesto-text">
            <span className="caption-micro text-red" style={{ fontWeight: 800 }}>MANIFESTO AXIOM</span>
            <h3 className="headline-sm">从感官节奏到数字界面的几何映射</h3>
          </div>
          <button className="btn-secondary about-manifesto-btn" onClick={() => navigate('/works')}>
            查看对应作品 <ArrowRight size={16} strokeWidth={2.5} />
          </button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
