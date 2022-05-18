import Head from 'next/head'
import WebsiteBase from '../../../components/WebsiteBase'
import Link from '../../../components/Link'
import styles from '../../../styles/project/pid/index.module.css'

const Post = ({project}) => {
      let {_id, story, url, short_description, name, github_url, skills, image_url} = project
      return (
      <WebsiteBase>
          <Head><title>{name}</title></Head>
          <div className={styles.container}>
            <h1 className={styles.title}>{name}</h1>
            <img src={image_url} height={480} width={840} />
            <p className={styles.story}>{story}</p>
            <div className={styles.sideBySide}>
              <Link url={github_url}>github</Link>
              <Link url={url}>demo</Link>
            </div>
          </div>
      </WebsiteBase>
    );
  }
  
  export default Post

  export async function getServerSideProps(context){
    const { pid } = context.query;
    const res = await fetch(`http://localhost:3000/api/project/${pid}`)
    const project = await res.json()
  
    return { props: { project } }
  }