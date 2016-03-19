import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './radio-button.css';

class RadioButton extends Component {

    render() {
        const { onChange, label, value, checked, wide, ...props } = this.props;

        let onClick;
        if( !checked )
            onClick = onChange;

        let ctrStyle = checked ? 'checked' : 'normal';
        if( wide )
            ctrStyle += '-wide';

        return (
            <div styleName={ ctrStyle } onClick={ e => onClick( e, value ) } { ...props }>
              <span styleName="text">{ label }</span>
            </div>
        );
    }
}

export default CSSModules( RadioButton, styles );
