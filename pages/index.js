import Head from 'next/head'
import Link from '../components/Link'
import WebsiteBase from '../components/WebsiteBase'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <WebsiteBase>
      <>
        <Head><title>Home</title></Head>
        <div className={styles.container}>
          <div className={styles.subcontainerSmaller}>
            <img className={styles.img} src={'https://res.cloudinary.com/practicaldev/image/fetch/s--4nVcu5jx--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://cdn.dribbble.com/users/722835/screenshots/4082720/bot_icon.gif'} />
          </div>
          <h1 className={styles.header}>about me</h1>
          <div className={styles.subcontainer}>
            <div className={styles.par}>
              <p>Hey there, my name is Gerardo Valenzuela, and I recently received my BS from USC in Computer Science!</p>
              <p>I am experienced with C++, C, Assembly, Java, Python, React, Node.js/Javascript, etc.</p>
              <p>I am currently also looking for work.</p>
              <p>If you have any questions or you&apos;d just like to chat, please don&apos;t hesitate to contact me via <Link xsmall url='https://www.linkedin.com/in/gerardo-de-jesus-valenzuela-aispuro-336496116/'>linkedin</Link>.</p>
            </div>
          </div>
        </div>
      </>
    </WebsiteBase>
  );
}