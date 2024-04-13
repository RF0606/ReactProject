import React, {ChangeEvent, useEffect, useState} from "react";
import {Input, Space, Button, message, Checkbox, Form} from 'antd';
import { useNavigate } from "react-router-dom"
import './login.less'
import {CaptchaAPI,LoginAPI} from "@/request/api"

const View = () => {
    //跳转页面
    let navigateTo = useNavigate();

    // 获取用户输入的信息
    const [usernameVal, setUsernameVal] = useState(""); // 定义用户输入用户名这个变量
    const [passwordVal, setPasswordVal] = useState(""); // 定义用户输入密码这个变量
    const [captchaVal, setCaptchaVal] = useState(""); // 定义用户输入验证码这个变量
    // 定义一个变量保存验证码图片信息
    const [captchaImg, setCaptchaImg] = useState("");


    // 修改usernameVal这个变量为用户输入的那个值。 以后拿到usernameVal这个变量就相当于拿到用户输入的信息。
    const usernameChange = (e: ChangeEvent<HTMLInputElement>) => {setUsernameVal(e.target.value);}
    const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {setPasswordVal(e.target.value);}
    const captchaChange = (e: ChangeEvent<HTMLInputElement>) => {setCaptchaVal(e.target.value);}


    // 点击登录按钮的事件函数
    const goToLogin = async () => {
        console.log("用户输入的用户名，密码，验证码分别是:",usernameVal,passwordVal,captchaVal);
        // 验证是否有空值
        if(!usernameVal.trim() || !passwordVal.trim()|| !captchaVal.trim()){
            message.warning("请完整输入信息!")
            return
        }

        // 发起登录请求
        let loginAPIRes = await LoginAPI({
            username:usernameVal,
            password:passwordVal,
            code:captchaVal,
            uuid:localStorage.getItem("uuid") as string
        })

        console.log(loginAPIRes);
        // 手动改这里手动加token可以测试路由功能
        if(loginAPIRes.code===200){
            // 1、提示登录成功
            message.success("登录成功!")
            // 2、保存token
            localStorage.setItem("lege-react-management-token",loginAPIRes.token)
            // 3、跳转到/page1
            navigateTo("/page1")
            // 4、删除本地保存中的uuid
            localStorage.removeItem("uuid")
        }
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