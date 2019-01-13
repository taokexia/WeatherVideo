import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default class Chart extends Component {
    render() {
        var sum = this.props.data.reduce((sum, i) => sum+i, 0);
        var res = parseInt(sum / this.props.data.length);
        return (
            <div>
                <Sparklines height={120} width={180} data={this.props.data}>
                    <SparklinesLine color={this.props.color} />
                    <SparklinesReferenceLine type='avg' />
                </Sparklines>
                <div>
                    {res} {this.props.unit}
                </div>
            </div>
        )
    }
}