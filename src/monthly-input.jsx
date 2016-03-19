import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
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
                  <div className="form-group">
                    <div styleName="dom-pre-label">
                      <span>Day of month</span>
                    </div>
                    <input styleName="day-of-month-input" className="form-control" value={ dom }
                           type="number" min="1" max="28" name="day-of-month" onChange={ ::this.handleDOMChange } />
                  </div>
                  <div className="form-group">
                    <div styleName="dom-pre-label">
                      <span>From the last day</span>
                    </div>
                    <label>
                      <input styleName="last-day-of-month-input" value={ lastDom } checked={ lastDom }
                             type="checkbox" name="last-day-of-month" onChange={ ::this.handleLastDOMChange } />
                    </label>
                  </div>
                  <PeriodInput { ...this.props } styles={ null } plural="months." />
                </div>
            );
        }
        else if( mode == 'W' ) {
            mainCom = (
                <div>
                  <div className="form-group">
                    <div styleName="pre-label">
                      <span>On the </span>
                    </div>
                    <div styleName="ordinal">
                      <OrdinalSelect onChange={ onChange } selected={ ordinal } />
                    </div>
                  </div>
                  <WeekdaySelect onChange={ onChange } selected={ weekday } />
                  <PeriodInput { ...this.props } styles={ null } plural="months." />
                </div>
            );
        }

        return (
            <div styleName="monthly-input">
              <div className="form-group">
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

export default CSSModules( MonthlyInput, styles );
