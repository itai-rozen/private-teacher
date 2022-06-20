import React, { useState } from 'react'
import Button from '../Button/Button'
import { addStudent } from '../../firestore'
import './contactModal.css'
interface ContactProps {
  setShowContact : Function
}
const ContactModal: React.FC<ContactProps> = ({setShowContact}) => {
  const apiUrl = 'https://private-teacher-f6eaa-default-rtdb.europe-west1.firebasedatabase.app/'
  const [details, setDetails] = useState({fullName: '', phone: '', notes: ''})
  const updateDetails = (e:React.SyntheticEvent):void => {
    e.preventDefault()
    const target = e.target as HTMLInputElement
    setDetails({...details, [target.id] : target.value+''})
  }

  const submitForm:React.FormEventHandler = async (e:React.SyntheticEvent):Promise<any> => {
    e.preventDefault()
    addStudent(details)
  }

  return <div className="modal-container">
    <div className="modal">
      <Button title="X" onClickFn={() => setShowContact(false)} />
      <form onChange={updateDetails} onSubmit={submitForm}>
        <label htmlFor="fullName">שם מלא</label>
        <input id="fullName" placeholder='פלוני אלמוני' type="text" name="fullName" defaultValue={details.fullName} />
        <label htmlFor="phone">טלפון</label>
        <input type="number" name="phone" id="phone" placeholder='05X-XXXXXXX' defaultValue={details.phone} />
        <textarea name="notes" id="notes" cols={30} rows={10} placeholder="הערות" defaultValue={details.notes}></textarea>
        <input type="submit" value="ok" />
      </form>
    </div>
  </div>
}

export default ContactModal