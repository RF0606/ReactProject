import {useState} from "react";
import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { items } from '@/components/MainMenu/MenuItems'

const menuSideBarComp: React.FC = () => {
    // 获取当前路由的位置信息
    const location = useLocation();

    const useNavigateTo = useNavigate()
    const menuClick = (e:{key:string}) => {
        //console.log("点击了",e.key)
        useNavigateTo(e.key)
    }

    const [openKeys, setOpenKeys] = useState<string[]>([]);
    const handleOpenChange = (keys: string[]) => {
        //这块需要传递一个数组下来，上边初始化的时候也要初始化成一个空数组，保持一致性
        setOpenKeys([keys[keys.length-1]])
    }

    return(
        <Menu
            theme="dark"
            defaultSelectedKeys={location.pathname}
            mode="inline"
            items={items}
            onClick = {menuClick}
            /*每点击一下就会把被点击展开项的key传过去到数组里*/
            onOpenChange = {handleOpenChange}
            openKeys = {openKeys}
        />
    )
}

export default menuSideBarComp;