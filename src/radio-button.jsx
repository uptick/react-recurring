import React, { Component } from 'react';
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
            <div className={ styles[ctrStyle] } onClick={ e => onClick( e, value ) } { ...props }>
              <span className={ styles.text }>{ label }</span>
            </div>
        );
    }
}

export default RadioButton;
