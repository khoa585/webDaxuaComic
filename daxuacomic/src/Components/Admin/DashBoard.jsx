import React, { useState } from 'react';
import './style.scss';
import { Link, useHistory } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import { AuthContext } from '../../context/AuthContext'
import { toast } from 'react-toastify';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    SendOutlined,
} from '@ant-design/icons';
import { Dropdown, Avatar } from 'antd';
import GetCarts from './GetCarts'
const { Content, Header, Sider } = Layout;

const { SubMenu } = Menu;

function DashBoard(props) {
    const [collapsed, setCollapsed] = useState(false);
    const { logout } = React.useContext(AuthContext);
    const [breakpoint, setBreakpoint] = useState(90);
    const toogle = () => {
        setCollapsed(!collapsed);
    }
    let history = useHistory();
    const menu = (
        <Menu>
            <Menu.Item onClick={() => {
                logout()
                toast.success("Đăng Xuất thàn công")
                window.location.reload()
            }}>
                <UserOutlined /> log out
            </Menu.Item>
        </Menu>
    );

    // React.useEffect(() => {
    //     (() => {
    //         if (!isLoggedIn && userData.admin != 1) {
    //              history.push('/dang-nhap-admin')
    //         }else{
    //             history.push('/admin')
    //         }
    //     })()
    // }, [isLoggedIn])
    return (
        <Layout >
            <Sider trigger={null} collapsible collapsed={collapsed} breakpoint="lg" collapsedWidth={breakpoint} width={250}
                onBreakpoint={broken => {
                    if (broken) {
                        setBreakpoint(0)
                    } else {
                        setBreakpoint(80)
                    }
                }}
                style={{ minHeight: "100%" }}
            >
                <div className="logo">
                    <Link to="/" as="/"><img style={{ width: 100, margin: 20 }} src="https://www.dummies.com/wp-content/themes/dummies/img/branding/dummies.svg.gzip" alt="cover" className="img-fluid" /></Link>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} >
                    <SubMenu icon={<UserOutlined />} title={"Danh sách"} key={"1"}>
                        <Menu.Item icon={<SendOutlined />}>
                            Danh sách Truyện
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toogle
                    })}
                    <Dropdown overlay={menu} className="triggers">
                        <Avatar icon={<UserOutlined />} />
                    </Dropdown>
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 1000
                    }}
                >

                    <GetCarts></GetCarts>
                </Content>
            </Layout>
        </Layout>
    )
}
export default DashBoard;