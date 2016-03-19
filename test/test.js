import React from 'react'
import TestUtils from 'react-addons-test-utils'
import jsdom from 'mocha-jsdom'
import assert from 'assert'
import FrequencySelect from '../src/frequency-select'
import RecurrenceInput from '../src/recurrence-input'

describe( 'FrequencySelect', function() {
    jsdom();

    it( 'contained in div', function() {
        let com = TestUtils.renderIntoDocument( <FrequencySelect /> );
        let div = TestUtils.findRenderedDOMComponentWithTag( com, 'div' );
        assert.notEqual( div, undefined );
    });

    it( 'has all frequencies', function() {
        let com = TestUtils.renderIntoDocument( <FrequencySelect /> );
        let inputs = TestUtils.scryRenderedDOMComponentsWithTag( com, 'input' );
        [ 'D', 'W', 'M', 'Y' ].forEach( f => {
            assert.notEqual( inputs.find( i => i.value == 'W' ), undefined );
        });
    });
});

describe( 'RecurrenceInput', function() {
    jsdom();

    it( 'contained in div', function() {
        let com = TestUtils.renderIntoDocument( <RecurrenceInput /> );
        let div = TestUtils.findRenderedDOMComponentWithTag( com, 'div' );
        assert.notEqual( div, undefined );
    });
});
