import { BrowserRouter, Routes, Route } from "react-router-dom"
import { homeURL } from './variablesValues.js'

import StartPage from "./pages/startPage/Page.jsx"
import HomePage from "./pages/homePage/Page.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path={homeURL} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
