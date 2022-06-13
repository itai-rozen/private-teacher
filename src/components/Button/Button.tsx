import React from 'react'
import './button.css'
interface buttonProps  {
  title: string,
  onClickFn: (event: React.MouseEvent<HTMLButtonElement>) => void
}
const Button: React.FC<buttonProps> = ({title, onClickFn}) => {
  return <button className='btn' onClick={onClickFn}>{title}</button>
}

export default Button