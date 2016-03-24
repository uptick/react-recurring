import React, { Component } from 'react'
import classNames from 'classnames'
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
            <div className={ styles.yearlyInput }>
              <div className={ styles.row }>
                <div className={ styles.preLabel }>
                  <span>Day of year</span>
                </div>
                <input className={ classNames( 'form-control', styles.dayOfYearInput ) }
                       type="number" min="1" max="365" value={ doy }
                       onChange={ ::this.handleDOYChange } />
              </div>
              <PeriodInput { ...this.props } plural="years." />
            </div>
        );
    }
}

export default YearlyInput;
