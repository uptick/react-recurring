import React from 'react'
// import ReactDOM from 'react-dom'
import RecurrenceInput from '../src'

let elem = document.getElementById( 'mount' );
// ReactDOM.render( <RecurrenceInput onChange={ v => console.log( v ) } />, elem );
React.render( <RecurrenceInput onChange={ v => console.log( v ) } />, elem );

if( module.hot ) {
    module.hot.accept();
}
