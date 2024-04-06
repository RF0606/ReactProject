import {legacy_createStore, combineReducers,compose,applyMiddleware} from "redux"
import { configureStore } from '@reduxjs/toolkit'
import reducer from "./reducer"
import counterReducer from "../feature/count/count"
import currentReducer from "./reducer"

//创建数据仓库
// 判断有没有__REDUX_DEVTOOLS_EXTENSION_COMPOSE__这个模块
const store = legacy_createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store

/*
export default configureStore({
    reducer: {
        user: currentReducer,
        counter: counterReducer
    }
})*/
