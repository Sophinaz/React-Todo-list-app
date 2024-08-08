import React, { useState } from 'react'
import './List.css'
import Button from '../Button/Button'
import Edittask from '../Edittask/Edittask'

interface Tasks{
    text: string
    id: number
    isEditing: boolean
  }

interface Props {
    tasks: Tasks[]
    del: (task: Tasks) => void
    toggle: (task: Tasks) => void
    edit: (task: Tasks) => void
}

const List = ({tasks, del, toggle, edit}: Props) => {
  const [val, setVal] = useState("")

  return (
    <ul>
        {tasks.map(task => (
          task.isEditing ? (
            <div className='edit'>
            <input value={val} onChange={e => setVal(e.target.value)}/>
            <button onClick={() => {
              task.text = val
              edit(task)
            }}>Edit</button></div>
          ) : (
          <li key={task.id}><h3>{task.text}</h3>
          
          <div className='right'>
            <Button name='Edit' click={() => toggle(task)} />
            <Button name='Delete' click={() => {del(task)}} />
          </div>
          
          </li>
          )
        ))}
    </ul>
  )
}

export default List