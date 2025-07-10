/// <reference types="vite/client" />
interface Window {
  api: {
    versions: {
      electron: string
      chrome: string
      node: string
      [key: string]: string
    }
  }
}
