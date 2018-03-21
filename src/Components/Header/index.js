import React, { Component } from 'react';

import './header.css';

class Header extends Component {
    render() {
        const { count } = this.props;
        return (
            <div className="header">
                <div className="main-heading"> {count} Awesome lists</div>
                <div> Great collection of awesome lists </div>
            </div>
        );
    }
}

export default Header;
