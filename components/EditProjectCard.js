import React from 'react'
import { useReducer } from 'react'

import styles from '../styles/components/EditProjectCard.module.css'

const EditProjectCard = (props) =>
{
    let {_id, story, name, url, short_description, github_url, skills, image_url, isNew, index} = props

    const [inputVals, setInputVals] = useReducer((state, newState) =>({...state, ...newState}),
    {
        story, url, short_description, name, github_url, skills, image_url
    })

    const onChange = event => {
        const {name, value} = event.target
        setInputVals({ [name]: value })
    }

    const editList = event => {
        const { name, value } = event.target
        setInputVals({ [name]: value.split(', ') })
    }
    
    let id = _id;

    let createNew = async () => {
        const userInfo = inputVals
        let res = await fetch('/api/new/project', {
            method: 'POST',
            body: JSON.stringify(inputVals)
        })
        let data = await res.json()
        if(data.success)
        {
            props.onSuccess(data.project, index)
        }
        else
        {
            alert('Could not create project')
        }
    }
    let updateProject = async () => {
        const userInfo = inputVals
        let res = await fetch(`/api/project/${id}`, {
            method: 'POST',
            body: JSON.stringify(inputVals)
        })
        let data = await res.json()
        if(!data.success)
        {
            alert('Could not update create project')
        }
    }
    let deleteProject = async () => {
        let res = await fetch(`/api/project/${id}`, {
            method: 'DELETE'
        })
        let data = await res.json()
        if(data.success)
        {
            props.onDeletion(_id)
        }
        else
        {
            alert('Could not delete project')
        }
    }
    return (
    <div className={styles.container} data-project-id={id}>
        <div>
            <label>Name</label>
            <input name='name' onChange={onChange} value={inputVals.name} />
        </div>
        <div>
            <label>Story</label>
            <input name='story' onChange={onChange} value={inputVals.story} />
        </div>
        <div>
            <label>Demo Url</label>
            <input name='url' onChange={onChange} value={inputVals.url} />
        </div>
        <div>
            <label>Short Description</label>
            <input name='short_description' onChange={onChange} value={inputVals.short_description} />
        </div>
        <div>
            <label>Github Url</label>
            <input name='github_url' onChange={onChange} value={inputVals.github_url} />
        </div>
        <div>
            <label>Image Url</label>
            <input name='image_url' onChange={onChange} value={inputVals.image_url} />
        </div>
        <div>
            <label>Skills</label>
            <input name='skills' onChange={editList} value={inputVals.skills.join(', ')} />
        </div>
        {!isNew && <><button onClick={updateProject}>Update</button>
        <button onClick={deleteProject}>Delete</button></>}
        {isNew && <button onClick={createNew}>Create</button>}
    </div>);
}

export default EditProjectCard
