import {useSelector, useDispatch} from "react-redux"
import numStatus from "@/store/NumStatus"

const View = () => {
    //获取仓库数据
/*    const num = useSelector((state) => (
        state.handleNum.num
    ))*/

    const {num} = useSelector((state:RootState) => ({
        num:state.handleNum.num
    }))
    const {arr} = useSelector((state:RootState) => ({
        arr:state.handleArr.arr
    }))

    //回头看看新版本的怎么写该
    const dispatch = useDispatch();
    const changeNum = () => {
        dispatch({type:"add2",val:10})
        console.log(num)
    }

    //异步功能实现
    const changeNumAsyn = () => {
        //异步的写法：redux-thunk的用法，但是是没有抽离到actions之前的
        /*
        dispatch((dis:Function)=>{
            setTimeout(()=>{
                dis({type:"add1"})
                },1000)
        })
        */

        // 优化redux-thunk的异步写法
        // dispatch(调用状态管理中的asyncAdd1)
        dispatch(numStatus.asyncActions.asyncAdd1)
    }

    const changeArr = () => {
        dispatch({type:"arrPush",val:10})
        console.log(num)
    }

    return (
        <div className={"About"}>
            <p>这是page1页面</p>
            <p>{num}</p>
            <button onClick={changeNum}>Synchronize</button>
            <button onClick={changeNumAsyn}>Asynchronous</button>

            <p>{arr}</p>
            <button onClick={changeArr}>press</button>
        </div>
    )
}
export default View