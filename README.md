# QGenie APP

이 프로젝트는 QGenie 서비스의 ~를 제공합니다. ~목표로 합니다.

---

## 🚀 시작하기

### **Electron 앱 - 개발 환경 설정 가이드**

이 가이드는 QGenie Electron 애플리케이션의 초기 설정 및 빌드 프로세스를 설명합니다.

1. **개발 환경 설정**

   ```bash
   #Electron 프로젝트 초기화
   npm init -y
   ```

2. Electron 설치

   ```bash
    npm install --save-dev electron
   ```

3. Electron 실행 환경을 위한 package.json 설정
   package.json 파일을 수정하여 main 진입점과 Electron 앱 실행을 위한 start 스크립트를 포함합니다.

   필요에 따라 name, version, description을 조정하세요

   ```json
   {
     "name": "QGenie",
     "version": "0.0.1",
     "description": "QGenie Electron Application",
     "main": "main.js", // 이 줄이 main.js 파일을 가리키는지 확인하세요.
     "author": "QGenie Team",
     "license": "ISC",
     "scripts": {
       "start": "electron ." // Electron 앱 실행을 위한 스크립트를 추가합니다.
     },
     "devDependencies": {
       "electron": "^37.2.0" // 설치된 Electron 버전이 여기에 있는지 확인하세요.
     }
   }
   ```

4. .dmg (macOS) 및 .exe (Windows) 파일 생성
   이 섹션에서는 electron-builder를 설정하여 Electron 애플리케이션을 배포 가능한 파일로 패키징하는 방법을 다룹니다.

   ```bash
   #electron-builder를 개발 의존성으로 설치합니다.
   npm install --save-dev electron
   ```

5. package.json에 빌드 스크립트 설정
   package.json 파일을 수정하여 build 스크립트와 electron-builder를 위한 build 설정 섹션을 추가/업데이트합니다.

   package.json 파일을 열고 scripts 및 build 섹션을 다음과 같이 추가/업데이트합니다:

   ```json
   {
     "build": {
       "appId": "com.qgenie.app", // 고유한 애플리케이션 ID
       "productName": "QGenie", // 생성될 애플리케이션 파일의 이름 (예: QGenie.dmg, QGenie Setup.exe)
       "files": [
         "main.js",
         "package.json",
         "build/", // 아이콘 등을 위한 폴더
         "dist/" // 렌더러/프론트엔드 빌드 결과물이 'dist' 폴더에 들어가는 경우
         // 실제 프로젝트 구조에 따라 조정하세요.
         // 예를 들어, 'renderer' 폴더가 있다면 "renderer/dist/**"가 필요할 수 있습니다.
       ],
       "mac": {
         "category": "public.app-category.developer-tools",
         "icon": "build/icon.icns", // macOS 아이콘 경로
         "target": "dmg" // macOS용 타겟 형식
       },
       "win": {
         "icon": "build/icon.ico", // Windows 아이콘 경로
         "target": "nsis" // Windows용 설치 프로그램 타겟
       }
     }
   }
   ```

   files 섹션에 대한 중요 참고 사항:

   files 배열은 electron-builder에게 프로젝트의 어떤 파일과 폴더를 최종 패키지된 애플리케이션에 포함해야 하는지 알려줍니다.

   프론트엔드 애플리케이션(예: React, Vue, Angular)이 특정 디렉토리(예: build, dist, out)로 빌드되는 경우, 해당 디렉토리를 files 배열에 반드시 포함해야 합니다 (예: "dist/" 또는 "path/to/your/frontend/build/folder/\*\*").

6. 애플리케이션 빌드
   빌드 스크립트를 실행하여 운영 체제에 맞는 배포 파일을 생성합니다.

   ```bash
   npm run build
   ```

   성공적으로 실행되면, 프로젝트 루트의 dist/ 디렉토리에서 생성된 .dmg (macOS) 또는 .exe (Windows) 파일을 찾을 수 있습니다. macOS의 경우, dist/mac-arm64/ 또는 dist/mac/와 같은 플랫폼별 하위 폴더가 있을 수 있습니다.

7. Electron 앱 실행
   ```bash
   npm start
   ```

## 📦 배포 방법

이 프로젝트는 GitHub Actions를 통해 실행 파일 빌드 및 배포가 자동화되어 있습니다. GitHub에서 새로운 태그를 발행하면 파이프라인이 자동으로 실행됩니다.

**태그 예시:** `v1.2.3`

- `1`: 큰 버전 (기존에 없던 새로운 도메인 추가)
- `2`: 중간 버전 (기존 도메인에 새로운 기능 추가)
- `3`: 패치 버전 (버그 수정, 코드 개선 등)

**배포 절차:**

1.  모든 기능 개발과 테스트가 완료된 코드를 `main` 브랜치에 병합(Merge)합니다.
2.  레포지토리에서 **Releases** 탭으로 이동하여 **Create a new release** 버튼을 클릭합니다.
3.  **Choose a tag** 항목을 클릭한 후 **Find or create a new tag** 부분에 버전(예: `v1.0.0`)과 같이 새로운 버전 태그를 입력하고 아래 **Create new tag**를 클릭하여 태그를 생성합니다.
4.  ⭐**중요)** **Target** 드롭다운 메뉴에서 반드시 `main` 브랜치를 선택합니다.
5.  제목에 버전을 입력하고 릴리즈 노트를 작성합니다.
6.  🚨**주의)** **Publish release** 버튼을 클릭합니다.
    릴리즈 발행은 되돌릴 수 없습니다. 잘못된 릴리즈는 서비스에 직접적인 영향을 줄 수 있으니, 반드시 팀의 승인을 받고 신중하게 진행해 주십시오.
7.  **Actions** 탭에 들어가 파이프라인을 확인 후 정상 배포되었다면 App 레포에 `develop` 브랜치에서 실행 파일을 확인합니다.
8.  만약 실패하였다면 인프라 담당자에게 문의해주세요.

---


## 📦 패키지 매니저로 설치하기

### 💻 Homebrew로 설치하기 (macOS)
#### macOS 사용자는 Homebrew를 사용하여 QGenie를 간편하게 설치하고 관리할 수 있습니다.

##### 1. 사전 준비: Homebrew 설치
```bash
# Homebrew가 설치되어 있지 않다면, 먼저 터미널을 열고 아래 명령어를 실행하여 Homebrew를 설치해주세요.
/bin/bash -c "$(curl -fsSL [https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh](https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh))"
```
##### 2. 설치 방법
```bash
#Homebrew가 QGenie의 설치 정보를 찾을 수 있도록, 저희의 공식 리포지토리(Tap)를 등록해야 합니다. 이 과정은 PC 당 최초 한 번만 실행하면 됩니다.
brew tap queryus/qgenie

# Tap을 추가했다면, 이제 brew install 명령어로 QGenie를 설치할 수 있습니다.
brew install --cask qgenie

# 설치가 완료되면 macOS의 응용 프로그램(Applications) 폴더에 QGenie.app이 추가됩니다.
```

##### 3. 관리 방법
```bash
# QGenie의 새로운 버전이 출시되면, 아래 명령어로 간단하게 최신 버전으로 업데이트할 수 있습니다.
brew upgrade --cask qgenie

# QGenie를 시스템에서 제거하려면 uninstall 명령어를 사용합니다.
# 앱만 간단히 삭제하기
brew uninstall --cask qgenie

# 관련 설정 파일까지 모두 깨끗하게 삭제하기
brew uninstall --cask --zap qgenie
```
