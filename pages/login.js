import jsCookie from 'js-cookie'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useReducer } from 'react'

import WebsiteBase from '../components/WebsiteBase'
import styles from '../styles/project/pid/index.module.css'

const Login = () => {
      const [inputVals, setInputVals] = useReducer((state, newState) =>({...state, ...newState}), {username: '', password: ''})
      const onChange = event => {
        const {name, value} = event.target
        setInputVals({ [name]: value })
      }
      const router = useRouter()
      const login = async (e) => {
          e.preventDefault()
          const userInfo = inputVals
          let res = await fetch('/api/login', {
              method: 'POST',
              body: JSON.stringify(userInfo)
          })
          let data = await res.json()
          if(data.success)
          {
            jsCookie.set('token', data.token)
            router.push('/edit')
          }
          else
          {
            setInputVals({ username: '' })
            setInputVals({ password: '' })
          }
      }
      return (
      <WebsiteBase>
          <Head><title>Login</title></Head>
          <div className={styles.container}>
            <h1 className={styles.title}>Login</h1>
            <div className={styles.sideBySide}>
              <div>
              <label>Username</label>
              <input name='username' onChange={onChange}></input>
              </div>
              <div>
              <label>password</label>
              <input name='password' onChange={onChange}></input>
              </div>
            </div>
            <button onClick={login}>Login</button>
            {JSON.stringify(inputVals)}
          </div>
      </WebsiteBase>
    );
}
  
export default Login