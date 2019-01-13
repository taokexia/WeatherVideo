import React from 'react'
import SearchBar from './searchBar';
import { Col, Row } from 'antd';
import VideoDetail from './videoDetail';
import VideoList from './videoList';
import { fetchOneVideo, fetchVideos } from '../../actions/videos';
import { connect } from 'react-redux';

class Video extends React.Component {
    componentDidMount() {
        this.props.getData();
    }
    render() {
        if (this.props.data === null) {
            return <h1>Load...</h1>
        } else {
            return (
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
}

const mapState = (state) => ({
    data: state.ActiveVideoReducer
})

const mapDispatch = (dispatch) => {
    return {
        getData() {
            dispatch(fetchOneVideo(''));
            dispatch(fetchVideos(''));
        }
    }
}

export default connect(mapState, mapDispatch)(Video);
