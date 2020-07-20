import React from 'react';
import { ConfigProvider } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import './style.less';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from '@/components/Base/ScrollToTop';
import { RenderRoutes } from '@/router/RenderRoutes';
import { routes } from '@/router/router';
import { Provider } from 'mobx-react';
import stores from '@/store';

moment.locale('zh-cn');
const authed = false;
const authPath = './login';

class App extends React.Component {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <Provider {...stores}>
          <Router>
            <ScrollToTop />
            {RenderRoutes(routes, authed, authPath)}
          </Router>
        </Provider>
      </ConfigProvider>
    );
  }
}

export default App;
