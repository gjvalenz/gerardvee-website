import React, { useState } from 'react'
import { Player } from 'video-react'
import 'video-react/dist/video-react.css'

import Link from '../components/Link'
import styles from '../styles/components/ProjectCard.module.css'
import stylesIndex from '../styles/project/pid/index.module.css'
import stylesLink from '../styles/components/Link.module.css'

function ReadMore({clicked, callback, short_description, skills, github_url, url}) {
  if(!clicked)
    return (
      <p className={stylesLink.smlink} url={''} onClick={() => callback(true)}>Read more</p>
    );
  return (
    <>
      <p className={styles.description}>{short_description}</p>
      <p className={styles.skills}>tech: {skills}</p>
      {github_url && <div className={stylesIndex.sideBySide}>
        <Link small url={github_url}>github</Link>
        { url && <Link small url={url}>demo</Link> }
      </div>}
      {!github_url && <><div className={stylesIndex.sideBySide}>
        <p>Please contact me for further details about the code. I'll be happy to talk about it!</p>
      </div>
      <div className={stylesIndex.sideBySide}>
      { url && <Link small url={url}>demo</Link> }
      </div></>}
      <p className={stylesLink.smlink} onClick={() => callback(false)}>Collapse</p>
    </>
  );
}

const ProjectCard = ({_id: id, story, url, short_description, flipped: flipped = false, square: square = false, name : nm, github_url, skills, image_url, video}) =>
{
  const [ clicked, setClicked ] = useState(false);
  return (
    <div className={styles.container} data-project-id={id}>
        { url && <Link big url={url}>{nm}</Link> }
        { !url && <Link big url={'#'}>{nm}</Link> }
        {video && <Player playsInline src={image_url} height={320} width={640} fluid={false}/>}
        {!video && !flipped && !square && <img src={image_url} height={320} width={640}/>}
        {!video && flipped && <img src={image_url} height={640} width={320}/>}
        {square && <img src={image_url} height={480} width={480}/>}
        <p className={stylesIndex.story}>{story}</p>
        <ReadMore clicked={clicked} callback={(bool) => {setClicked(bool);}}
          short_description={short_description} skills={skills} github_url={github_url} url={url} />
    </div>);
};

export default ProjectCard;
