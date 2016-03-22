import React, { Component } from 'react'
import RRule from 'rrule'
import RadioButton from './radio-button'
import styles from './weekday-select.css'

class WeekdaySelect extends Component {

    constructor( props ) {
        super( props );
        this.CHOICES = [
            [ RRule.MO, 'Mo' ],
            [ RRule.TU, 'Tu' ],
            [ RRule.WE, 'We' ],
            [ RRule.TH, 'Th' ],
            [ RRule.FR, 'Fr' ],
            [ RRule.SA, 'Sa' ],
            [ RRule.SU, 'Su' ]
        ];
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
            <div className={ styles.weekdaySelect }>
              <div className={ styles.row }>
                { this.CHOICES.map( ( item, ii ) => (
                      <RadioButton label={ item[1] } value={ item[0] } key={ ii }
                                   checked={ selected == item[0] } onChange={ this.handleChange } />
                  ))}
              </div>
            </div>
        );
    }
}

export default WeekdaySelect;
