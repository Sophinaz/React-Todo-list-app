import React, { useState } from 'react'
import Button from '../Button/Button'
import "./Addtask.css"

interface Tasks{
  text: string
  id: number
}

interface Props{
  onAdd: (taskName: string) => void
}

const Addtask = ({onAdd}: Props) => {
  const [taskName, setTaskname] = useState("")

  return (
    <div className='add'>
        <input type="text" value={taskName} placeholder='Add task' onChange={(e) => {
          setTaskname(e.target.value)
          }}/>
        <Button click={() => {
          onAdd(taskName)
          setTaskname("")
        }
          } name='Add Task'/>
    </div>
  )
}

export default Addtask