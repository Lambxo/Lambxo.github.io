import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CursorGrid from '../components/CursorGrid'
import './Contact.css'

const accounts = [
  { channel: '微信 / WECHAT', handle: 'LAMB_STUDIO' },
  { channel: 'QQ', handle: '88****21' },
  { channel: '微博 / WEIBO', handle: '@LAMB的粘土日记' },
  { channel: '豆瓣 / DOUBAN', handle: 'LAMB' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.name && form.email && form.message) {
      setSent(true)
    }
  }

  return (
    <div className="page contact-page">
      <Header />

      {/* Dispatch strip */}
      <div className="contact-strip">
        <div className="contact-strip-left">
          <span className="contact-strip-dot" />
          <span className="caption-micro">DISPATCH PROTOCOL // TERMINAL 05</span>
        </div>
        <div className="contact-strip-right caption-micro">
          <span>LATENCY: 12MS</span>
          <span>CIPHER: AES-256</span>
          <span className="text-red" style={{ fontWeight: 800 }}>PORT: 8080 [ACTIVE]</span>
        </div>
      </div>

      <main className="contact-main">
        {/* LEFT — identity + accounts */}
        <section className="contact-left">
          <div className="contact-section-tag">
            <span className="caption-micro text-red" style={{ fontWeight: 800, background: '#FF3000', color: '#fff', padding: '4px 8px' }}>■ 05. SIGNAL</span>
            <span className="caption-micro" style={{ opacity: 0.5, marginLeft: 16 }}>TRANSMISSION DESK</span>
          </div>

          <h1 className="headline-lg contact-title">联系我</h1>

          {/* Monogram card */}
          <div className="contact-id-card">
            <div className="contact-monogram swiss-grid-pattern">
              <span>L</span>
              <span className="caption-micro contact-mono-id">ID: 001</span>
            </div>
            <div className="contact-id-info">
              <div className="contact-id-name-row">
                <span className="contact-id-name">LAMB</span>
                <span className="contact-online-badge caption-micro">ONLINE</span>
              </div>
              <p className="body-md contact-id-role">设计师 · 画画 / 唱歌 / 跳舞</p>
              <div className="contact-id-tags">
                <span className="contact-tag caption-micro">CREATIVE DEV</span>
                <span className="contact-tag caption-micro">SHANGHAI</span>
              </div>
            </div>
          </div>

          {/* Account table */}
          <div className="contact-accounts">
            <div className="contact-accounts-header">
              <span className="caption-micro" style={{ fontWeight: 800 }}>COMMUNICATION MATRIX</span>
              <span className="caption-micro" style={{ opacity: 0.5 }}>STATIC ADDRESSES</span>
            </div>
            {accounts.map((a) => (
              <div key={a.channel} className="contact-account-row">
                <span className="caption-micro contact-account-channel">{a.channel}</span>
                <span className="caption-micro contact-account-handle">{a.handle}</span>
              </div>
            ))}
          </div>

          <div className="contact-response caption-micro">
            <span style={{ opacity: 0.5 }}>RESPONSE CADENCE: &lt; 24 HOURS</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, opacity: 0.7 }}>
              <span className="contact-strip-dot" />
              ALL FREQUENCIES MONITORED
            </span>
          </div>
        </section>

        {/* RIGHT — form */}
        <section className="contact-right" style={{ position: 'relative', overflow: 'hidden' }}>
          {/* CursorGrid 表单背景交互特效 */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <CursorGrid
              cellSize={56}
              color="#FF3000"
              radius={130}
              falloff="smooth"
              holdTime={400}
              fadeDuration={800}
              lineWidth={1.2}
              maxOpacity={0.6}
              fillOpacity={0}
              gridOpacity={0}
              cellRadius={0}
              clickPulse
              pulseSpeed={600}
            />
          </div>
          {/* 表单内容，叠在 CursorGrid 之上 */}
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
          {!sent ? (
            <>
              <div className="contact-form-header">
                <span className="caption-micro" style={{ fontWeight: 800 }}>[ 信号发送 FORM ]</span>
                <span className="caption-micro text-red" style={{ fontWeight: 800 }}>INBOUND ROUTE</span>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-field">
                  <label className="contact-label caption-micro">名字 / NAME <span className="text-red">*</span></label>
                  <input
                    type="text"
                    className="contact-input"
                    placeholder="请输入您的姓名或称谓..."
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label className="contact-label caption-micro">邮箱 / EMAIL <span className="text-red">*</span></label>
                  <input
                    type="email"
                    className="contact-input"
                    placeholder="NAME@DOMAIN.COM"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label className="contact-label caption-micro">想说的话 / MESSAGE <span className="text-red">*</span></label>
                  <textarea
                    className="contact-input contact-textarea"
                    placeholder="写下你想交流的合作、提问或只是简单的问候..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    required
                    rows={5}
                  />
                </div>

                <button type="submit" className="contact-submit btn-primary">
                  发送问候 / TRANSMIT <ArrowRight size={18} strokeWidth={2.5} />
                </button>
              </form>

              <div className="contact-form-footer">
                <span className="caption-micro" style={{ opacity: 0.5 }}>ENCRYPTED DIRECT CHANNEL</span>
                <span className="caption-micro" style={{ opacity: 0.5 }}>NO SPAM PROTOCOL</span>
              </div>
            </>
          ) : (
            /* Success state */
            <div className="contact-success">
              <div className="contact-success-inner">
                <span className="caption-micro text-red" style={{ fontWeight: 800 }}>SIGNAL RECEIVED //</span>
                <h2 className="headline-md contact-success-title">收到啦</h2>
                <p className="body-md" style={{ color: '#fff', opacity: 0.8 }}>
                  LAMB 已收到你的信号，将在 24 小时内回应。
                </p>
                <button
                  className="contact-retry-btn caption-micro"
                  onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }) }}
                >
                  再写一条 / SEND ANOTHER →
                </button>
              </div>
            </div>
          )}
          </div>{/* end content z:1 */}
        </section>
      </main>

      {/* Bottom dispatch bar */}
      <div className="contact-dispatch-bar">
        <div className="caption-micro">
          <span style={{ fontWeight: 800 }}>LAMB ARCHIVE SYSTEM</span>
          <span style={{ margin: '0 8px', opacity: 0.4 }}>■</span>
          <span style={{ opacity: 0.5 }}>PHYSICAL DISPATCH TERMINAL</span>
        </div>
        <div className="caption-micro" style={{ display: 'flex', gap: 16 }}>
          <span className="text-red" style={{ fontWeight: 800 }}>STATUS // READY</span>
          <span style={{ fontWeight: 800 }}>LOCATION // SHANGHAI</span>
        </div>
      </div>

      <Footer />
    </div>
  )
}
