import {useState} from "react";
import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { items } from '@/components/MainMenu/MenuItems'

const menuSideBarComp: React.FC = () => {
    // 获取当前路由的位置信息
    const currentRoute = useLocation();

    const useNavigateTo = useNavigate()
    const menuClick = (e:{key:string}) => {
        //console.log("点击了",e.key)
        useNavigateTo(e.key)
    }

    //拿currentRoute.pathname跟数组每项的children对比，如果找到，就要他上一级的key给openKeys
    function findKey(obj:{key:string}) {
        return obj.key === currentRoute.pathname
    }

    //find 方法会遍历 children 数组，并对每个元素调用 findKey() 函数
/*    for(let i = 0; i < items.length; i++){
        if(items[i]['children'] && items[i]['children'].length > 0 && items[i]['children'].find(findKey)){
            defaultOpenKey = items[i].key;
            break;
        }
    }*/
    const keysWithChildren = items.map(item => {
        if (item.children && item.children.length > 0 && item.children.find(findKey)) {
            return item.key;
        }
        return null; // 如果没有满足条件的子元素，则返回 null
    }).filter(key => key !== null); // 过滤掉 null 值

// 如果存在满足条件的子元素，将第一个满足条件的子元素的 key 属性赋值给 defaultOpenKey 变量
    const defaultOpenKey = keysWithChildren.length > 0 ? keysWithChildren[0] : "";

    //设置展开项初始
    const [openKeys, setOpenKeys] = useState<string[]>([defaultOpenKey]);
    const handleOpenChange = (keys: string[]) => {
        //这块需要传递一个数组下来，上边初始化的时候也要初始化成一个空数组，保持一致性
        setOpenKeys([keys[keys.length-1]])
    }

    return(
        <Menu
            theme="dark"
            defaultSelectedKeys={currentRoute.pathname}
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