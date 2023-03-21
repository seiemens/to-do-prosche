import express from 'express';
import { State } from './models/state';
import { ToDo } from './models/todo';

const router = express.Router();
const state = State.readFromFile();

router.get('/', (req, res) => {
    try {

        let todos: Array<ToDo> = [];
        state.todos.forEach(element => {
            if(element.owner == req.headers.authorization) {
                todos.push(element);
            }
        });
        res.status(200).send(todos);
    } catch {

    }
    res.status(404).send('no');
      
    
});

router.post('/', (req, res) => {
    if(!req.body.title || !req.body.description || !req.headers.authorization) {
        res.status(404).send('request denied');
    } else {
        const newToDo = new ToDo('', req.headers.authorization, req.body.title, req.body.description);
        state.todos.push(newToDo);
        state.writeToFile();
    }
});

router.patch('/', (req, res) => {
    if(!req.body.id) {
        res.status(404).send('no auth detected, request rejected');
    } else {
        let toDoToEdit = state.todos[req.body.id];
        if(req.body.description) {
            toDoToEdit.description = req.body.description;
        }
        if(req.body.title) {
            toDoToEdit.title = req.body.title;
        }
        if(req.body.state) {
            toDoToEdit.state = req.body.state;
        }
        state.todos[req.body.id] = toDoToEdit;
        res.status(200).send('done');
    }

});

router.get('/:todoId', (req, res) => {
    console.log(req.params)
    if(req.params.todoId) {
        let todoPerhaps;
        state.todos.find(elem => {
            if(elem.id == req.params.todoId) {
                todoPerhaps = elem;
            }
        });
        if(todoPerhaps) {
            res.status(200).send(todoPerhaps);
        } else {
            res.status(403).send();
        }
    }
});

router.delete('/:todoId', (req, res) => {
    if(req.params.todoId) {
        let todoPerhaps;
        state.todos.find(elem => {
            if(elem.id == req.params.todoId) {
                todoPerhaps = elem;
            }
        });
        if(todoPerhaps) {
            const index = state.todos.indexOf(todoPerhaps)
            if(index > -1) {
                state.todos.splice(index, 1);
            }
            res.status(200).send();
        }
        res.status(403).send();
    }
    res.status(403).send();
});

export default router;