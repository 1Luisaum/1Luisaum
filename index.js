import express from "express";
import { getAll, findByKey, create } from "./database/index.js";
import Task from "./models/task.js";
import User from "./models/user.js";
import Client from "./models/client.js";
import cors from 'cors';

const server = express();
const port = 3000;
server.use(express.json());
server.use(cors());

server.get('/tasks', (req, res) => {
    const tasks = getAll('tasks');
    res.json(tasks);
});

server.get('/users', (req, res) => {
    const users = getAll('users');
    res.json(users);
});

server.get('/clients', (req, res) => {
    const clients = getAll('clients');
    res.json(clients);
});

server.get('/first-task', (req, res) => {
    const task = findByKey(0, 'tasks');
    res.json(task);
});

server.get('/first-user', (req, res) => {
    const user = findByKey(0, 'users');
    res.json(user);
});

server.get('/tasks/:key', (req, res) => {
    const { key } = req.params;
    const task = findByKey(key, 'tasks');
    
    if (!task) res.status(404).json({ error: "Task not found" });

    res.json(task);
});

server.post('/tasks', (req, res) => {
    const { id, title } = req.body;
    const task = new Task(id, title);
    create(task, 'tasks');
    res.json(task);
});

server.post('/users', (req, res) => {
    const { id, name, email } = req.body;
    const user = new User(id, name, email);
    create(user, 'users');
    res.status(200).send('User successfully registered');
    console.log('Request data', req.body);
});

server.post('/clients', (req, res) => {
    const { id, name, cnpj } = req.body;
    const client = new Client(id, name, cnpj);
    create(client, 'clients');
    res.status(200).send('Client successfully registered');
    console.log('Request data', req.body);
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
