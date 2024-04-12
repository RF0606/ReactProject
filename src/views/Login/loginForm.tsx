import React, {ChangeEvent, useEffect, useState} from "react";
import {Input, Space, Button, message, Checkbox, Form} from 'antd';
import './login.less'
import {CaptchaAPI,LoginAPI} from "@/request/api"

const View = () => {

    // 获取用户输入的信息
    const [usernameVal, setUsernameVal] = useState(""); // 定义用户输入用户名这个变量
    const [passwordVal, setPasswordVal] = useState(""); // 定义用户输入密码这个变量
    const [captchaVal, setCaptchaVal] = useState(""); // 定义用户输入验证码这个变量
    // 定义一个变量保存验证码图片信息
    const [captchaImg, setCaptchaImg] = useState("");

    const usernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        // 修改usernameVal这个变量为用户输入的那个值。 以后拿到usernameVal这个变量就相当于拿到用户输入的信息。
        setUsernameVal(e.target.value);
    }
    const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordVal(e.target.value);
    }
    const captchaChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCaptchaVal(e.target.value);
    }

    // 点击登录按钮的事件函数
    const goToLogin = () => {
        console.log(usernameVal)
        console.log(passwordVal)
        console.log(captchaVal)
    }

    // 点击验证码图片盒子的事件函数, 启用await就得用async
    // 这个api接口好像没法用，所以拿不到验证码
    const getCaptchaImg = async () => {
        let captchaAPIRes = await CaptchaAPI();
        console.log(captchaAPIRes);
        if(captchaAPIRes.code===200){
            // 1、把图片数据显示在img上面
            setCaptchaImg("data:image/gif;base64,"+captchaAPIRes.img)
            // 2、本地保存uuid，给登录的时候用
            localStorage.setItem("uuid",captchaAPIRes.uuid)
        }
    }

    return (
        <Space direction="vertical" size="middle" style={{display: 'flex'}}>
            <Input placeholder="Username" onChange={usernameChange}/>
            <Input.Password placeholder="Password" onChange={passwordChange}/>
            {/* 验证码盒子 */}
            <div className="captchaBox">
                <Input placeholder="验证码" onChange={captchaChange}/>
                <div className="captchaImg" onClick={getCaptchaImg}>
                    <img height="38" src={captchaImg} alt="" />
                </div>
            </div>
            <Button className="loginBtn" type="primary" block onClick={goToLogin}>Login</Button>
        </Space>
    )
}
export default View