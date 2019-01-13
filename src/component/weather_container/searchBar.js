import React from 'react';
import { Input, Col, Row } from 'antd';
import { connect } from 'react-redux';
import { fetchWeather } from '../../actions/weather';

const Search = Input.Search;

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
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
                            onSearch={() => this.props.searchWeather(this.state.keyword)}
                        />
                    </Col>
                </Row>
        )
    }
}


var mapState = (state) => {
    return {
        weather: state.weatherReducer
    }
}

var mapDispatch  = (dispatch) => {
    return {
        searchWeather(key) {
            dispatch(fetchWeather(key));
        }
    }
}

export default connect(mapState, mapDispatch)(SearchBar);