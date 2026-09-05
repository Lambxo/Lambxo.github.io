import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import './Boot.css'

export default function Boot() {
  const [progress, setProgress] = useState(0)
  const [synced, setSynced] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval)
          setSynced(true)
          return 100
        }
        return p + Math.floor(Math.random() * 4) + 1
      })
    }, 60)
    return () => clearInterval(interval)
  }, [])

  const enterStudio = () => {
    navigate('/home')
  }

  return (
    <div className="boot-screen">
      {/* Top bar */}
      <div className="boot-topbar">
        <div className="boot-topbar-left">
          <span className="boot-indicator" />
          <span className="caption-micro text-white">RF-LOCK // MONOCHROME 625-LINE</span>
        </div>
        <div className="boot-topbar-right">
          <span className="caption-micro text-white">HORIZ FREQ: 15.625 KHZ</span>
          <div className="boot-ntsc caption-micro">NTSC/PAL SYNCHRONOUS</div>
        </div>
      </div>

      {/* Main "TV Set" */}
      <div className="boot-set">
        {/* Left panel */}
        <div className="boot-set-left">
          <div className="boot-set-header">
            <div className="boot-header-meta">
              <div className="boot-square-sm" />
              <span className="caption-micro">TEST-CARD PATTERN 00.9B</span>
            </div>
            <div className="boot-on-air">
              <div className="boot-indicator-sm" />
              <span className="caption-micro">ON AIR</span>
              <span className="caption-micro">CH 03</span>
            </div>
          </div>

          <div className="boot-set-body">
            <div className="boot-broadcast-meta">
              <p className="caption-micro" style={{ opacity: 0.5 }}>BROADCAST STANDARD SPEC</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <p className="caption-micro" style={{ fontWeight: 800, fontSize: 13 }}>ZÜRICH GRAPHIC ARCHITECTURE</p>
                <div className="boot-mono-mini">
                  <span style={{ fontWeight: 900, fontSize: 18 }}>L</span>
                </div>
              </div>
            </div>

            <div className="boot-main-type">
              <div className="boot-headline">LAMB</div>
              <div className="boot-headline">STUDIO</div>
              <div className="boot-headline">SIGNAL</div>
              <div className="boot-align-tag">
                <span className="boot-tag-red caption-micro">03 — ALIGN</span>
                <span className="caption-micro" style={{ marginLeft: 12 }}>RASTER POSITION LOCK</span>
              </div>
            </div>

            <div className="boot-progress-area">
              <div className="boot-progress-label">
                <span className="caption-micro">CARRIER PHASE CALIBRATION</span>
                <span className="caption-micro text-red" style={{ fontWeight: 800 }}>
                  {Math.min(progress, 100)}% — {synced ? 'SYNCHRONIZED' : 'LOCKING...'}
                </span>
              </div>
              <div className="boot-progress-track">
                <div
                  className="boot-progress-fill"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
              <div className="boot-progress-meta">
                <span className="caption-micro" style={{ opacity: 0.5 }}>SCAN 15734 HZ</span>
                <span className="caption-micro" style={{ opacity: 0.5 }}>BANDWIDTH 5.5 MHZ</span>
                <span className="caption-micro" style={{ opacity: 0.5 }}>DELAY 0.04 MS</span>
              </div>
            </div>

            <button className="boot-enter-btn" onClick={enterStudio}>
              <span>[ 进入工作室 ENTER STUDIO ]</span>
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Right panel — Geometry */}
        <div className="boot-set-right">
          <div className="boot-geo">
            {/* Nested squares + circle */}
            <div className="boot-geo-outer-sq" />
            <div className="boot-geo-circle" />
            <div className="boot-geo-inner-sq" />
            <div className="boot-geo-dot" />
            {/* Corner marks */}
            <div className="boot-corner boot-corner-tl" />
            <div className="boot-corner boot-corner-tr" />
            <div className="boot-corner boot-corner-bl" />
            <div className="boot-corner boot-corner-br" />
          </div>
          <div className="boot-oscill">
            <div className="boot-osc-cell">
              <span className="caption-micro" style={{ opacity: 0.5 }}>OSCILLATOR</span>
              <span className="boot-osc-val">3.579545 MHZ</span>
            </div>
            <div className="boot-osc-cell">
              <span className="caption-micro" style={{ opacity: 0.5 }}>ATTENUATION</span>
              <span className="boot-osc-val">-0.42 DB</span>
            </div>
          </div>
        </div>

        {/* Set footer */}
        <div className="boot-set-footer">
          <span className="caption-micro" style={{ opacity: 0.4 }}>
            OLD TELEVISION PROTOCOL // 1950S RETRO-SCAN FREQ : CRT-MOD-891
          </span>
          <span className="caption-micro" style={{ opacity: 0.4 }}>
            SWISS TYPOGRAPHIC SYSTEM // ARCHIVAL UNIT 00
          </span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="boot-bottombar">
        <span className="caption-micro" style={{ opacity: 0.4 }}>SYSTEM STATUS: CONVERGENCE OK</span>
        <span className="caption-micro" style={{ opacity: 0.4 }}>GRID COORDINATE: 47°22'38"N 8°32'33"E</span>
      </div>
    </div>
  )
}
