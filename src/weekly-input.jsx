import React, { Component } from 'react'
import WeekdaySelect from './weekday-select'
import PeriodInput from './period-input'
import styles from './weekly-input.css'

class WeeklyInput extends Component {

    render() {
        const { onChange, weekday, period } = this.props;
        return (
            <div className={ styles.weeklyInput }>
              <WeekdaySelect selected={ weekday } onChange={ onChange } />
              <PeriodInput { ...this.props } plural="weeks." />
            </div>
        );
    }
}

export default WeeklyInput;
