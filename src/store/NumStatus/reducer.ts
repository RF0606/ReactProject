import handleNumber from "./index";

//拿到index里的值，解构的写法: ...handleNumber.state

let reducer = (state = {...handleNumber.state}, action: { type: string, val: number }) => {
    console.log("执行了reducer")
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case handleNumber.add1:
            handleNumber.actions[handleNumber.add1](newState,action)
            break;
        case handleNumber.add2:
            handleNumber.actions[handleNumber.add2](newState,action)
            break;
        default:
            break
    }
    return newState
}
export default reducer