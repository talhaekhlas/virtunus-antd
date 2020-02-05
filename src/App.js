import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import './App.css'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout>
        <Sider 
        trigger={null} 
        collapsible 
        collapsed={this.state.collapsed}
        theme="light"
        style={{background:'#0A2D48'}}
        >
          <div className="logo" />
          <Menu 
          theme="dark" 
          mode="inline" 
          defaultSelectedKeys={['1']}
          style={{background:'#0A2D48'}}
          >

          <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span style={{color:'white',padding:'0px'}}>User</span>
                </span>
              }
            >
              <Menu.Item key="3"  style={{color:'white'}}>Tom</Menu.Item>
              <Menu.Item key="4" style={{color:'white'}}>Bill</Menu.Item>
              <Menu.Item key="5" style={{color:'white'}}>Alex</Menu.Item>
            </SubMenu>

            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: 'black', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
              style={{color:'white'}}
            />
          </Header>
          <Content
            style={{
              margin: '16px',
              padding: '1px',
              background: 'white',
              minHeight: '100vh',
            }}
          >
            Content
          </Content>
          <Footer style={{ textAlign: 'center',background:'black',color:'white' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default App;