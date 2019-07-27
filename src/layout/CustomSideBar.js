import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;

class CustomSideBar extends Component {

    render() {
        const { collapsed } = this.props;
        return (
            <Sider trigger={null} collapsible collapsed={collapsed} style={{ height: '100vh' }}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Icon type="user" />
                        <span>menu 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="video-camera" />
                        <span>menu 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="upload" />
                        <span>nav 3</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    };
}

CustomSideBar.propTypes = {
    collapsed: PropTypes.bool.isRequired,
};

export default CustomSideBar;

