import {legacy_createStore, combineReducers,compose,applyMiddleware} from "redux"
import { configureStore } from '@reduxjs/toolkit'
import reducer from "./NumStatus/reducer"
import handleArr from "./ArrStatus/reducer"
import handleNum from "./NumStatus/reducer"
import counterReducer from "../feature/count/count"
import currentReducer from "./NumStatus/reducer"


//创建数据仓库

// 组合各个模块的reducer
const reducers = combineReducers({
    handleArr,
    handleNum
})

// 判断有没有__REDUX_DEVTOOLS_EXTENSION_COMPOSE__这个模块
const store = legacy_createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store

/*
export default configureStore({
    reducer: {
        user: currentReducer,
        counter: counterReducer
    }
})*/
