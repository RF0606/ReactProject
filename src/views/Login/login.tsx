import React, {ChangeEvent, useEffect, useState} from "react";
import {Input, Space, Button, message, Checkbox, Form} from 'antd';
import styles from "./login.module.scss";
import initLoginBg from "./init.ts";
import './login.less'
import { useNavigate } from "react-router-dom"
import LoginForm from './loginForm'

const View = () => {

    useEffect(() => {
        initLoginBg();
        window.onresize = function () {
            initLoginBg()
        };
    }, []);

    return (
        <div className={styles.loginPage}>
            {/*存放背景*/}
            <canvas id="canvas" style={{display: "block"}}></canvas>
            <p>这是login页面</p>
            {/* login box */}
            <div className={styles.loginBox + " loginBox"}>
                {/* title part */}
                <div className={styles.title}>
                    <h1>MealBets&nbsp;·&nbsp;Menu System</h1>
                    <p></p>
                    {/* login */}
                    <LoginForm/>
                </div>
            </div>
        </div>
    )
}
export default View