import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './tabs.css'

class Tabs extends Component {
  render() {
    const { onChange, selected, tabs } = this.props;
    return (
      <ul className={ classNames( 'nav nav-tabs', styles.tabs ) }>
        {tabs.map((item, ii) => (
          <li
            className="nav-item"
            role="presentation"
            key={ii}
            onClick={(e) => onChange(e, item[0]) }
          >
            <a
              className={classNames('nav-link', {
                active: (selected == item[0]),
              })}
              href="#"
            >
              {item[1]}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

export default Tabs
