import React from 'react'
import ReactDOM from 'react-dom/client'
// Style initialization at the top
import "reset-css"
// UI framework style
// global style
import "~/styles/global.scss"
// components style
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
          <App/>
      </BrowserRouter>
  </React.StrictMode>,
)
