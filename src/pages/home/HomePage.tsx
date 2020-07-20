import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './HomePage.less';
import { IHomeStore } from '@/store/homeStore';
import { IHelpStore } from '@/store/helpStore';

interface IHomeProps {
  homeStore?: IHomeStore;
  helpStore?: IHelpStore;
}

@inject('homeStore', 'helpStore')
@observer
class HomePage extends Component<IHomeProps> {
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
    console.log(this.props.homeStore.homeNum);
    console.log(this.props.helpStore.oneNum);
    return this.data.map((v, index) => <div key={index}>{v.name}</div>);
  }
}

export default HomePage;
