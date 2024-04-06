import handleNumber from "@/store/NumStatus";

const defaultState = {
    ...handleNumber.state
}

let reducer = (state = defaultState, action: { type: string, val: number }) => {
    console.log("执行了reducer")
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case "add1":
            handleNumber.actions.add1(newState,action)
            break;
        case "add2":
            handleNumber.actions.add2(newState,action)
            break;
        default:
            break
    }
    return newState
}
export default reducer