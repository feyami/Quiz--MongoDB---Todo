import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { ToDoApi } from "../api/index"

const ToDoItem = ({ toDo, id, formInputRef }) => {
  const [editMode, setEditMode] = useState(false);
  const [toDoValue, setToDoValue] = useState(toDo.definition)

  const inputRef = useRef();
  const divRef = useRef();


  useEffect(() => {

    if (editMode) {
      inputRef.current.select();
      divRef.current.style.background = 'rgb(178, 200, 243)'
      inputRef.current.style.background = 'rgb(178, 200, 243)'
    } else {
      
      divRef.current.style.background = 'white'
      inputRef.current.style.background = 'white'

    }


  }, [editMode]);

  function toggleEditMode() {
    setEditMode(current => !current);
    !editMode &&formInputRef.current.select();
  };

  function cancelEditMode() {
    editMode && toggleEditMode();
    
    setToDoValue(toDo.definition);
  }


  function editToDo() {
    if (toDoValue === "") {
      alert("Type something!")
    }
    else {
      ToDoApi.updateToDo(id, { 'definition': toDoValue })
      cancelEditMode()
      formInputRef.current.select();
    }
  };

  const deleteToDo = (id) => {
    ToDoApi.deleteToDo(id);
    formInputRef.current.select();
  };

  const todoCompleted = () => {
    ToDoApi.toggleCompletedStatus(id, { 'completed': toDo.completed })
    formInputRef.current.select();
  };

  const handleKeyDownAndEditToDo = (e) => {


    if (e.key === 'Enter') {

      if (toDoValue === "") {
        alert("Type something!")
      }
      else {
        ToDoApi.updateToDo(id, { 'definition': toDoValue })
        cancelEditMode()
         setEditMode(false)
      }

    }
    else if (e.key === 'Escape') {
      cancelEditMode()

    }
  };


  return (
    <div ref={divRef} className="toDo-item" id={toDo.completed ? 'completed' : null} >


      <input ref={inputRef} className={toDo.completed ? 'completed' : null} id='editInput' type="text" readOnly={editMode ? "" : "disabled"} value={editMode ? toDoValue : toDo.definition} onChange={(e) => setToDoValue(e.target.value)} onKeyDown={handleKeyDownAndEditToDo} onBlur={cancelEditMode} />

      <div className={editMode ? 'invisible' : 'visible'} >

        <i className="fa-solid fa-clipboard-check" onClick={todoCompleted}></i>
        <i className="fa-solid fa-edit icons" onClick={toggleEditMode} ></i>
        <i className="fa-solid fa-trash-can icons" onClick={() => { deleteToDo(id) }}></i>
      </div>
      {/* <div className={editMode ? 'visible' : 'invisible'}>

        <i className="fa-solid fa-circle-check" onClick={editToDo}></i>
        <i className="fa-solid fa-circle-xmark" onClick={cancelEditMode}></i>
      </div> */}
    </div>
  )
}

export default ToDoItem