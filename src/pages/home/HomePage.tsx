import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './HomePage.less';

const HomePage: React.FC<RouteComponentProps> = (routeProps: RouteComponentProps) => {
  console.log(routeProps);
  return <div>这是首页</div>;
};

export default HomePage;
