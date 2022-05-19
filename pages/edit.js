import jsHttpCookie from 'cookie'
import Head from 'next/head'
import { useState } from 'react'

import WebsiteBase from '../components/WebsiteBase'
import EditProjectCard from '../components/EditProjectCard'

const makeNewProject = (index) => ({_id: -1, index, story: '', url: '', short_description: '', name: '', github_url: '', skills: [], image_url: '' })

const Edit = ({_projects}) => {
      const [projects, modProj] = useState(_projects)
      const [newProjects, modNewProject] = useState([])
      let start = 0
      const newProject = () => {
        modNewProject(projs => [...projs, makeNewProject(start++)])
      }
      let onNewProject = (project, idx) => {
          modProj(projs => [...projs, project])
          modNewProject(projs => {
              let pjs = projs.filter(p => p.index != idx)
              return pjs
          })
      }
      let onDeletedProject = (_id) => {
        modProj(projs => projs.filter(p => p._id != _id))
    }
      return (
      <WebsiteBase>
          <Head><title>Edit</title></Head>
          {projects.map(project => (<EditProjectCard {...project} key={project.id} onDeletion={onDeletedProject}/>))}
          {newProjects.map((project, _ix) => (<EditProjectCard {...project} isNew onSuccess={onNewProject} key={_ix}/>))}
          <button onClick={newProject}>Create new project</button>
      </WebsiteBase>
    );
}

export async function getServerSideProps(context){
    const cookies = context.req.headers.cookie;
    if(cookies != null)
    {
        const cookie = jsHttpCookie.parse(cookies)
        if(cookie.token)
        {
            if(cookie.token == 'DRRJDUOH4FURUF4HRDI3NDE2I3E')
            {
                const res = await fetch('https://www.gerardvee.com/api/projects')
                const _projects = await res.json()

                return { props: { _projects } }
            }
            else
            {
                return {
                    redirect: {
                        permanent: 'false',
                        destination: '/login'
                    },
                    props: {}
                }
            }
        }
        else
        {
            return {
                redirect: {
                    permanent: 'false',
                    destination: '/login'
                },
                props: {}
            }
        }
    }
    return {
        redirect: {
            permanent: 'false',
            destination: '/login'
        },
        props: {}
    }
}

export default Edit