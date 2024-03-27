import React, {ChangeEvent, useEffect, useState} from "react";
import {Input, Space, Button, message, Checkbox, Form} from 'antd';
import './login.less'

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

    const goToLogin = () => {
        console.log(usernameVal)
        console.log(passwordVal)
        console.log(captchaVal)
    }

    return (
        <Space direction="vertical" size="middle" style={{display: 'flex'}}>
            <Input placeholder="Username" onChange={usernameChange}/>
            <Input.Password placeholder="Password" onChange={passwordChange}/>
            <div className="captchaBox"></div>
            <Button className="loginBtn" type="primary" block onClick={goToLogin}>Login</Button>
        </Space>
    )
}
export default View