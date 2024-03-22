import { useEffect } from "react";
import styles from "./login.module.scss"
import initLoginBg from "./init.ts"

const View = () => {

    useEffect(()=>{
        initLoginBg();
        window.onresize = function(){initLoginBg()};
    },[]);

    return(
        <div className={styles.loginPage}>
            {/*存放背景*/}
            <canvas id="canvas" style={{display:"block"}}></canvas>
            <p>这是login页面</p>
            {/* login box */}
            <div className={styles.loginBox}>
                {/* title part */}
                <div className={styles.title}>
                    <h1>MealBets&nbsp;·&nbsp;Menu System</h1>
                    <p>Enjoy everyday</p>
                </div>
            </div>
        </div>
    )
}
export default View