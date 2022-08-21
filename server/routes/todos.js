import express from 'express';

import { testControllers, getTodos, createTodo, getTodo, updateTodo, deleteTodo, toggleCompletedStatusOfToDo } from '../controllers/todos.js';

const router = express.Router();

//* Test first connection
router.get('/test', (req,res)=>{
    res.send("----RUNING Routes-----")
});
//* Test first connection from controllers
router.get('/testcontrollers', testControllers);

 
router.get('/', getTodos);
router.post('/', createTodo);
router.get('/:id', getTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);
router.patch('/:id/toggleCompletedStatusOfToDo', toggleCompletedStatusOfToDo);

export default router;