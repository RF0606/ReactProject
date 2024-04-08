import React from "react"
import ReactDOM from "react-dom/client"
// Style initialization at the top
import "reset-css"
// UI framework style
// global style
import "~/styles/global.scss"
// components style
import App from "./App.tsx"
import {BrowserRouter} from "react-router-dom";

//状态管理
import {Provider} from "react-redux"
import store from "@/store/store"

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
)
