import express from 'express';
import { State } from './models/state';
import { ToDo } from './models/todo';

const router = express.Router();
const state = State.readFromFile();

router.get('/', (req, res) => {
    if(req.body.useremail) {
        let todos: Array<ToDo> = [];
        state.todos.forEach(element => {
            if(element.owner == req.body.useremail) {
                todos.push(element);
            }
        });
        res.status(200).send(todos);
    } else {
        res.status(404).send('no');
    }
});

router.post('/', (req, res) => {

});

router.patch('/', (req, res) => {

});

router.get('/:todoId', (req, res) => {

});

router.delete('/:todoId', (req, res) => {

});

export default router;