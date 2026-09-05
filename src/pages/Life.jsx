import Header from '../components/Header'
import Footer from '../components/Footer'
import './Life.css'

const timetable = [
  { time: '09:20', phase: 'PHASE 01', title: '晨间速写', tag: 'FIELD STUDY', code: '#A01',
    desc: '每日捕捉 5 组几何动态与光影边界。以手写白板为载体，在非数字媒介上快速推导张力结构与体量平衡。' },
  { time: '11:00', phase: 'PHASE 02', title: '对齐感觉', tag: 'GRID RATIO', code: '#B02',
    desc: '梳理排版网格，确立字体比例尺与留白律动。严格锁死 4px 与 8px 基准对齐，排除无序留白与非理性行距。' },
  { time: '14:30', phase: 'PHASE 03', title: '界面打磨', tag: 'ACTIVE BENCH', code: '#C03',
    desc: '严谨推敲组件状态、按键回弹与交互层级。剥离一切装饰性渐变与模糊阴影，依托极性对比呈现信息重力。' },
  { time: '17:10', phase: 'PHASE 04', title: '走查回弹', tag: 'AUDIT CHECK', code: '#D04',
    desc: '极高对比度无障碍验证与跨端视口校准。在高分辨率与微小视窗之间寻找绝对清晰的视觉截断点。' },
  { time: '19:40', phase: 'PHASE 05', title: '舞台与嗓音', tag: 'RESONANCE', code: '#E05',
    desc: '律动与发声练习，汲取空间张力与动效灵感。声波频率的延展向几何负空间拥有同源的数学节奏。' },
]

export default function Life() {
  return (
    <div className="page life-page">
      <Header />

      {/* Status strip */}
      <div className="life-strip">
        <div className="life-strip-left">
          <span className="life-strip-dot" />
          <span className="caption-micro">SYSTEM ACTIVE — LOG 03 // ARCHITECTURAL DIARY</span>
        </div>
        <div className="life-strip-right caption-micro">
          <span>GRID: 24PX RATIONAL</span>
          <span className="text-red" style={{ fontWeight: 800 }}>LATENCY: 12MS</span>
        </div>
      </div>

      <main className="life-main">
        {/* LEFT sticky index column */}
        <aside className="life-sidebar">
          <div className="life-sidebar-index">
            <span className="caption-micro text-red" style={{ fontWeight: 800 }}>03. PRACTICE</span>
            <span className="caption-micro" style={{ opacity: 0.5 }}>SERIES 2026</span>
          </div>
          <div className="life-sidebar-meta caption-micro" style={{ opacity: 0.5 }}>ROUTINE & DISCIPLINE</div>
          <h1 className="life-sidebar-title headline-lg">
            设计师的<br />日常
          </h1>
          <p className="body-md life-sidebar-desc">
            记录工作室的连续节拍与日常推演。生活即训练场。
          </p>

          <div className="life-metric-grid">
            <div className="life-metric-cell">
              <span className="caption-micro" style={{ opacity: 0.5 }}>METRIC SYSTEM</span>
              <span className="caption-micro" style={{ fontWeight: 800 }}>SWISS 4-COL</span>
            </div>
            <div className="life-metric-cell">
              <span className="caption-micro" style={{ opacity: 0.5 }}>CADENCE RATIO</span>
              <span className="caption-micro text-red" style={{ fontWeight: 800 }}>1 : 1.618</span>
            </div>
          </div>

          {/* NOW status block */}
          <div className="life-now-block">
            <div className="life-now-header">
              <span className="life-now-indicator" />
              <span className="caption-micro" style={{ color: '#fff', fontWeight: 800 }}>[ CURRENT PROTOCOL: IN PROGRESS ]</span>
            </div>
            <div className="life-now-body">
              <p className="life-now-title">正在打磨：海报排版系列</p>
              <div className="life-now-pct">67%</div>
              <div className="life-pct-label caption-micro" style={{ color: '#fff', opacity: 0.6 }}>
                SYSTEM<br />EXECUTION
              </div>
              {/* Progress meter */}
              <div className="life-pct-track">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className={`life-pct-seg ${i < 7 ? 'life-pct-seg--filled' : ''} ${i === 6 ? 'life-pct-seg--active' : ''}`} />
                ))}
              </div>
              <div className="life-pct-scale caption-micro">
                {[0,10,20,30,40,50,60,70,80,90].map(n => (
                  <span key={n} style={{ color: n === 60 ? '#FF3000' : 'rgba(255,255,255,0.4)' }}>{n}</span>
                ))}
              </div>
            </div>
            <div className="life-now-footer">
              <span className="caption-micro" style={{ color: 'rgba(255,255,255,0.5)' }}>OPERATIONAL<br />INTERVAL: 08H 40M</span>
              <button className="life-calibrate-btn">
                CALIBRATE <span style={{ marginLeft: 4 }}>→</span>
              </button>
            </div>
          </div>
        </aside>

        {/* RIGHT — timetable */}
        <section className="life-timetable">
          <div className="life-table-header">
            <div>
              <p className="caption-micro" style={{ fontWeight: 800 }}>TIMETABLE // DAILY BEATS</p>
              <p className="caption-micro" style={{ opacity: 0.5 }}>RESONANCE CYCLE // MONOGRAPH SEQUENCE</p>
            </div>
            <div className="life-table-meta">
              <span className="caption-micro" style={{ opacity: 0.5 }}>LOC: SHANGHAI 31.2304° N</span>
              <span className="life-status-badge caption-micro">STATUS: MONOCHROME</span>
            </div>
          </div>

          {timetable.map((row, i) => (
            <div key={i} className="life-row">
              <div className="life-row-time">{row.time}</div>
              <div className="life-row-content">
                <div className="life-row-top">
                  <div className="life-row-title-row">
                    <span className="caption-micro" style={{ opacity: 0.5 }}>{row.phase}</span>
                    <span className="life-row-bullet" />
                    <span className="life-row-title">{row.title}</span>
                  </div>
                  <div className="life-row-tag">
                    <span className="caption-micro" style={{ opacity: 0.7 }}>{row.tag}</span>
                    <span className="caption-micro text-red" style={{ fontWeight: 800 }}>{row.code}</span>
                  </div>
                </div>
                <p className="body-md life-row-desc">{row.desc}</p>
              </div>
            </div>
          ))}

          {/* Archive footer */}
          <div className="life-archive-bar">
            <div className="life-archive-mono">
              <span style={{ fontSize: 28, fontWeight: 900 }}>L</span>
            </div>
            <div>
              <p className="caption-micro" style={{ fontWeight: 800 }}>LAMB ARCHIVE // EDITION III</p>
              <p className="caption-micro" style={{ opacity: 0.5 }}>INTERNATIONAL TYPOGRAPHIC STYLE REPOSITORY</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 'auto' }}>
              <span className="life-archive-dot" />
              <span className="caption-micro" style={{ fontWeight: 800 }}>DISCIPLINE: RIGID</span>
            </div>
            <span className="caption-micro" style={{ opacity: 0.5 }}>INDEX ID: 772-003</span>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
