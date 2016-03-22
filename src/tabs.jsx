import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './tabs.css'

class Tabs extends Component {

    render() {
        const { onChange, selected, tabs } = this.props;
        return (
            <ul styleName="tabs" className="nav nav-tabs">
              { tabs.map( ( item, ii ) => (
                    <li className={ (selected == item[0]) ? 'active' : '' } role="presentation" key={ ii }
                        onClick={ e => onChange( e, item[0] ) }>
                      <a href="#">{ item[1] }</a>
                    </li>
                ))}
            </ul>
        );
    }
}

export default CSSModules( Tabs, styles );
