import React, { Component } from 'react'
import { Layout, Menu} from 'antd'
import {Link} from 'react-router-dom'

const {Header} = Layout

export default class Navigator extends Component {

    render() {
        return (
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%'}}>
                <h2 style={{float: 'left', width: '120px', height: '31px', color: '#fff'}}>Taokexia </h2>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}>
                    <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/video">Video</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/weather">Weather</Link></Menu.Item>
                </Menu>
            </Header>
        )
    }
}