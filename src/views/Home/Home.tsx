import React, { useState } from 'react'
import FirstPage from '../../components/FirstPage/FirstPage'
import SecondPage from '../../components/SecondPage/SecondPage'
import './home.css'
const Home : React.FC = () => {
  const [showContact, setShowContact] = useState(false)
  return <>
    <FirstPage />
    <SecondPage showContact={showContact} setShowContact={setShowContact} />
  </>
}

export default Home