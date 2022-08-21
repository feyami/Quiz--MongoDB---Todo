import React from 'react'
import ToDoItem from './ToDoItem'
import { useEffect, useState } from "react";
import {ToDoApi} from "../api/index"

const ToDoList = ({formInputRef}) => {
  const [toDos, setToDos] = useState(false)

  // useEffect(() => {
  //   fetch('http://localhost:5000/todos')
  //     .then(res => {
  //       if (res.status === 200 && res.ok) {
  //         return res.json()
  //       }
  //     })
  //     .then(data => setToDos(data))
  //     .catch(err => console.log(err))


  // }, []);

  useEffect(() => {
     ToDoApi.getToDos().then(res =>setToDos(res))
  });

  return (
   <div className="toDo-container">
    {toDos&&toDos.map((toDo)=>(//*I got error without "toDos&&".
      <ToDoItem id={toDo._id} toDo={toDo}  key={toDo._id} formInputRef={formInputRef} />
    ))}
   </div>
  )
}

export default ToDoList