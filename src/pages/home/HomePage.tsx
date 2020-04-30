import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './HomePage.less';

class HomePage extends React.Component<RouteComponentProps> {
  private data: any = [];

  constructor(props) {
    super(props);
    for (let i = 0; i < 100; i++) {
      this.data.push({
        name: '滚动条区域测试' + i
      });
    }
  }

  render() {
    return this.data.map((v, index) => <div key={index}>{v.name}</div>);
  }
}

export default HomePage;
