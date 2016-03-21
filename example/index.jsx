import React from 'react'
import ReactDOM from 'react-dom'
import RecurrenceInput from 'react-recurring'

let elem = document.getElementById( 'mount' );
ReactDOM.render( <RecurrenceInput onChange={ v => console.log( v ) } />, elem );
