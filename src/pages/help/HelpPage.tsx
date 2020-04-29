import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import './HelpPage.less';

const HelpPage: React.FC<RouteComponentProps> = (routeProps: RouteComponentProps) => {
  console.log(routeProps);
  return <div>这是帮助页面</div>;
};

export default HelpPage;
