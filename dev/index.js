import React from 'react'
import RecurrenceInput, { OffsetInput } from '../src'

React.render( <RecurrenceInput onChange={ v => console.log( v ) } />, document.getElementById( 'mount' ) );
React.render( <OffsetInput />, document.getElementById( 'offset-mount' ) );

if( module.hot ) {
    module.hot.accept();
}
