import { Breadcrumb, Layout } from 'antd';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
// 把@/components/MainMenu/MenuSideBar里面的menuSideBarComp组件导入并在这里更名为MenuSideBar
import MenuSideBar from '@/components/MainMenu/MenuSideBar'

const { Header, Content, Footer, Sider } = Layout;

const View: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/*左边侧边栏*/}
            <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                <div className="logo" />
                <MenuSideBar/>
            </Sider>
            {/*右侧内容*/}
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ paddingLeft: '16px' }} >
                    {/*breadcrumb.item 已经被弃用了，请使用items， 具体问gpt*/}
                    <Breadcrumb style={{ margin: '', lineHeight:'64px'}}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                <Content style={{ margin: '16px 16px 0' }} className="site-layout-background">
                    <Outlet></Outlet>
                </Content>
                <Footer style={{ textAlign: 'center', padding: 0, lineHeight:'48px' }}>Designed for MealBets Menu Service</Footer>
            </Layout>
        </Layout>
    );
};

export default View;