import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './tabs.css'

class Tabs extends Component {

    render() {
        const { onChange, selected, tabs } = this.props;
        return (
            <ul styleName="tabs" className="nav nav-tabs">
              { tabs.map( ( name, ii ) => (
                    <li className={ (selected == name) ? 'active' : '' } role="presentation" key={ ii }
                        onClick={ e => onChange( e, name ) }>
                      <a href="#">{ name }</a>
                    </li>
                ))}
            </ul>
        );
    }
}

export default CSSModules( Tabs, styles );
