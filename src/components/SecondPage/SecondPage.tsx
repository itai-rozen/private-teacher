import React, { useState } from 'react'
import Button from '../Button/Button';
import ContactModal from '../ContactModal/ContactModal';
import './secondPage.css'
interface SecondPageProps {
  showContact: Boolean,
  setShowContact: Function
}


const SecondPage: React.FC<SecondPageProps> = ({ showContact, setShowContact }) => {
  console.log('re-rendered')
  return <div className="second-page">
    <div className="page">
      <div className="home-content">
        <div className="content-text">
          <h1 className="home-header">פשוט לדבר מתמטיקה</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ut cupiditate quasi velit minima omnis.</p>
        </div>
      </div>
      <div className="study-img">
        <img src="study.png" alt="" />
      </div>
    </div>
    <div className="btn-container">
      <Button title="בואו נדבר" onClickFn={() => setShowContact(true)} />
    </div>
    {showContact && <ContactModal setShowContact={setShowContact} />}
  </div>
}

export default SecondPage;