
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Icon, Layout } from 'antd';

const { Header } = Layout;

class CustomHeader extends Component {
    render() {
        return (
            <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                    className="trigger"
                    type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.props.onClickToggle}
                />
            </Header>
        );
    }
}

CustomHeader.propTypes = {
    onClickToggle: PropTypes.func.isRequired,
    collapsed: PropTypes.bool.isRequired,
};

export default CustomHeader;