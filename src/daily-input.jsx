import React, { Component } from 'react'
import PeriodInput from './period-input'

class DailyInput extends Component {

    render() {
        return <PeriodInput { ...this.props } plural="days." />;
    }
}

export default DailyInput;
