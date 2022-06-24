const express = require('express');
const todoRoutes = require('./routes/getTodosRoute');
const db = require('./db');
const app = express();
const port = 3002;

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/api/todos', todoRoutes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
