import express from 'express';
import { User } from './models/user';
import { State } from './models/state';
import MessageResponse, { SingleUserResponse } from '../interfaces/MessageResponse';
import { RequestError } from './models/error';

const router = express.Router();
const state = State.readFromFile();

router.get('/', (req, res) => {
 const users = state.getUsers();
  res.status(200).send(users);

});


router.get<{}, SingleUserResponse>('/:userid', (req, res) => {

  console.log(req.params);
  let userPerhaps = state.findUser(req.body.email);
  if(userPerhaps) {
    
    res.status(200).send({user: userPerhaps});
  }

});


router.post<{}, MessageResponse>('/', (req, res) => {

  try {
    if(!req.body.age || !req.body.name) {
      res.status(500).send(RequestError.BodyError);
    }

    new User('', req.body.age, req.body.email, req.body.name, false, req.body.password);
    state.writeToFile();
    res.sendStatus(201);
  } catch {

    res.sendStatus(500);
  }

});


export default router;
