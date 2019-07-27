
import React from 'react';
import PropTypes from 'prop-types';

import { Icon, Layout } from 'antd';
import CustomSideBar from './CustomSideBar';
import './index.css';

const { Header, Content } = Layout;

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
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>

                    <Content>
                        {this.props.children ? this.props.children : <br/>}
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
