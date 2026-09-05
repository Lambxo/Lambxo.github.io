import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Lambxo.github.io 是用户页面仓库，base 为根路径
  build: {
    outDir: 'docs',   // 输出到 docs/ 文件夹，GitHub Pages 从此目录托管
    emptyOutDir: true, // 构建前清空 docs/ 旧内容
  },
})
