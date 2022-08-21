import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import { useRef } from 'react'

function App() {
 const formInputRef = useRef(); 
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
  return (
    <>
      <ToDoForm formInputRef={formInputRef}/>
      <ToDoList formInputRef={formInputRef}/>
    </>
  )
}
export default App;
