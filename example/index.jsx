import React from 'react'
import ReactDOM from 'react-dom'
import RecurrenceInput, { OffsetInput } from 'react-recurring'

ReactDOM.render( <RecurrenceInput onChange={ v => console.log( v ) } />, document.getElementById( 'mount' ) );
ReactDOM.render( <OffsetInput />, document.getElementById( 'offset-mount' ) );
