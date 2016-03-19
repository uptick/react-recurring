import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import PeriodInput from './period-input'
import styles from './daily-input.css'

class DailyInput extends Component {

    render() {
        return <PeriodInput { ...this.props } styles={ null } plural="days." />;
    }
}

export default CSSModules( DailyInput, styles );
