import React, { Component } from 'react'
import RadioButton from './radio-button'

class OrdinalSelect extends Component {

    constructor( props ) {
        super( props );
        this.CHOICES = [
            [ 1, '1st' ],
            [ 2, '2nd' ],
            [ 3, '3rd' ],
            [ 4, '4th' ]
        ];
        this.handleChange = this.handleChange.bind( this );
    }

    handleChange( event, value ) {
        const { onChange } = this.props;
        if( onChange )
            onChange( event, { ordinal: value } );
    }

    render() {
        const { selected } = this.props;
        return (
            <div>
              { this.CHOICES.map( ( item, ii ) => (
                    <RadioButton label={ item[1] } value={ item[0] } key={ ii } checked={ selected == item[0] }
                                 onChange={ this.handleChange } />
                ))}
            </div>
        );
    }
}

export default OrdinalSelect;
