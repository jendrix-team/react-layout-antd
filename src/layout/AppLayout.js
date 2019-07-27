
import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from 'antd';
import CustomSideBar from './CustomSideBar';
import CustomHeader from './CustomHeader';
import './index.css';

const { Content } = Layout;

class AppLayout extends React.Component {

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout>
                <CustomSideBar collapsed={this.state.collapsed} />
                <Layout>
                    <CustomHeader collapsed={this.state.collapsed} onClickToggle={this.toggle} />
                    <Content>
                        {this.props.children ? this.props.children : null}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

AppLayout.propTypes = {
    children: PropTypes.node,
};

export default AppLayout;
