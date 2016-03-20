import React from 'react'
import ReactDOM from 'react-dom'
import RecurrenceInput from '../src/recurrence-input'

let elem = document.getElementById( 'mount' );
ReactDOM.render( <RecurrenceInput />, elem );

if( module.hot ) {
    module.hot.accept();
}
