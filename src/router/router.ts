/**
 * @Description:
 * @author hongliang7
 * @date 2020-04-29 13:04
 */
import loadable from '@loadable/component'; // 按需加载

export const basename = ''; // 如果访问路径有二级目录，则需要配置这个值，如首页地址为'http://tianzhen.tech/blog/home'，则这里配置为'/blog'

export const routes = [
  {
    path: '/',
    exact: true,
    component: loadable(() => import('@/pages/demo/HelloWorldDemo/HelloWorldDemoPage')), // 组件需要你自己准备
    name: 'home', // 自定义属性
    title: 'react-home' // 自定义属性
    // 这里可以扩展一些自定义的属性
  },
  {
    path: '/home',
    exact: true,
    component: loadable(() => import('@/pages/demo/HelloWorldDemo/HelloWorldDemoPage')),
    name: 'home',
    title: 'HelloWorld'
  },
  {
    path: '/help',
    exact: true,
    component: loadable(() => import('@/pages/help/HelpPage')),
    name: 'help',
    title: 'Help'
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
