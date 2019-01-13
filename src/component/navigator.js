import React, { Component } from 'react'
import { Layout, Menu} from 'antd'
import {Link, withRouter} from 'react-router-dom'

const {Header} = Layout

class Navigator extends Component {

    render() {
        return (
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%'}}>
                <h2 style={{float: 'left', width: '120px', height: '31px', color: '#fff'}}>Taokexia </h2>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[this.props.location.pathname]}
                    style={{ lineHeight: '64px' }}>
                    <Menu.Item key="/"><Link to="/">Home</Link></Menu.Item>
                    <Menu.Item key="/video"><Link to="/video">Video</Link></Menu.Item>
                    <Menu.Item key="/weather"><Link to="/weather">Weather</Link></Menu.Item>
                </Menu>
            </Header>
        )
    }
}

export default withRouter(Navigator);