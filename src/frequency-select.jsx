import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Tabs from './tabs'
import styles from './frequency-select.css'

class FrequencySelect extends Component {

    constructor( props ) {
        super( props );
        this.CHOICES = [
            ['D', 'Daily'],
            ['W', 'Weekly'],
            ['M', 'Monthly'],
            ['Y', 'Yearly'],
        ];
    }

    render() {
        const { onChange, selected } = this.props;
        return (
            <div styleName="frequency-select">
              <Tabs tabs={ this.CHOICES.map( i => i[1] ) } selected={ selected } onChange={ onChange } />
            </div>
        );
        /* return (
           <div styleName="frequency-select">
           <div className="form-group">
           <select className="form-control" onChange={ onChange }>
           { this.CHOICES.map( ( item, ii ) => (
           <option value={ item[0] } key={ ii }>{ item[1] }</option>
           ))}
           </select>
           </div>
           </div>
           ); */
    }
}

export default CSSModules( FrequencySelect, styles );
