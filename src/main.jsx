import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ResetStyle from "./styles/ResetStyle.js"
import GeneralStyle from './styles/GeneralStyle.js'

ReactDOM.createRoot(document.getElementById('root')).render(<><ResetStyle /><GeneralStyle /><App /></>)
