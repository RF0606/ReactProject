import { useEffect } from 'react'
import { useRoutes, Link, useLocation, useNavigate } from"react-router-dom"
import router from "@/router";
import { message } from "antd"

// 去往登录页的组件
function ToLogin(){
  const navigateTo = useNavigate()
  // 加载完这个组件之后实现跳转
  useEffect(()=>{
    // 加载完组件之后执行这里的代码
    navigateTo("/login");
    // 在严格模式下会弹2次消息
    message.warning("您还没有登录，请登录后再访问！");
  },[])
  return <div></div>
}

// 去往page1
function ToPage1(){
  const navigateTo = useNavigate()
  // 加载完这个组件之后实现跳转
  useEffect(()=>{
    // 加载完组件之后执行这里的代码
    navigateTo("/page1");
    // 在严格模式下会弹2次消息，改main.tsx里的就可以了
    message.warning("您已经登录过了！");
  },[])
  return <div></div>
}

// 手写封装路由守卫
function BeforeRouterEnter(){
  const outlet = useRoutes(router);
  /*
    后台管理系统两种经典的跳转情况：
    1、如果访问的是登录页面， 并且有token， 跳转到首页
    2、如果访问的不是登录页面，并且没有token， 跳转到登录页
    3、其余的都可以正常放行
  */
  const location = useLocation()
  let token = localStorage.getItem("lege-react-management-token");
  //记得后边改的话用axios判断token是否过期了，或者异地登陆
  //1、如果访问的是登录页面， 并且有token， 跳转到首页
  if(location.pathname==="/login" && token){
    // 这里不能直接用 useNavigate 来实现跳转 ，因为需要BeforeRouterEnter是一个正常的JSX组件
    return <ToPage1 />
  }
  //2、如果访问的不是登录页面，并且没有token， 跳转到登录页
  if(location.pathname!=="/login" && !token){
    return <ToLogin />
  }
  return outlet
}

function App() {
  return (
    <div className={"App"}>
      { /* {outlet} */ }
      <BeforeRouterEnter/>
    </div>
  )
}

export default App
