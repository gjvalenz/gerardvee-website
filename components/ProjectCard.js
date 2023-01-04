import React from 'react'

import Link from '../components/Link'
import styles from '../styles/components/ProjectCard.module.css'
import stylesIndex from '../styles/project/pid/index.module.css'
import stylesLink from '../styles/components/Link.module.css'


function ReadMore({clicked, callback, short_description, skills_shown, github_url, url}) {
  if(!clicked)
    return (
      <p className={stylesLink.smlink} url={''} onClick={() => callback(true)}>Read more</p>
    );
  return (
    <>
      <p className={styles.description}>{short_description}</p>
      <p className={styles.skills}>tech: {skills_shown}</p>
      <div className={stylesIndex.sideBySide}>
        <Link small url={github_url}>github</Link>
        { url && <Link small url={url}>demo</Link> }
      </div>
      <p className={stylesLink.smlink} onClick={() => callback(false)}>Collapse</p>
    </>
  );
}

export default class ProjectCard extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = { clicked: false };
  }

  render(){
    let {_id, story, url, short_description, name, github_url, skills, image_url} = this.props;
    let id = _id;
    let skills_shown = skills.join(', ');
    return (
    <div className={styles.container} data-project-id={id}>
        { url && <Link big url={url}>{name}</Link> }
        { !url && <Link big url={'#'}>{name}</Link> }
        <img src={image_url} height={320} width={640}/>
        <p className={stylesIndex.story}>{story}</p>
        <ReadMore clicked={this.state.clicked} callback={(bool) => {this.setState({clicked: bool});}}
          short_description={short_description} skills_shown={skills_shown} github_url={github_url} url={url} />
    </div>);
  }
}
