import Head from 'next/head'
import ProjectCard from '../components/ProjectCard'
import WebsiteBase from '../components/WebsiteBase'

function Projects({projects}) {
  return (
    <WebsiteBase>
      <Head><title>Projects</title></Head>
      {projects && projects.map(project => (<ProjectCard {...project} key={project.id}/>))}
    </WebsiteBase>
  );
}

Projects.getInitialProps = async (ctx) => { 
  const res = await fetch('https://website-373507-default-rtdb.firebaseio.com/projects.json')
  const data = await res.json()
  let projects = []
  for(let key in data)
  {
    if(data.hasOwnProperty(key))
    {
      projects.push(data[key])
    }
  }

  return { projects }
}

export default Projects

