import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './period-input.css'

class PeriodInput extends Component {

    handleChange( event ) {
        const { onChange } = this.props;
        event.preventDefault();
        if( onChange )
            onChange( event, { period: event.target.value } );
    }

    render() {
        const { onChange, period, plural } = this.props;
        return (
            <div className={ styles.periodContainer }>
              <div className={ styles.row }>
                <div className={ styles.preLabel }>
                  <span>Repeat every </span>
                </div>
                <input className={ classNames( 'form-control', styles.periodInput ) } type="number" min="1"
                       value={ period } onChange={ ::this.handleChange } />
                <div className={ styles.postLabel }>
                  <span> { plural }</span>
                </div>
              </div>
            </div>
        );
    }
}

export default PeriodInput;
