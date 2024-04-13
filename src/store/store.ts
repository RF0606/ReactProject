import {legacy_createStore, combineReducers,compose,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
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
/*
const store = legacy_createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store
*/


//整体改成redux slice形式


// 判断有没有__REDUX_DEVTOOLS_EXTENSION_COMPOSE__这个模块
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose //rt

// 把仓库数据，浏览器redux-dev-tools，还有reduxThunk插件关联在store中
const store = legacy_createStore(reducers,composeEnhancers(applyMiddleware(reduxThunk)));
export default store
/*
export default configureStore({
    reducer: {
        user: currentReducer,
        counter: counterReducer
    }
})*/
