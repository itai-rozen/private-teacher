import React, {useState} from 'react'
import { loginUser } from '../../firestore'
import './login.css'

const Login:React.FC<{setLoggedIn: Function}> = ({setLoggedIn}) => {
  const [password, setPassword] = useState('')
  const [error,setError] = useState('')
  const submit:React.FormEventHandler = async (e:React.SyntheticEvent):Promise<any> => {
    e.preventDefault()
    try {
      const res = await loginUser(password)
      if (res.success) setLoggedIn(true)
    }catch(err){
      setError((err as Error).message)
    }
  }
  return <div className="login-container">
    <form onSubmit={submit}>
      <label htmlFor="password">סיסמה</label>
      <input type="password" value={password} id="password" />
      <input type="submit" value="ok" />
    </form>
    {error && <p>{error}</p>}
  </div>
}

export default Login