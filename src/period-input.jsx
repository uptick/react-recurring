import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
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
            <div styleName="period-container">
              <div className="form-group">
                <div styleName="pre-label">
                  <span>Repeat every </span>
                </div>
                <input styleName="period-input" className="form-control" type="number" min="1" name="period"
                       value={ period } onChange={ ::this.handleChange } />
                <div styleName="post-label">
                  <span> { plural }</span>
                </div>
              </div>
            </div>
        );
    }
}

export default CSSModules( PeriodInput, styles );
