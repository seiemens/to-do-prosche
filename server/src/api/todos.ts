import express from 'express';
import { State } from './models/state';
import { ToDo } from './models/todo';

const router = express.Router();
const state = State.readFromFile();

router.get('/', (req, res) => {

});

export default router;