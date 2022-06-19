import React, { useState,useEffect, useRef }  from 'react'
import Button from '../Button/Button'
import './thirdPage.css'
interface thirdPageProps {
  showContact: Boolean,
  setShowContact: Function
}

interface thirdPageStates {
  words: String[],
  currWordIdx : Number
}



const ThirdPage:React.FC<thirdPageProps> = ({showContact, setShowContact}) => {
  const [currWordIdx, setCurrWordIdx] = useState(0)
  const words = ['לדבר','לצחוק','לראות','לכתוב','לשיר','להפליץ']
  const spanEl = useRef<HTMLSpanElement>(null)
  const changeWord:Function = ():void => {
    setCurrWordIdx((currWordIdx === words.length-1) ? 0 : currWordIdx+1)
  }
  
  
  
  useEffect(() => {
    // setTimeout(changeWord, 5000)
  },[currWordIdx])
  return <div className="third-page">
    <div className="btn-and-text">
      <Button title="בואו נדבר" onClickFn={() => setShowContact(true)} />
      <h2 className='text-header'>מתחילים <span className="changing-word" >{words[currWordIdx]}</span> מתמטיקה</h2>
    </div>
  </div>
}

export default ThirdPage