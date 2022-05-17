import React from 'react'

import Link from '../components/Link'
import styles from '../styles/components/ProjectCard.module.css'

export default class ProjectCard extends React.Component
{
  render(){
    return (
    <div className={styles.container} data-project-id={this.props.id}>
        <Link big url={this.props.url}>{this.props.name}</Link>
        <p>{this.props.skills.map(sk => sk+',')}</p>
    </div>);
  }
}
