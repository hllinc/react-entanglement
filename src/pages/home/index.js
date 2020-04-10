import React, { Component } from 'react';
import Header from '../../components/header';
import './home.scss';

/**
 * @Description: 主页面
 * @author hongliang7
 * @date 2020-04-08 17:56
 */

class Home extends Component {
  render() {
    return (
      <div className="P-home">
        <Header param1={'adc'} param2={'c'} func1={() => {
          console.log('func1');
        }}/>
        <h1>Home page</h1>
      </div>
    );
  }
}

export default Home;
