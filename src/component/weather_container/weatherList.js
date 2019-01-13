import React from 'react';
import { connect } from 'react-redux';
import {
    Table
} from 'antd';
import Chart from './Chart';

class WeatherList extends React.Component {
    render() {
        console.log(this.props.weathers);
        const weathers = this.props.weathers;
        // 处理数据
        var data = [];
        weathers.map((weather, index) => {
            var oneData = {};
            const temps = weather.list && weather.list.map(city =>  city.main.temp );
            const pressures = weather.list &&weather.list.map(city => city.main.pressure);
            const humidity = weather.list && weather.list.map(city => city.main.humidity);
            oneData['key'] = index;
            oneData['city'] = weather.city.name;
            oneData['temperature'] = temps;
            oneData['pressure'] = pressures;
            oneData['humidity'] = humidity;
            data.push(oneData);
            return oneData;
        })
        const columns = [{
            title: 'City',
            dataIndex: 'city',
            key: 'city'
        },{
            title: 'Temperature (F)',
            dataIndex: 'temperature',
            key: 'temperature',
            render: temp => <Chart data={temp} color='blue' unit='F'/>
        },{
            title: 'Pressure (hPa)',
            dataIndex: 'pressure',
            key: 'pressure',
            render: press => <Chart data={press} color='green' unit='hPa'/>
        },{
            title: 'Humidity (%)',
            dataIndex: 'humidity',
            key: 'humidity',
            render:humidity => <Chart data={humidity} color='grey' unit='%'/>
        }];
        return(
            <Table columns={columns} dataSource={data}/>
        )
    }
}

const mapState = (state) => ({
    weathers: state.weatherReducer
})

export default connect(mapState)(WeatherList);