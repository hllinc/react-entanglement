import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './common/style/frame.scss'
import {Provider} from "react-redux";
import store from './store';
// 使用mock服务
import './mock';

const Apps = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(Apps, document.getElementById('root'));
