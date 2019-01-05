import React from 'react'
import SearchBar from './searchBar';
import {Col, Row} from 'antd';
import VideoDetail from './videoDetail';
import VideoList from './videoList';

export default class Video extends React.Component {
    render() {
        return(
            <div>
                <h1>Video</h1>
                <SearchBar />
                <Row>
                    <Col span={14}>
                        <VideoDetail />
                    </Col>
                    <Col span={10}>
                        <VideoList />
                    </Col>
                </Row>
            </div>
        )
    }
}