import React from 'react'
import './List.css'
import Button from '../Button/Button'

interface Tasks{
    text: string
    id: number
  }

interface Props {
    tasks: Tasks[]
    del: (task: Tasks) => void
    edit: (task: Tasks) => void
}

const List = ({tasks, del, edit}: Props) => {

  return (
    <ul>
        {tasks.map(task => (
          <li key={task.id}><h3>{task.text}</h3>
          
          <div className='right'>
            <Button name='Edit' click={() => edit(task)} />
            <Button name='Delete' click={() => {del(task)}} />
          </div>
          
          </li>
        ))}
    </ul>
  )
}

export default List