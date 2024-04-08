import {createSlice} from "@reduxjs/toolkit"


//createSlice的写法，也是最新的redux应该的写法
//目前最新的redux快速开始里的写法是要createSlice，然后放到store.ts里，再把这个store放到main.tsx里
export const counter = createSlice({
    name: 'counter',
    initialState: {
        value: 10
    },
    reducers: {
        add1: state => {
            state.value++
        },
        add2: state => {
            state.value += 2
        }
    }
})

export const {add1, add2} = counter.actions
export default counter.reducer