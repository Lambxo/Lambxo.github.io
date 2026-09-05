import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import Boot from './pages/Boot'
import Home from './pages/Home'
import About from './pages/About'
import Life from './pages/Life'
import Works from './pages/Works'
import Contact from './pages/Contact'
import './App.css'

function PageWrapper({ children }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.3s ease-out'
      el.style.opacity = '1'
    })
  }, [])

  return (
    <div ref={ref} style={{ opacity: 0 }}>
      {children}
    </div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <div className="app swiss-noise">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/boot" replace />} />
        <Route path="/boot" element={<PageWrapper><Boot /></PageWrapper>} />
        <Route path="/home" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/life" element={<PageWrapper><Life /></PageWrapper>} />
        <Route path="/works" element={<PageWrapper><Works /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="*" element={<Navigate to="/boot" replace />} />
      </Routes>
    </div>
  )
}
