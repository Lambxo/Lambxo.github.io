import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CursorGrid from '../components/CursorGrid'
import './Works.css'

const works = [
  {
    num: '01', tag: 'VISUAL / POSTER 视觉与海报',
    title: '软糖舞台',
    blurb: '基于几何张力与动态重力构建的剧场视觉系统与实验海报。',
    geo: 'diagonal',
    span: true, // wide cell
  },
  {
    num: '02', tag: 'PRODUCT UI 产品界面',
    title: '哼唱备忘录',
    blurb: '以声音节拍为枢的极简灵感记录工具与微交互系统。',
    geo: 'wave',
  },
  {
    num: '03', tag: 'BRANDING 品牌识别',
    title: '圆角速写本',
    blurb: '探讨严谨性网格与手工素描质感的纸品文具视觉识别体系。',
    geo: 'diamond',
  },
  {
    num: '04', tag: 'MOTION 动效设计',
    title: '回弹课表',
    blurb: '模拟真实物理重力与固弹阻尼的日程节奏动效实验。',
    geo: 'spring',
  },
  {
    num: '05', tag: 'SPATIAL 空间概念',
    title: '糖果货架',
    blurb: '高密度零售货架的视觉动线与模数化空间陈列方案。',
    geo: 'grid',
  },
]

function GeoFigure({ type }) {
  if (type === 'diagonal') return (
    <div className="works-geo works-geo-diagonal swiss-diagonal">
      <div className="wg-d-circle" />
      <div className="wg-d-sq" />
      <div className="wg-d-dot" />
      <span className="caption-micro wg-label-tl">GRID A-1</span>
      <span className="caption-micro wg-label-tr">R: 45°</span>
      <span className="caption-micro text-red wg-label-br" style={{ fontWeight: 800 }}>STATUS: ARCHIVED</span>
      <div className="wg-d-meta">
        <div><span className="caption-micro" style={{ opacity: 0.5 }}>MASS</span><br /><span className="caption-micro" style={{ fontWeight: 800 }}>88.1</span></div>
        <div><span className="caption-micro" style={{ opacity: 0.5 }}>SCALE</span><br /><span className="caption-micro" style={{ fontWeight: 800 }}>1.032</span></div>
        <div><span className="caption-micro" style={{ opacity: 0.5 }}>VECT.</span><br /><span className="caption-micro" style={{ fontWeight: 800 }}>D-09</span></div>
      </div>
    </div>
  )

  if (type === 'wave') return (
    <div className="works-geo swiss-dots">
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, padding: 16 }}>
        {[6,10,14,20,8,18,24,12,6,14,10,16,20,8].map((h, i) => (
          <div key={i} style={{ width: 6, height: h * 3, background: i === 7 ? '#FF3000' : '#000', flexShrink: 0 }} />
        ))}
      </div>
      <div style={{ padding: '8px 16px', borderTop: '1px solid #000', display: 'flex', justifyContent: 'space-between' }}>
        <span className="caption-micro" style={{ opacity: 0.5 }}>WAVE_SEQUENCE.LOG</span>
        <span className="caption-micro text-red" style={{ fontWeight: 800 }}>● REC 1208PM</span>
      </div>
      <div style={{ padding: '4px 16px 12px', display: 'flex', gap: 8 }}>
        {['44.1 KHZ', '24 BIT', 'BUFFER'].map((l, i) => (
          <span key={l} className="caption-micro" style={{ border: i === 2 ? '1px solid #FF3000' : '1px solid #000', padding: '2px 8px', color: i === 2 ? '#FF3000' : '#000', fontWeight: i === 2 ? 800 : 500 }}>{l}</span>
        ))}
      </div>
    </div>
  )

  if (type === 'diamond') return (
    <div className="works-geo swiss-grid-pattern">
      <svg viewBox="0 0 140 120" style={{ width: '100%', height: '100%' }}>
        <rect x="45" y="10" width="60" height="60" transform="rotate(45 75 40)" fill="none" stroke="#000" strokeWidth="2" strokeDasharray="4 4"/>
        <rect x="50" y="25" width="50" height="50" transform="rotate(45 75 50)" fill="none" stroke="#000" strokeWidth="2"/>
        <circle cx="75" cy="50" r="6" fill="#FF3000" />
        <text x="4" y="12" fontSize="8" fontFamily="Inter" fontWeight="500" fill="#888">FIG.1-D</text>
        <text x="4" y="108" fontSize="8" fontFamily="Inter" fontWeight="500" fill="#888">1:1 TQ</text>
      </svg>
    </div>
  )

  if (type === 'spring') return (
    <div className="works-geo" style={{ background: '#fff', padding: 12 }}>
      <svg viewBox="0 0 160 80" style={{ width: '100%', height: '100%' }}>
        <line x1="8" y1="40" x2="25" y2="40" stroke="#000" strokeWidth="2"/>
        <path d="M25,40 Q35,10 45,40 Q55,70 65,40 Q75,10 85,40 Q95,70 105,40 Q115,10 120,40" fill="none" stroke="#000" strokeWidth="2"/>
        <line x1="120" y1="40" x2="152" y2="40" stroke="#000" strokeWidth="2"/>
        <rect x="148" y="20" width="6" height="40" fill="#000"/>
        <circle cx="25" cy="40" r="5" fill="#000"/>
        <circle cx="120" cy="40" r="5" fill="#FF3000"/>
        <text x="8" y="74" fontSize="7" fontFamily="Inter" fill="#888">SPRING_DAMPING: 0.82</text>
        <text x="70" y="74" fontSize="7" fontFamily="Inter" fill="#FF3000">T-CURVE [CASE-OUT]</text>
      </svg>
      <div style={{ display: 'flex', gap: 8, padding: '0 4px 4px', borderTop: '1px solid #ccc' }}>
        {['BMS', 'T1: 240ms', '400HZ', 'REST'].map((l,i) => (
          <span key={l} className="caption-micro" style={{ opacity: i === 0 ? 0.4 : 1 }}>{l}</span>
        ))}
      </div>
    </div>
  )

  if (type === 'grid') return (
    <div className="works-geo" style={{ background: '#fff', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '1fr 1fr', border: 'none' }}>
      {['BOX-A', 'RED-01', 'BOX-B', 'ZONE I', 'ZONE II', 'AXIS 99'].map((l,i) => (
        <div key={l} style={{
          border: '1px solid #000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: i === 1 || i === 5 ? '#FF3000' : '#fff',
          color: i === 1 || i === 5 ? '#fff' : '#000',
          padding: 8,
        }}>
          <span className="caption-micro" style={{ fontWeight: 800 }}>{l}</span>
        </div>
      ))}
    </div>
  )

  return null
}

