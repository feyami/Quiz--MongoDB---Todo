
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import todoRoutes from './routes/todos.js';

const app = express();
dotenv.config();
app.use(cors())
//* Middleware   for cor access error
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/todos', todoRoutes);
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MD_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

// //* Test first connection
app.use('/test', (req, res) => {
    res.send("----RUNING Server-----")
    console.log(req);
}); 