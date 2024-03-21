import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {useState} from "react";
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Option 1', '/Page1',<PieChartOutlined />),
    getItem('Option 2', '/Page2',<DesktopOutlined />),
    getItem('User', 'sub1',<UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '/About', <FileOutlined />),
];

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