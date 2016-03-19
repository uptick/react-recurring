import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import RadioButton from './radio-button'
import styles from './weekday-select.css'

class WeekdaySelect extends Component {

    constructor( props ) {
        super( props );
        this.CHOICES = [ 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su' ];
        this.handleChange = this.handleChange.bind( this );
    }

    handleChange( event, value ) {
        const { onChange } = this.props;
        if( onChange )
            onChange( event, { 'weekday': value } );
    }

    render() {
        const { selected } = this.props;
        return (
            <div styleName="weekday-select">
              <div className="form-group">
                { this.CHOICES.map( ( item, ii ) => (
                      <RadioButton label={ item } value={ item } key={ ii }
                                   checked={ selected == item } onChange={ this.handleChange } />
                  ))}
              </div>
            </div>
        );
    }
}

export default CSSModules( WeekdaySelect, styles );
