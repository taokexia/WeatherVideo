import React from 'react';
import {
    Card,
    Row,
    Col
} from 'antd';
import { connect } from 'react-redux';

class VideoDetail extends React.Component {
    render() {
        if (this.props.activeVideos === null || this.props.activeVideos.id === null) {
            return <div>Load....</div>
        } else {
            const YTUrl = `https:www.youtube.com/embed/${this.props.activeVideos.id.videoId}`
            return (
                <div style={{ marginTop: 50 }}>
                    <Row>
                        <Col>
                            <div>
                                <iframe
                                    title="appley"
                                    src={YTUrl} 
                                    style={{ width: 600, height: 500 }}
                                ></iframe>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card
                                style={{ marginTop: 30, width: 600 }}
                                title="Description" >
                                <p>{this.props.activeVideos.snippet.title}</p>
                                <p>{this.props.activeVideos.snippet.description}</p>
                            </Card>
                        </Col>
                    </Row>
                </div>
            )
        }
    }
}

const mapState = (state) => ({
    activeVideos: state.ActiveVideoReducer
})

export default connect(mapState)(VideoDetail);