import express from 'express';
import mongoose from 'mongoose';
import Todo from '../models/todo.js';

const router = express.Router();

export const testControllers = async (req, res) => {
    res.send("----RUNING Controllers-----")
}

export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await Todo.findById(id);
        res.status(200).json(todo);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createTodo = async (req, res) => {
    const { definition, tags } = req.body;
    const newTodo = new Todo({ definition, tags })
    try {
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateTodo = async (req, res) => {
    const { id } = req.params;
    const { definition, tags } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No todo with id: ${id}`);
    const updatedTodo = { definition, tags, _id: id };
    await Todo.findByIdAndUpdate(id, updatedTodo, { new: true });
    res.json(updatedTodo);
}

export const deleteTodo = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No todo with id: ${id}`);
    await Todo.findByIdAndRemove(id);
    res.json({ message: "Todo deleted successfully." });
}

export const toggleCompletedStatusOfToDo = async (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No todo with id: ${id}`);
    const updatedTodo = await Todo.findByIdAndUpdate(id, { completed: !completed }, { new: true });
    res.json(updatedTodo);
}

export default router;