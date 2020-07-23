import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './HomePage.less';

@inject('store')
@observer
class HomePage extends Component<IProps> {
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
    console.log(this.props.store.homeStore.homeNum);
    console.log(this.props.store.helpStore.test);
    return this.data.map((v, index) => <div key={index}>{v.name}</div>);
  }
}

export default HomePage;
