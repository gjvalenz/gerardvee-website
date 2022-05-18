import React from 'react'

import Link from '../components/Link'
import styles from '../styles/components/ProjectCard.module.css'

export default class ProjectCard extends React.Component
{
  render(){
    let {_id, story, url, short_description, name, github_url, skills, image_url} = this.props;
    let id = _id;
    let skills_shown = skills.join(', ');
    return (
    <div className={styles.container} data-project-id={id}>
        <Link big url={url}>{name}</Link>
        <img src={image_url} height={320} width={640}/>
        <p className={styles.description}>{short_description}</p>
        <p className={styles.skills}>tech: {skills_shown}</p>
        <Link small url="/project/[id]" as={`/project/${id}`}>Read more</Link>
    </div>);
  }
}
