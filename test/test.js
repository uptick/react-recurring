var jsdom = require( 'jsdom-global' )();  // must come first
var React = require( 'react' );
var RRule = require( 'rrule' );
var TestUtils = require( 'react-addons-test-utils' );
var assert = require( 'assert' );
var FrequencySelect = require( '../src/frequency-select' ).default;
var RecurrenceInput = require( '../src/recurrence-input' ).default;

describe( 'FrequencySelect', function() {

    it( 'contained in div', function() {
        let com = TestUtils.renderIntoDocument( <FrequencySelect /> );
        let div = TestUtils.findRenderedDOMComponentWithTag( com, 'div' );
        assert.notEqual( div, undefined );
    });

    it( 'has all frequencies', function() {
        let com = TestUtils.renderIntoDocument( <FrequencySelect /> );
        let inputs = TestUtils.scryRenderedDOMComponentsWithTag( com, 'input' );
        /* [ 'D', 'W', 'M', 'Y' ].forEach( f => {
           assert.notEqual( inputs.find( i => i.value == 'W' ), undefined );
           }); */
    });
});

describe( 'RecurrenceInput', function() {

    it( 'contained in div', function() {
        let com = TestUtils.renderIntoDocument( <RecurrenceInput /> );
    });

    it( 'parses last day-of-month string correctly', function() {
        let text = 'FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=-1';
        let com = TestUtils.renderIntoDocument( <RecurrenceInput value={ text } /> );
        let state = com.state;
        assert.equal( state.frequency, RRule.MONTHLY );
        assert.equal( state.weekday, undefined );
        assert.equal( state.period, 1 );
        assert.equal( state.dom, 1 );
        assert.equal( state.lastDom, true );
        assert.equal( state.ordinal, undefined );
        assert.equal( state.doy, undefined );
        assert.equal( state.mode, 'M' );
    });

    it( 'parses day-of-month string correctly', function() {
        let text = 'FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=3';
        let com = TestUtils.renderIntoDocument( <RecurrenceInput value={ text } /> );
        let state = com.state;
        assert.equal( state.frequency, RRule.MONTHLY );
        assert.equal( state.weekday, undefined );
        assert.equal( state.period, 1 );
        assert.equal( state.dom, 3 );
        assert.equal( state.lastDom, false );
        assert.equal( state.ordinal, undefined );
        assert.equal( state.doy, undefined );
        assert.equal( state.mode, 'M' );
    });

    it( 'parses day-of-month string correctly', function() {
        let text = 'FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=3';
        let com = TestUtils.renderIntoDocument( <RecurrenceInput value={ text } /> );
        let state = com.state;
        assert.equal( state.frequency, RRule.MONTHLY );
        assert.equal( state.weekday, undefined );
        assert.equal( state.period, 1 );
        assert.equal( state.dom, 3 );
        assert.equal( state.lastDom, false );
        assert.equal( state.ordinal, undefined );
        assert.equal( state.doy, undefined );
        assert.equal( state.mode, 'M' );
    });

    it( 'parses weekday-of-month string correctly', function() {
        let text = 'FREQ=MONTHLY;INTERVAL=1;BYDAY=+2WE';
        let com = TestUtils.renderIntoDocument( <RecurrenceInput value={ text } /> );
        let state = com.state;
        assert.equal( state.frequency, RRule.MONTHLY );
        assert.equal( state.weekday, RRule.WE );
        assert.equal( state.period, 1 );
        assert.equal( state.dom, undefined );
        assert.equal( state.lastDom, undefined );
        assert.equal( state.ordinal, 2 );
        assert.equal( state.doy, undefined );
        assert.equal( state.mode, 'W' );
    });

    it( 'parses weekday string correctly', function() {
        let text = 'FREQ=WEEKLY;INTERVAL=1;BYDAY=SA';
        let com = TestUtils.renderIntoDocument( <RecurrenceInput value={ text } /> );
        let state = com.state;
        assert.equal( state.frequency, RRule.WEEKLY );
        assert.equal( state.weekday, RRule.SA );
        assert.equal( state.period, 1 );
        assert.equal( state.dom, undefined );
        assert.equal( state.lastDom, undefined );
        assert.equal( state.ordinal, undefined );
        assert.equal( state.doy, undefined );
        assert.equal( state.mode, undefined );
    });

    it( 'parses day string correctly', function() {
        let text = 'FREQ=DAILY;INTERVAL=2;BYDAY=FR';
        let com = TestUtils.renderIntoDocument( <RecurrenceInput value={ text } /> );
        let state = com.state;
        assert.equal( state.frequency, RRule.DAILY );
        assert.equal( state.weekday, RRule.FR );
        assert.equal( state.period, 2 );
        assert.equal( state.dom, undefined );
        assert.equal( state.lastDom, undefined );
        assert.equal( state.ordinal, undefined );
        assert.equal( state.doy, undefined );
        assert.equal( state.mode, undefined );
    });

    it( 'parses year string correctly', function() {
        let text = 'FREQ=YEARLY;INTERVAL=1;BYYEARDAY=10';
        let com = TestUtils.renderIntoDocument( <RecurrenceInput value={ text } /> );
        let state = com.state;
        assert.equal( state.frequency, RRule.YEARLY );
        assert.equal( state.weekday, undefined );
        assert.equal( state.period, 1 );
        assert.equal( state.dom, undefined );
        assert.equal( state.lastDom, undefined );
        assert.equal( state.ordinal, undefined );
        assert.equal( state.doy, 10 );
        assert.equal( state.mode, undefined );
    });
});
