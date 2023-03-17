import express from 'express';
import { User } from './models/user';
import { State } from './models/state';
import MessageResponse from '../interfaces/MessageResponse';
import { RequestError } from './models/error';

const router = express.Router();
const state = State.readFromFile();

router.get('/', (req, res) => {
 const users = state.getUsers();
  res.status(200).send(users);

});


router.get<{}, MessageResponse>('/:userid', (req, res) => {

  console.log(req.params);
  res.sendStatus(200);

});


router.post<{}, MessageResponse>('/', (req, res) => {

  try {
    if(!req.body.age || !req.body.name) {
      res.status(500).send(RequestError.BodyError);
    }

    new User('', req.body.age, req.body.email, req.body.name, false);
    state.writeToFile();
    res.sendStatus(201);
  } catch {

    res.sendStatus(500);
  }

});

export default router;
