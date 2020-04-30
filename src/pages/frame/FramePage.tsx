import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import './FramePage.less';

const FramePage: React.FC<RouteComponentProps> = (routeProps: RouteComponentProps) => {
  console.log(routeProps);
  return <div>这是主框架页面</div>;
};

export default FramePage;
