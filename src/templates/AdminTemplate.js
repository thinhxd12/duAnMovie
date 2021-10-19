// import React, { Fragment, useState } from "react"
// import { Avatar, Layout, Menu } from 'antd';
// import {
//     MenuUnfoldOutlined,
//     MenuFoldOutlined,
//     UserOutlined,
//     PlayCircleOutlined
// } from '@ant-design/icons';
// import { NavLink, Route } from "react-router-dom";
// import { useSelector } from "react-redux";
// import _ from 'lodash';
// import { history } from "../App";
// import { ACCESS_TOKEN, USER_LOGIN } from "../util/setting";
// import { useEffect } from "react";

// const {  Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;

// export const AdminTemplate = (props) => {
//     const [state, setState] = useState({
//         collapsed: false
//     })

//     const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);
//     // console.log('userLogin', userLogin)

//     const renderUser = () => {
//         return (!_.isEmpty(userLogin)) ?
//             <div className="flex pr-12">
//                 <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }} size="large">{userLogin.taiKhoan.substr(0, 1)}</Avatar>
//                 <div>
//                     <button className="text-base ml-1 block" onClick={() => {
//                         history.push('/profile')
//                     }}>
//                         {userLogin.taiKhoan}
//                     </button>
//                     <button onClick={() => {
//                         localStorage.removeItem(USER_LOGIN);
//                         localStorage.removeItem(ACCESS_TOKEN);
//                         history.push('/home');
//                         window.location.reload();
//                     }} className="text-sm ml-1 text-blue-500 block">Đăng xuất</button>
//                 </div>
//             </div>
//             : ''

//     }

//     const toggle = () => {
//         setState({
//             collapsed: !state.collapsed,
//         });
//     };
//     useEffect(() => {
//         return () => {
//           window.scrollTo(0,0)
//         }
//       })

//     return <Route exact path={props.path} render={(propsRoute) => {
//         return <Fragment>
//             <Layout style={{ minHeight: '100vh' }}>
//                 <Sider trigger={null} collapsible collapsed={state.collapsed}>
//                     <NavLink to="/">
//                         <img
//                             src="https://i.imgur.com/lC22izJ.png"
//                             alt="logo"
//                             style={{ maxWidth: "50px", margin: "10px auto" }}
//                         />
//                     </NavLink>
//                     <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
//                         <SubMenu key="sub1" icon={<UserOutlined />} title="Users">
//                             <Menu.Item key="1">
//                                 <NavLink to="/admin/users">
//                                     Users
//                                 </NavLink>
//                             </Menu.Item>
//                             <Menu.Item key="2">
//                                 <NavLink to="/admin/adduser">
//                                     Add User
//                                 </NavLink>
//                             </Menu.Item>
//                         </SubMenu>
//                         <SubMenu key="sub2" icon={<PlayCircleOutlined />} title="Films">
//                             <Menu.Item key="3">
//                                 <NavLink to="/admin/films">
//                                     Films
//                                 </NavLink>
//                             </Menu.Item>
//                             <Menu.Item key="4">
//                                 <NavLink to="/admin/addfilm">
//                                     Add Film
//                                 </NavLink>
//                             </Menu.Item>
//                         </SubMenu>

//                     </Menu>
//                 </Sider>
//                 <Layout className="site-layout">
//                     <div className="site-layout-background flex justify-between items-center p-3" style={{ paddingLeft: '20px', fontSize: '20px' }}>
//                         {React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
//                             className: 'trigger',
//                             onClick: toggle,
//                         })}
//                         {renderUser()}
//                     </div>
//                     <Content style={{ margin: '16px' }}>

//                         <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

//                             <props.component {...propsRoute} />

//                         </div>

//                     </Content>
//                     <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
//                 </Layout>
//             </Layout>

//         </Fragment>

//     }} />

// }