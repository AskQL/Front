import { BrowserWindow, ipcMain, shell } from 'electron'
import { createSubWindow } from '../windows/subWindow'

/**
 * NOTE: IPC Handler 한 번에 등록, 관리
 */
export function registerIpcHandlers(mainWindow?: BrowserWindow): void {
  ipcMain.on('ping', () => {
    console.log('pong')
  })

  ipcMain.on('open-external', (_event, url: string) => {
    if (/^(mailto:|http)/.test(url)) {
      shell.openExternal(url)
    }
  })

  ipcMain.on(
    'open-sub-window',
    (_event, options: { width: number; height: number; route: string }) => {
      createSubWindow({
        width: options.width,
        height: options.height,
        parent: mainWindow!,
        route: options.route,
        modal: true
      })
    }
  )

  ipcMain.on('close-current-window', (event) => {
    const win = BrowserWindow.fromWebContents(event.sender)
    win?.close()
  })
}
