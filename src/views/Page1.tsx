import {useSelector, useDispatch} from "react-redux"



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

    const changeArr = () => {
        dispatch({type:"arrPush",val:10})
        console.log(num)
    }

    return (
        <div className={"About"}>
            <p>这是page1页面</p>
            <p>{num}</p>
            <button onClick={changeNum}>press</button>

            <p>{arr}</p>
            <button onClick={changeArr}>press</button>
        </div>
    )
}
export default View