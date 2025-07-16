import { HashRouter, Route, Routes } from 'react-router-dom'
import Versions from '@/components/Versions'
import { MainPage } from '@/components/main-page'
import { SubPage } from '@/components/sub-page'

function App(): React.JSX.Element {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/new-connection" element={<SubPage />}></Route>
        </Routes>
      </HashRouter>
      <Versions></Versions>
    </>
  )
}

export default App
