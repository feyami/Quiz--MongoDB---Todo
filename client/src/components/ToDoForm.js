import React from 'react'
import { useState } from 'react'
import { ToDoApi } from "../api/index"

const ToDoForm = ({ formInputRef }) => {
  const [toDoValue, setToDoValue] = useState("")

  const handleSubmit = (e) => {
    if (toDoValue === "") {
      alert("Type something!")
    }
    else {
      ToDoApi.newToDo({ 'definition': toDoValue, 'tags': ["personal"] })
      setToDoValue('')
      formInputRef.current.select();
    }
  }
  return (
    <form id='toDo-form'>
      <input ref={formInputRef} type="text" id='form-input' autoFocus placeholder='Type your ToDo' onChange={(e) => setToDoValue(e.target.value)} value={toDoValue} />
      <button
        onClick={(e) => {
          e.preventDefault()
          handleSubmit()
        }}>
        <i className='fas fa-plus'></i></button>
    </form>
  )
}

export default ToDoForm