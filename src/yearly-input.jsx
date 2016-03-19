import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import PeriodInput from './period-input'
import styles from './yearly-input.css'

class YearlyInput extends Component {

    constructor( props ) {
        super( props );
        this.CHOICES = [ '1st', '2nd', '3rd', '4th' ];
    }

    handleDOYChange( event ) {
        const { onChange } = this.props;
        event.preventDefault();
        let value = event.target.value;
        if( onChange )
            onChange( event, { doy: value } );
    }

    render() {
        const { onChange, doy, period } = this.props;
        return (
            <div styleName="yearly-input">
              <div className="form-group">
                <div styleName="pre-label">
                  <span>Day of year</span>
                </div>
                <input styleName="day-of-year-input" className="form-control"
                       type="number" min="1" max="365" name="day-of-year" value={ doy }
                       onChange={ ::this.handleDOYChange } />
              </div>
              <div>
                <PeriodInput { ...this.props } styles={ null } plural="years." />
              </div>
            </div>
        );
    }
}

export default CSSModules( YearlyInput, styles );
