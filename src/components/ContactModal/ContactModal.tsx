import React from 'react'
import Button from '../Button/Button'
import './contactModal.css'
interface ContactProps {
  setShowContact : Function
}
const ContactModal: React.FC<ContactProps> = ({setShowContact}) => {
  return <div className="modal-container">
    <div className="modal">
      <Button title="X" onClickFn={() => setShowContact(false)} />
      <form></form>
    </div>
  </div>
}

export default ContactModal