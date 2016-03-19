import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import OrdinalSelect from './ordinal-select'
import WeekdaySelect from './weekday-select'
import PeriodInput from './period-input'
import styles from './monthly-input.css'

class MonthlyInput extends Component {

    render() {
        const { onChange, ordinal, period } = this.props;
        return (
            <div styleName="monthly-input">
              <div className="form-group">
                <div styleName="pre-label">
                  <span>On the </span>
                </div>
                <div styleName="ordinal">
                  <OrdinalSelect />
                </div>
              </div>
              <WeekdaySelect />
              <PeriodInput { ...this.props } styles={ null } plural="months." />
            </div>
        );
    }
}

export default CSSModules( MonthlyInput, styles );
