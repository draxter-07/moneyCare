import { HashRouter, Routes, Route } from "react-router-dom"
import { homeURL } from './variablesValues.js'

import StartPage from "./pages/startPage/Page.jsx"
import HomePage from "./pages/homePage/Page.jsx"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path={homeURL} element={<HomePage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
