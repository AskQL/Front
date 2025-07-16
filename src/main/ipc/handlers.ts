import { BrowserWindow, ipcMain, shell } from 'electron'
import { createSubWindow } from '../windows/subWindow'

/**
 * NOTE: IPC Handler 한 번에 등록, 관리
 */
export function registerIpcHandlers(mainWindow?: BrowserWindow): void {
  ipcMain.on('ping', () => {
    console.log('pong')
  })

  ipcMain.on('mailto-external', (_event, mailtoUrl: string) => {
    if (mailtoUrl.startsWith('mailto:')) {
      shell.openExternal(mailtoUrl)
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
}
