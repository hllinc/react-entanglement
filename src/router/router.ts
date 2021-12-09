/**
 * @Description:
 * @author hongliang7
 * @date 2020-04-29 13:04
 */
import loadable from '@loadable/component'; // 按需加载
import FramePage from '@/pages/frame/FramePage';
import HomePage from '@/pages/home/HomePage';
import HelloWorldDemoPage from '@/pages/demo/HelloWorldDemo/HelloWorldDemoPage';

export const routes = [
  {
    path: '/login',
    component: HelloWorldDemoPage
  },
  {
    path: '/frame',
    component: FramePage,
    name: 'frame',
    title: 'frame-page',
    routes: [
      {
        path: '/frame/home',
        exact: false,
        component: HomePage, // 组件需要你自己准备
        name: '一级菜单', // 自定义属性
        title: 'react-home', // 自定义属性
        auth: false,
        icon: 'icon-tuichu',
        routes: [
          {
            path: '/frame/home',
            exact: true,
            component: HomePage, // 组件需要你自己准备
            name: 'home', // 自定义属性
            title: 'react-home', // 自定义属性
            auth: false,
            icon: 'icon-welcome'
          }
        ]
      },
      {
        path: '/frame/help',
        exact: true,
        component: loadable(() => import('@/pages/help/HelpPage')), // 异步加载
        name: 'help',
        title: 'Help'
      }
    ]
  },
  // 404 Not Found
  {
    path: '*',
    exact: true,
    component: loadable(() => import('@/pages/status/404')),
    name: '404',
    title: '404'
  }
];
