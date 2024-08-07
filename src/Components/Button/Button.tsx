import React from 'react'
import "./Button.css"


interface Props{
    name: string
    click: () => void
}

const Button = ({name, click}: Props) => {
  return (
    <button onClick={click}>{name}</button>
  )
}

export default Button