export default function Works() {
  const navigate = useNavigate()
  const gridRef = useRef(null)

  // 将鼠标事件从网格单元格转发到 CursorGrid 容器，使其能透过 z-index 追踪鼠标
  const forwardPointer = (e) => {
    const cursorGridEl = gridRef.current?.querySelector('.cursor-grid')
    if (cursorGridEl) {
      cursorGridEl.dispatchEvent(new PointerEvent('pointermove', {
        clientX: e.clientX,
        clientY: e.clientY,
        bubbles: false,
      }))
    }
  }

  const forwardClick = (e) => {
    const cursorGridEl = gridRef.current?.querySelector('.cursor-grid')
    if (cursorGridEl) {
      cursorGridEl.dispatchEvent(new PointerEvent('pointerdown', {
        clientX: e.clientX,
        clientY: e.clientY,
        bubbles: false,
      }))
    }
  }

  return (
    <div className="page works-page">
      <Header />

      <main className="works-main">
        {/* Header */}
        <div className="works-header">
          <div>
            <div className="works-index-tag">
              <span className="works-red-sq" />
              <span className="caption-micro text-red" style={{ fontWeight: 800 }}>04. ARCHIVE / 档案索引</span>
            </div>
            <h1 className="headline-lg works-title">作品墙</h1>
            <p className="body-md works-subtitle">
              精选设计实践归档，以客观网格呈现。摒弃装饰性包装。
            </p>
          </div>
          <div className="works-system-tag">
            <div>
              <p className="caption-micro" style={{ opacity: 0.5 }}>SYSTEM PROTOCOL</p>
              <p className="caption-micro" style={{ opacity: 0.5 }}>PURE FORM & TYPE</p>
              <p className="caption-micro" style={{ fontWeight: 800 }}>TOTAL: 05 UNITS</p>
            </div>
            <div className="works-ix-badge">IX</div>
          </div>
        </div>

        {/* Bento grid */}
        <div
          ref={gridRef}
          className="works-grid"
          style={{ position: 'relative' }}
          onPointerMove={forwardPointer}
          onPointerDown={forwardClick}
        >
          {/* CursorGrid 透过网格单元追踪鼠标的背景层 */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <CursorGrid
              cellSize={80}
              color="#000000"
              radius={200}
              falloff="smooth"
              holdTime={400}
              fadeDuration={900}
              lineWidth={1.5}
              maxOpacity={0.5}
              fillOpacity={0}
              gridOpacity={0}
              cellRadius={0}
              clickPulse
              pulseSpeed={600}
            />
          </div>
          {works.map((w) => (
            <div key={w.num} className={`works-cell ${w.span ? 'works-cell-wide' : ''}`}>
              <div className="works-cell-header">
                <span className="works-cell-num text-red">{w.num}</span>
                <span className="caption-micro works-cell-tag">{w.tag}</span>
                <button className="works-cell-arrow" aria-label={`查看 ${w.title}`}>
                  <ArrowUpRight size={18} strokeWidth={2.5} />
                </button>
              </div>
              <div className="works-cell-divider" />
              <h2 className="works-cell-title">{w.title}</h2>
              <GeoFigure type={w.geo} />
              <p className="body-md works-cell-blurb">{w.blurb}</p>
              <button className="works-view-btn caption-micro">VIEW CASE →</button>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="works-cta-strip">
          <div className="works-cta-left">
            <div className="works-cta-bar" />
            <div>
              <p className="caption-micro" style={{ fontWeight: 800 }}>PROJECT INQUIRIES & COLLABORATIONS</p>
              <p className="caption-micro" style={{ opacity: 0.5 }}>LAMB ARCHIVE / MONOCHROME MODULAR SYSTEMS</p>
            </div>
          </div>
          <button className="btn-primary" onClick={() => navigate('/contact')}>
            INITIATE CONTACT / 发起协作 →
          </button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
