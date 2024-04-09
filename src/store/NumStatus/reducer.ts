import handleNumber from "./index";

//拿到index里的值，解构的写法: ...handleNumber.state

let reducer = (state = {...handleNumber.state}, action: { type: string, val: number }) => {
    console.log("执行了reducer")
    let newState = JSON.parse(JSON.stringify(state))

    // 思路： switch的做法是拿着action.type和case后面的每一个进行对比，这种做法很像遍历。
    // 那我们就把case后面的这些值做成对象，actionNames
    /*switch (action.type) {
        case handleNumber.add1:
            handleNumber.actions[handleNumber.add1](newState,action)
            break;
        case handleNumber.add2:
            handleNumber.actions[handleNumber.add2](newState,action)
            break;
        default:
            break
    }*/
    // 【优化】上面这样写，我们没添加一个方法，都要在这里多写一句case
    // 拿着action.type和actionNames进行每一项的对比，如果是相等，就调用 模块名.actions[下标](newState,action)
    // 这样写就达到每一次写一个方法都不需要再手动来添加这几case
    // 但是最好改成map
    for(let key in handleNumber.actionNames){
        if(action.type===handleNumber.actionNames[key]){
            handleNumber.actions[handleNumber.actionNames[key]](newState,action);
            break;
        }
    }
    return newState
}
export default reducer