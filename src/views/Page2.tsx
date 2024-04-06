import React, { useState } from 'react'
import {useSelector, useDispatch} from "react-redux"
import {add1, add2} from "@/feature/count/count"
import store from "@/store";

type RootState = ReturnType<typeof store.getState>

const View = () => {
/*    const count = useSelector((state:RootState) => state.counter.value)
    const dispatch = useDispatch()
*/

    return(
        <div className={"About"}>
            <p>这是page2页面</p>
            {/*<p>{count}</p>*/}
            {/*<button
                aria-label="Increment value"
                onClick={() => dispatch(add1())}
            >
                press
            </button>*/}
        </div>
    )
}
export default View