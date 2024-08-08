import React, { useState } from 'react'
import './Edittask.css'

interface Tasks{
    text: string
    id: number
    isEditing: boolean
  }

interface Props {
    ed: (task:Tasks) => void
}

const Edittask = ({ed}: Props) => {
    // console.log(ed)
    const [val, setVal] = useState("")

    const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log(e)
        e.preventDefault()

    }

  return (
    <form onSubmit={handlesubmit}>
        <input type="text" placeholder='edit task' onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
            setVal(e.target.value)
            }} />
        <button>Edit</button>
    </form>
  )
}

export default Edittask