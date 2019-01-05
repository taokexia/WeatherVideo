import React from 'react';
import { Input, Col, Row } from 'antd';
import { connect } from 'react-redux';

import { fetchVideos, fetchOneVideo } from '../actions/videos';

const Search = Input.Search;

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }

    handlUpdateVideos () {
        setTimeout(() => {
            this.props.dispatch(fetchVideos(this.state.keyword));
            this.props.dispatch(fetchOneVideo(this.state.keyword));
        }, 300);
    }
    render() {
        return (
                <Row>
                    <Col span={8}>
                        <Search
                            placeholder="search something..."
                            size="large"
                            value = {this.state.keyword}
                            onChange = {(e) => {this.setState({keyword: e.target.value})}}
                            onSearch={this.handlUpdateVideos.bind(this)}
                        />
                    </Col>
                </Row>
        )
    }
}


var mapStateToProps = (data) => {
    return {
        data: data
    }
}

export default connect(mapStateToProps)(SearchBar);