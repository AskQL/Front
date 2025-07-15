import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './assets/main.css'
import { Toaster } from 'sonner'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from '@/components/error-fallback'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, info) => {
        console.error('ErrorBoundary caught:', error)
        window.electron?.ipcRenderer?.send?.('renderer-error', {
          message: error.message,
          stack: error.stack,
          componentStack: info.componentStack
        })
      }}
    >
      <App />
    </ErrorBoundary>
  </StrictMode>
)
