import React from 'react'
import ReactDOM from 'react-dom'
import RecurrenceInput from 'react-recurring'

console.log( RecurrenceInput );

let elem = document.getElementById( 'mount' );
ReactDOM.render( <RecurrenceInput />, elem );
