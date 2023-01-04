import Head from 'next/head'
import ProjectCard from '../components/ProjectCard'
import WebsiteBase from '../components/WebsiteBase'
import { getDocs, collection } from 'firebase/firestore'
import db from '../projects_db_instance'

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
  //const res = await fetch('https://www.gerardvee.com/api/projects')
  //const snapshot = await onValue(ref);
  //const data = await getData(ref);
  const qs = await getDocs(collection(db, 'projects'));
  let dats = [];
  qs.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      dats.push(doc.data());
  })
  //ref.once('value', (data) => {
  //  console.log(data);
  //});
  //console.log(data.val());
  //const snapshot = await ref.once('value')
  //const val = snapshot.val()
  //console.log(val)
  //const projects = await res.json()

  return { props: { projects: dats } }
}

