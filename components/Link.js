import React from 'react'

import LLink from 'next/link';
import styles from '../styles/components/Link.module.css'

export default class Link extends React.Component
{
  render(){
    return (
        <LLink href={this.props.url} as={this.props.as ? this.props.as : this.props.url} passHref>
          <a className={this.props.xsmall? styles.xsmall : this.props.big ? styles.blink : (this.props.small? styles.smlink : styles.link ) }>{this.props.children}</a>
        </LLink>
    );
  }
}
