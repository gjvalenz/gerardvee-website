import Head from 'next/head'
import ProjectCard from '../components/ProjectCard'
import WebsiteBase from '../components/WebsiteBase'
import { getDocs, collection } from 'firebase/firestore'
import db from '../projects_db_instance'

function Projects({projects}) {
  return (
    <WebsiteBase>
      <Head><title>Projects</title></Head>
      {projects && projects.map(project => (<ProjectCard {...project} key={project.id}/>))}
    </WebsiteBase>
  );
}

//export async function getServerSideProps() { use static props rather than serversideprops
Projects.getInitialProps = async (ctx) => { 
  //const res = await fetch('https://www.gerardvee.com/api/projects')
  //const snapshot = await onValue(ref);
  //const data = await getData(ref);
  const res = await fetch('https://firestore.googleapis.com/v1/projects/website-373507/databases/(default)/documents/projects');
  const projects = await res.json();
  console.log(projects);
  let dats = [];
  for(let key in projects)
  {
    if(projects.hasOwnProperty(key))
    {
      dats.push(projects[key]);
    }
  }
  /*qs.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      dats.push(doc.data());
  })*/
  //ref.once('value', (data) => {
  //  console.log(data);
  //});
  //console.log(data.val());
  //const snapshot = await ref.once('value')
  //const val = snapshot.val()
  //console.log(val)
  //const projects = await res.json()

  return { projects: dats }
}

export default Projects

