import handleArr from "./index"

//拿到index里的值，解构的写法: ...arrHandler.state

let reducer = (state = {...handleArr.state}, action:{type:string})=>{
    console.log("执行了reducer")
    let newState = JSON.parse(JSON.stringify(state))

    /*switch (action.type){
        case handleArr.arrPush:
            handleArr.actions[handleArr.arrPush](newState,action)
            break;
        default:
            break;
    }*/
    for(let key in handleArr.actionNames){
        if(action.type===handleArr.actionNames[key]){
            handleArr.actions[handleArr.actionNames[key]](newState,action);
            break;
        }
    }
    return newState
}
export default reducer