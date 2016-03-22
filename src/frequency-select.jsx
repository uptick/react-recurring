import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import RRule from 'rrule';
import Tabs from './tabs'
import styles from './frequency-select.css'

class FrequencySelect extends Component {

    constructor( props ) {
        super( props );
        this.CHOICES = [
            [RRule.DAILY, 'Daily'],
            [RRule.WEEKLY, 'Weekly'],
            [RRule.MONTHLY, 'Monthly'],
            [RRule.YEARLY, 'Yearly'],
        ];
    }

    render() {
        const { onChange, selected } = this.props;
        return (
            <div styleName="frequency-select">
              <Tabs tabs={ this.CHOICES } selected={ selected } onChange={ onChange } />
            </div>
        );
    }
}

export default CSSModules( FrequencySelect, styles );
