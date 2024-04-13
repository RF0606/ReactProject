import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

//爆红但是不影响使用，不知道为啥
export const items: MenuItem[] = [
    {
        label: 'Option 1',
        key: '/Page1',
        icon: <PieChartOutlined />
    },
    {
        label: 'Option 2',
        key: '/Page2',
        icon: <DesktopOutlined />
    },
    {
        label: 'User',
        key: '/User',
        icon: <UserOutlined />,
        children: [
            {
                label: 'Tom',
                key: '/User/Tom',
            },
            {
                label: 'Bill',
                key: '/User/Bill',
            },
            {
                label: 'Alex',
                key: '/User/Alex',
            }
        ]
    },
    {
        label: 'Team',
        key: '/Team',
        icon: <TeamOutlined />,
        children: [
            {
                label: 'Team 1',
                key: '/Team/Team1',
            },
            {
                label: 'Team 2',
                key: '/Team/Team2',
            }
        ]
    },
    {
        label: 'Files',
        key: '/About',
        icon: <FileOutlined />
    },
]