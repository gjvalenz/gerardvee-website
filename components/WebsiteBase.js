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
            <Link url='https://github.com/GerardVee'>github</Link>
            <Link url='https://www.linkedin.com/in/gerardo-valenzuela-336496116/'>contact me</Link>
        </div>
        <div className={styles.main}>
        {this.props.children}
        </div>
        <div className={styles.footer}>
            <h3 className={styles.intro}>Hi, my name is <Link small url='https://www.linkedin.com/in/gerardo-valenzuela-336496116/'>Gerardo</Link>. I am a CS student at USC who has an interest in Full-Stack development, AI, and Robotics.</h3>
        </div>
    </div>);
  }
}
