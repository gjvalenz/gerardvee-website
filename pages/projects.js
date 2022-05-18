import Head from 'next/head'
import ProjectCard from '../components/ProjectCard'
import WebsiteBase from '../components/WebsiteBase'

export default function Projects({projects}) {
  return (
    <WebsiteBase>
      <Head><title>Projects</title></Head>
      {projects.map(project => (<ProjectCard {...project} key={project.id}/>))}
    </WebsiteBase>
  );
}

//export async function getServerSideProps() { use static props rather than serversideprops
export async function getStaticProps(){ 
  const res = await fetch('http://localhost:3000/api/projects')
  const projects = await res.json()

  return { props: { projects } }
}

