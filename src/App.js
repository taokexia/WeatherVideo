import React, { Component } from 'react';
import './App.css';
import { Layout } from 'antd';
import Navigator from './component/navigator';
import Home from './component/home';
import Video from './component/video_container/video';
import Weather from './component/weather_container/weather';
import { Route, Switch } from 'react-router-dom';


const { Footer, Content } = Layout;
class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Navigator />
        <Content style={{ padding: '0 50px', marginTop: 80 }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 480 }}>
            <Switch>
                <Route path='/' render={() => <Home />} exact />
                <Route path='/video' render={() => <Video />} />
                <Route path='/weather' render={() => <Weather />} />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ©2018 Designed by Taokexia
        </Footer>
      </Layout>
    );
  }
}

export default App;
