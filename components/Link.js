import React from 'react'

import styles from '../styles/components/Link.module.css'

export default class Link extends React.Component
{
  render(){
    return (
        <a className={this.props.big ? styles.blink : styles.link} href={this.props.url}>{this.props.children}</a>
    );
  }
}
