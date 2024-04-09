const store={
    state:{
        arr:[10,20,30]
    },
    actions:{
        arrPush(newState:{arr:number[]},action:{type:string,val:number}){
            newState.arr.push(action.val)
        },
    },

    actionNames:{}
}

let actionNames = {}

for(let key in store.actions){
    actionNames[key] = key
}

store.actionNames=actionNames;

export default store