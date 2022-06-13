import React, { useState } from 'react'
import FirstPage from '../../components/FirstPage/FirstPage'
import SecondPage from '../../components/SecondPage/SecondPage'
import './home.css'
const Home : React.FC = () => {
  const [showContact, setShowContact] = useState(false)
  return <div className="home-container">
    <FirstPage />
    <SecondPage showContact={showContact} setShowContact={setShowContact} />
  </div>
}

export default Home