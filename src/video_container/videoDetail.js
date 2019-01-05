import React from 'react';
import { Card } from 'antd';

class VideoDetail extends React.Component {
    render() {
        return (
            <div style={{marginTop: 50 }}>
                <div>
                    <iframe title="appley"></iframe>
                </div>
                <Card
                    style={{marginTop: 30, width: 600}}
                    title="Description" >
                    <p>This is a description about video</p>
                    <p>This is a description about video</p>
                    <p>This is a description about video</p>
                </Card>
            </div>
        )
    }
}

export default VideoDetail;