/// <reference types="vite/client" />
interface Window {
  api: {
    versions: {
      electron: string
      chrome: string
      node: string
      [key: string]: string
    }
    send: (channel: string, data?: unknown) => void
    on?: (channel: string, listener: (...args: unknown[]) => void) => void
    closeCurrentWindow: () => void
  }
}
