import {createSlice} from "@reduxjs/toolkit"


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