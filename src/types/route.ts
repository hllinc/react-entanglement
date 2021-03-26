import { RouteComponentProps } from 'react-router-dom';

/**
 * 路由对象对外接口
 */
export interface RouteInterface {
  path: string;
  component: any;
  routes?: RouteInterface[];
  exact?: boolean;
  // strict?: boolean;
  title?: string;
  name?: string;
  auth?: boolean;
  icon?: any;
}

export interface RoutesInterface {
  routes?: RouteInterface[];
}

export type routeProps = RouteComponentProps<any> & RoutesInterface;
