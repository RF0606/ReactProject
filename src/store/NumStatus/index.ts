const store={
    state:{
        num:20
    },
    actions:{
        add1(newState:{num:number},action:{type:string}){
            newState.num++;
        },
        add2(newState:{num:number},action:{type:string,val:number}){
            newState.num+=action.val;
        },
        add3(newState:{num:number},action:{type:string}){
            newState.num+=10;
        },
    },
    // 名字统一管理
    // add1:"add1",
    // add2:"add2",
    // add3:"add3"

    actionNames:{}
}
// 我们现在想做到actionNames自动生成。不用我每一次添加一个方法，都要在actionNames手动添加键值对，这样很麻烦。
let actionNames = {} // 定义一个全局的actionNames

for(let key in store.actions){
    actionNames[key] = key
}
//更改store里的actionNames
store.actionNames=actionNames;

export default store