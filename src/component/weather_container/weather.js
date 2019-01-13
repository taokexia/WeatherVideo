import React from 'react';
import SearchBar from './searchBar';
import WeatherList from './weatherList';
import {
    Row,
    Col
} from 'antd';

export default class Weather extends React.Component {
    render() {
        return(
            <div>
                <h1>Weather</h1>
                <SearchBar/>
                <Row style={{paddingTop: 30}}>
                    <Col>
                        <WeatherList></WeatherList>
                    </Col>
                </Row>
            </div>
        )
    }
}
