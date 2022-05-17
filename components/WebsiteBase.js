import React from 'react'

import Link from './Link'
import styles from '../styles/components/WebsiteBase.module.css'

export default class WebsiteBase extends React.Component
{
  render(){
    return (
    <div className={styles.container}>
        <div className={styles.header}>
            <Link url='/'>home</Link>
            <Link url='/projects'>projects</Link>
            <Link url='https://github.com/GerardVee'>github</Link>
            <Link url='/contact'>contact</Link>
        </div>
        {this.props.children}
        {/*this.props.children.map((slide, index) => {
            return React.cloneElement(slide, { key: index, className: 'project-main' })
        })*/}
        <div className={styles.footer}>
            <h3 className={styles.intro}>Hi, my name is <Link url='https://www.linkedin.com/in/gerardo-valenzuela-336496116/'>Gerardo</Link>. I am a CS student at USC who has an interest in Full-Stack development, AI, and Robotics.</h3>
        </div>
    </div>);
  }
}
