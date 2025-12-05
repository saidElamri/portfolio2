import React from 'react'
import ReactDOM from 'react-dom/client'
import { LazyMotion, domAnimation, MotionConfig } from 'framer-motion'
import App from './App.jsx'
import { ToastProvider } from './components/Toast.jsx'
import { MotionProvider } from './providers/MotionProvider.jsx'
import './index.css'
import './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LazyMotion features={domAnimation}>
      <MotionProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </MotionProvider>
    </LazyMotion>
  </React.StrictMode>,
)