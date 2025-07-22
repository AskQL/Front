import { HashRouter, Route, Routes } from 'react-router-dom'
import { MainPage } from '@/components/workspace/main-page'
import { ConnectionWizard } from '@/components/connection-wizard/wizard-modal'
import SettingModal from './components/setting/setting-modal'

function App(): React.JSX.Element {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/connection-wizard" element={<ConnectionWizard />}></Route>
        <Route path="/setting" element={<SettingModal />} />
      </Routes>
    </HashRouter>
  )
}

export default App
