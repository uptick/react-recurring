import React, { Component } from 'react'
import classNames from 'classnames'
import OrdinalSelect from './ordinal-select'
import WeekdaySelect from './weekday-select'
import PeriodInput from './period-input'
import RadioButton from './radio-button'
import styles from './monthly-input.css'

class MonthlyInput extends Component {

    handleModeChange( event, value ) {
        const { onChange } = this.props;
        event.preventDefault();
        if( onChange )
            onChange( event, { mode: value } );
    }

    handleDOMChange( event ) {
        const { onChange } = this.props;
        const value = event.target.value;
        event.preventDefault();
        if( onChange )
            onChange( event, { dom: value } );
    }

    handleLastDOMChange( event ) {
        const { onChange } = this.props;
        const value = event.target.checked;
        if( onChange )
            onChange( event, { lastDom: value } );
    }

    render() {
        const { onChange, ordinal, weekday, mode, lastDom, dom, period } = this.props;

        let mainCom;
        if( mode == 'M' ) {
            mainCom = (
                <div>
                  <div className={ styles.row }>
                    <div className={ styles.domPreLabel }>
                      <span>Day of month</span>
                    </div>
                    <input className={ classNames( 'form-control', styles.dayOfMonthInput ) } value={ dom }
                           type="number" min="1" max="28" onChange={ ::this.handleDOMChange } />
                  </div>
                  <div className={ styles.row }>
                    <div className={ styles.domPreLabel }>
                      <span>From the last day</span>
                    </div>
                    <span>
                      <input className={ styles.lastDayOfMonthInput } value={ lastDom } checked={ lastDom }
                             type="checkbox" onChange={ ::this.handleLastDOMChange } />
                    </span>
                  </div>
                  <PeriodInput { ...this.props } plural="months." />
                </div>
            );
        }
        else if( mode == 'W' ) {
            mainCom = (
                <div>
                  <div className={ styles.row }>
                    <div className={ styles.preLabel }>
                      <span>On the </span>
                    </div>
                    <div className={ styles.ordinal }>
                      <OrdinalSelect onChange={ onChange } selected={ ordinal } />
                    </div>
                  </div>
                  <WeekdaySelect onChange={ onChange } selected={ weekday } />
                  <PeriodInput { ...this.props } plural="months." />
                </div>
            );
        }

        return (
            <div className={ styles.monthlyInput }>
              <div className={ styles.row }>
                <RadioButton wide={ true } label="By day of month" value="M"
                             checked={ mode == 'M' } onChange={ ::this.handleModeChange }
                             style={{ width: '145px', marginRight: '10px', fontSize: '16px' }} />
                <RadioButton wide={ true } label="By day of week" value="W"
                             checked={ mode == 'W' } onChange={ ::this.handleModeChange }
                             style={{ width: '145px', fontSize: '16px' }} />
              </div>
              { mainCom }
            </div>
        );
    }
}

export default MonthlyInput;
