import React from 'react'
import ReactDOM from 'react-dom'
import RecurrenceInput, { OffsetInput } from '../src'

ReactDOM.render( <RecurrenceInput onChange={ v => console.log( v ) } />, document.getElementById( 'mount' ) );
ReactDOM.render( <OffsetInput />, document.getElementById( 'offset-mount' ) );

if( module.hot ) {
    module.hot.accept();
}
