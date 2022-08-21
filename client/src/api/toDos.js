import{post,get,patch,remove} from "./request"

export const getToDos=()=>get('/todos') ;
export const getToDoDetail=id=>get(`/todos/${id}`) ;
export const newToDo=data=>post('/todos',data) ;
export const toggleCompletedStatus=(id,data)=>patch(`/todos/${id}/toggleCompletedStatusOfToDo`,data) ;
export const updateToDo=(id,data)=>patch(`/todos/${id}`,data) ;
export const deleteToDo=(id)=>remove(`/todos/${id}`) ;