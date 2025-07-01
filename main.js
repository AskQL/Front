// main.js
// Electron 애플리케이션의 메인 프로세스 파일입니다.
// 앱의 생명 주기를 관리하고 브라우저 창을 생성합니다.

const { app, BrowserWindow } = require("electron"); // Electron 모듈에서 app 객체와 BrowserWindow 클래스를 불러옵니다.
const path = require("path"); // Node.js 'path' 모듈을 불러와 파일 경로를 다룹니다.

/**
 * 새로운 Electron 브라우저 창을 생성하고 설정합니다.
 */
function createWindow() {
  // BrowserWindow 인스턴스를 생성하여 메인 창을 만듭니다.
  const mainWindow = new BrowserWindow({
    width: 1200, // 창의 초기 너비 (픽셀)
    height: 800, // 창의 초기 높이 (픽셀)
    webPreferences: {
      // 웹 페이지의 동작 및 기능에 대한 설정을 정의합니다.
      preload: path.join(__dirname, "preload.js"), // 웹 페이지가 로드되기 전에 실행될 preload 스크립트의 경로를 지정합니다.
      // __dirname은 현재 파일(main.js)의 디렉토리 경로를 나타냅니다.

      // 주의: 아래 두 설정은 개발 편의를 위한 것이며, 보안상 위험할 수 있습니다.
      // 실제 프로덕션 애플리케이션에서는 contextIsolation을 true로 유지하고
      // preload 스크립트를 통해 필요한 API만 안전하게 노출하는 것을 강력히 권장합니다.
      nodeIntegration: true, // 렌더러 프로세스에서 Node.js API (예: require, process) 사용을 허용합니다.
      contextIsolation: false, // preload 스크립트와 렌더러 프로세스의 JavaScript 컨텍스트를 분리하지 않습니다.
    },
  });

  // 지정된 URL (구글 홈페이지)을 메인 창에 로드합니다.
  mainWindow.loadURL("https://www.google.com");

  // 개발자 도구를 엽니다. (개발 중에 유용하며, 배포 시에는 주석 처리하거나 제거합니다.)
  // mainWindow.webContents.openDevTools();
}

// Electron 앱이 초기화되고 준비될 때 실행될 콜백 함수를 정의합니다.
app.whenReady().then(() => {
  createWindow(); // 앱이 준비되면 메인 창을 생성합니다.

  // macOS에서 Dock 아이콘을 클릭했을 때 열려 있는 창이 없으면 새 창을 생성하는 이벤트를 처리합니다.
  app.on("activate", () => {
    // 모든 브라우저 창이 닫혔는지 확인합니다.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow(); // 새 창을 생성합니다.
    }
  });
});

// 모든 창이 닫혔을 때 앱을 종료하는 이벤트를 처리합니다.
app.on("window-all-closed", () => {
  // 현재 운영 체제가 macOS (darwin)가 아닌 경우에만 앱을 종료합니다.
  // macOS에서는 사용자가 명시적으로 종료(Cmd + Q 등)하기 전까지는 앱이 백그라운드에서 실행되는 것이 일반적입니다.
  if (process.platform !== "darwin") {
    app.quit(); // 애플리케이션을 종료합니다.
  }
});
