import React from "react";
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { useState } from "react";

const { Header, Sider, Content } = Layout;

export default function Profile(props) {
    const [state, setState] = useState({
        collapsed: false,
    })


    const onCollapse = collapsed => {
        setState({ collapsed });
    };
  return (
    <Layout style={{ minHeight: '100vh' }}>
    <Sider collapsible collapsed={state.collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout">
      <Content
        className="site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
        Content
      </Content>
    </Layout>
  </Layout>
   );
}