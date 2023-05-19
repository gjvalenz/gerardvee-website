import React from 'react'

import Link from './Link'
import styles from '../styles/components/WebsiteBase.module.css'
import Head from 'next/head';

export default class WebsiteBase extends React.Component
{
  render(){
    return (
    <div className={styles.container}>
        <Head>
          <link href='https://fonts.googleapis.com/css?family=Abel' rel='stylesheet'></link>
        </Head>
        <div className={styles.header}>
            <Link url='/'>home</Link>
            <Link url='/projects'>projects</Link>
            <Link url='https://github.com/gjvalenz'>github</Link>
            <Link url='https://www.linkedin.com/in/gerardo-de-jesus-valenzuela-aispuro-336496116/'>contact me</Link>
        </div>
        <div className={styles.main}>
        {this.props.children}
        </div>
        <div className={styles.footer}>
            <h3 className={styles.intro}>Hi, my name is <Link xsmall url='https://www.linkedin.com/in/gerardo-de-jesus-valenzuela-aispuro-336496116/'>Gerardo</Link>. I received my BS in CS from USC in May &apos;23. I dabble in full-stack dev, robotics, ai, etc.</h3>
        </div>
    </div>);
  }
}
