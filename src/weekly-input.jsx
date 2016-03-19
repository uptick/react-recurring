import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import WeekdaySelect from './weekday-select'
import PeriodInput from './period-input'
import styles from './weekly-input.css'

class WeeklyInput extends Component {

    render() {
        const { onChange, weekday, period } = this.props;
        return (
            <div styleName="weekly-input">
              <WeekdaySelect selected={ weekday } onChange={ onChange } />
              <PeriodInput { ...this.props } styles={ null } plural="weeks." />
            </div>
        );
    }
}

export default CSSModules( WeeklyInput, styles );
