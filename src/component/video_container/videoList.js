import React from 'react';
import { selectVideo } from '../../actions/videos';
import {
    List,
    Row,
    Col
} from 'antd';
import { connect } from 'react-redux';

class VideoList extends React.Component {
    render() {
        const { videos } = this.props;
        return (
            <Row>
                <Col>
                    <List
                        style={{ margin: 50 }}
                        header={<h2>Video List</h2>}
                        itemLayout="vertical"
                        dataSource={videos}
                        renderItem={video => (
                            <div onClick={() => this.props.dispatch(selectVideo(video))} style={{cursor: 'pointer'}}>
                            <List.Item 
                                key={video.etag}
                                extra={<img width={120} alt="logo" src={video.snippet.thumbnails.default.url} />}
                            >
                                <List.Item.Meta
                                    title={video.snippet.title}
                                />
                            </List.Item>
                            </div>
                        )}>
                    </List>
                </Col>
            </Row>
        )
    }
}

const mapState = (state) => ({
    videos: state.VideoReducer
})

export default connect(mapState)(VideoList);