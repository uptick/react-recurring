import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
var RRule = require( 'rrule' );
import FrequencySelect from './frequency-select'
import DailyInput from './daily-input'
import WeeklyInput from './weekly-input'
import MonthlyInput from './monthly-input'
import YearlyInput from './yearly-input'
import styles from './recurrence-input.css'

class RecurrenceInput extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            period: 1,
            dom: 1
        };
        this.updateRule = this.updateRule.bind( this );
        this.handleChange = this.handleChange.bind( this );
        this.handleFrequencyChange = this.handleFrequencyChange.bind( this );
    }

    updateRule( state = {} ) {
        const { frequency, weekday, period, lastDom, dom, doy, mode, ordinal } = { ...(this.state || {}), ...state };

        let freq;
        switch( frequency ) {
            case 'Daily':
                freq = RRule.DAILY;
                break;
            case 'Weekly':
                freq = RRule.WEEKLY;
                break;
            case 'Monthly':
                freq = RRule.MONTHLY;
                break;
            case 'Yearly':
                freq = RRule.YEARLY;
                break;
        }

        let byweekday;
        switch( weekday ) {
            case 'Mo':
                byweekday = RRule.MO;
                break;
            case 'Tu':
                byweekday = RRule.TU;
                break;
            case 'We':
                byweekday = RRule.WE;
                break;
            case 'Th':
                byweekday = RRule.TH;
                break;
            case 'Fr':
                byweekday = RRule.FR;
                break;
            case 'Sa':
                byweekday = RRule.SA;
                break;
            case 'Su':
                byweekday = RRule.SU;
                break;
        }

        let ord = {
            '1st': 1,
            '2nd': 2,
            '3rd': 3,
            '4th': 4
        }[ordinal];

        if( byweekday !== undefined && freq == RRule.MONTHLY && mode == 'W' && ord !== undefined )
            byweekday = byweekday.nth( ord );

        let opts = {
            freq: freq,
            interval: period
        };
        if( byweekday !== undefined && (ord !== undefined || freq == RRule.WEEKLY) )
            opts.byweekday = byweekday;
        if( dom !== undefined && mode == 'M' ) {
            if( lastDom )
                opts.bymonthday = -dom;
            else
                opts.bymonthday = dom;
        }
        if( doy !== undefined && freq == RRule.YEARLY )
            opts.byyearday = doy;

        this.rule = new RRule( opts );

        return this.rule;
    }

    getValue() {
        return this.rule.toString();
    }

    sendChange() {
        const { onChange } = this.props;
        if( onChange )
            onChange( this.getValue() );
    }

    handleChange( event, value ) {
        value.rule = this.updateRule( value );
        this.setState( value );
        this.sendChange();
    }

    handleFrequencyChange( event, value ) {
        event.preventDefault();
        this.handleChange( event, {
            frequency: value,
            weekday: undefined,
            period: 1,
            mode: undefined,
            ordinal: undefined,
            dom: 1,
            doy: 1
        } );
    }

    render() {
        const { frequency, weekday, period, ordinal, mode,
                lastDom, dom, doy, rule } = this.state || {};

        let periodCom;
        switch( frequency ) {
            case 'Daily':
                periodCom = <DailyInput onChange={ this.handleChange } period={ period } />;
                break;
            case 'Weekly':
                periodCom = <WeeklyInput onChange={ this.handleChange } weekday={ weekday } period={ period } />;
                break;
            case 'Monthly':
                periodCom = <MonthlyInput onChange={ this.handleChange } mode={ mode } weekday={ weekday }
                                          lastDom={ lastDom } dom={ dom } ordinal={ ordinal } period={ period } />;
                break;
            case 'Yearly':
                periodCom = <YearlyInput onChange={ this.handleChange } doy={ doy } period={ period } />;
                break;
        };

        let ruleCom;
        if( rule )
            ruleCom = <div styleName="rule"><span>{ rule.toText() }</span></div>;

        return (
            <div styleName="recurrence-input">
              <FrequencySelect onChange={ this.handleFrequencyChange } selected={ frequency } />
              { periodCom }
              { ruleCom }
            </div>
        );
    }
}

export default CSSModules( RecurrenceInput, styles );
