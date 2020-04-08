import React, {Component} from 'react';
import './login.scss';
import Header from "../../components/header";

/**
 * @Description: 登录页面
 * @author hongliang7
 * @date 2020-04-08 17:57
 */

class Login extends Component {

    render() {
        return (
            <div className="P-login">
                <Header/>
                <h1>Login page</h1>
                <button onClick={this.gotoHome.bind(this)}>跳转Home页</button>
            </div>
        );
    }

    gotoHome() {
        this.props.history.push('/home')
    }
}

export default Login;
