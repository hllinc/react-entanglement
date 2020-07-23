import { Layout, Menu, Breadcrumb } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import * as React from 'react';
import './FramePage.less';
import { RenderRoutes } from '@/router/RenderRoutes';
import { routeProps } from '@/types/route';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
});

class FramePage extends React.Component<routeProps> {
  state = {
    current: 'sub1'
  };

  constructor(props: routeProps) {
    super(props);
  }

  // 动态生成菜单
  generateMenus = routes => {
    return routes.map(route => {
      if (route.routes && route.routes.length > 0) {
        return (
          <SubMenu key={route.name} title={route.name} icon={route.icon ? <IconFont type={route.icon} /> : ''}>
            {route.routes ? this.generateMenus(route.routes) : null}
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item key={route.name} icon={route.icon ? <IconFont type={route.icon} /> : ''}>
            <Link to={route.path}>{route.name}</Link>
          </Menu.Item>
        );
      }
    });
  };

  handleClick = e => {
    this.setState({
      current: e.key
    });
  };

  render() {
    const { routes } = this.props;
    return (
      <Layout style={{ height: '100vh' }}>
        <Header className="header">
          <div className="logo">REACT ENTANGLEMENT</div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              // onClick={this.handleClick}
              selectedKeys={[location.pathname]}
              defaultOpenKeys={[this.state.current]}
              style={{ height: '100%', borderRight: 0 }}>
              {this.generateMenus(routes)}
              {/*<SubMenu key="sub1" title="subnav 1">*/}
              {/*  <Menu.Item key="/frame/home" icon={<LaptopOutlined />}>*/}
              {/*    <Link to="/frame/home">主页</Link>*/}
              {/*  </Menu.Item>*/}
              {/*  <Menu.Item key="/frame/help" icon={<UserOutlined />}>*/}
              {/*    <Link to="/frame/help">帮助</Link>*/}
              {/*  </Menu.Item>*/}
              {/*  <Menu.Item key="3">option3</Menu.Item>*/}
              {/*  <Menu.Item key="4">option4</Menu.Item>*/}
              {/*</SubMenu>*/}
              {/*<SubMenu key="sub2" title="subnav 2">*/}
              {/*  <Menu.Item key="5">option5</Menu.Item>*/}
              {/*  <Menu.Item key="6">option6</Menu.Item>*/}
              {/*  <Menu.Item key="7">option7</Menu.Item>*/}
              {/*  <Menu.Item key="8">option8</Menu.Item>*/}
              {/*</SubMenu>*/}
              {/*<SubMenu key="sub3" title="subnav 3">*/}
              {/*  <Menu.Item key="9">option9</Menu.Item>*/}
              {/*  <Menu.Item key="10">option10</Menu.Item>*/}
              {/*  <Menu.Item key="11">option11</Menu.Item>*/}
              {/*  <Menu.Item key="12">option12</Menu.Item>*/}
              {/*</SubMenu>*/}
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 8,
                margin: 0,
                minHeight: 280,
                overflow: 'auto'
              }}>
              {RenderRoutes(this.props.routes, false)}
            </Content>
            <Footer style={{ textAlign: 'center' }}>Entanglement ©2020 Created by Hllinc</Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default FramePage;
