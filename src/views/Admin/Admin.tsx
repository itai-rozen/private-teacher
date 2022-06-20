import React, { useState } from 'react'
import './admin.css'
import { loginUser } from '../../firestore'

const Admin:React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  return (loggedIn) ? <>login page</> : <>studen list page</>
}

export default Admin
