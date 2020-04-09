/**
 * @Description:
 * @author hongliang7
 * @date 2020-04-08 17:55
 */
import React, { Component } from 'react'
import './header.scss'

class Header extends Component {
    render() {
        console.log(this.props['param1']);
        return (
            <div className="M-header">
                Header
            </div>
        )
    }
}

export default Header;
