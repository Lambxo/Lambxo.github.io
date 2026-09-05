import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* HashRouter：GitHub Pages 静态托管不支持 BrowserRouter 的 history 模式，
        HashRouter 通过 URL hash (#/home) 实现路由，无需服务端配置 */}
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
