import mongoose from 'mongoose';

const todoSchema = mongoose.Schema({
    definition: String,
    tags: [String],
    completed: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var Todo = mongoose.model('Todo', todoSchema);

export default Todo;