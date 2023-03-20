import express from 'express';
import MessageResponse from '../interfaces/MessageResponse';
import todos from './todos';
import users from './users';
import { State } from './models/state';
import { User } from './models/user';
import { RequestError, ToDoError } from './models/error';
import { uuid } from 'uuidv4';


const router = express.Router();
export const state = State.readFromFile();

function verifyAuthorization(req: any, res: any) {
  try {
    if (!req.headers.authorization) {
      res.status(403).json(new Error('Authorization must not be empty'))
      return false;
    }
    return true;
  } catch (e) {
    const err = new ToDoError('index', 'Could not verify User ' + req.body.userid, 100);
    res.status(500).send(err);
  }

}

router.use((req: any, res: any, next: any) => {

  try {
    console.log('middleware: verify authentication', req.path);

    if (req.method === 'POST' && (req.path === '/token' || req.path === '/signup')) {
      next(); // no authentication required
      return;
    }

    if (!verifyAuthorization(req, res)) {
      res.sendStatus(403);
      return;
    }

  } catch (e) {
    const err = new ToDoError('index', 'Something, Somewhere, went terribly wrong ' + req.path, 100);
    res.status(500).send(err);
  }
  next();
});


router.post('/signup', (req, res) => {
  //const err = new SurveyError('index', 'Couldnt create user' + req.path, 100);
  // res.status(500).send(err);
  //return;

  try {
    console.log('params ', req.body);
    if (!req.body.age || !req.body.name || !req.body.email || !req.body.password) {
      res.status(500).send(RequestError.BodyError)
      return;
    }

    let user = state.findUser(req.body.email);
    console.log('userSearch ', user);
    if (!user) {
      user = new User('', req.body.age, req.body.email, req.body.name, false, req.body.password );
      // if not exists: new user with new id, return 202 + id
      state.users.push(user);
      state.writeToFile();

      res.status(202).send({ id: user.id });
    }
    else{
      res.status(200).send(new ToDoError('index', 'User Exists ' + req.path, 200));
    }


    console.log('email: ', req.body.email);

  } catch {
    const err = new ToDoError('index', 'Couldnt create user' + req.path, 100);
    res.status(500).send(err);
  }
  return;
});

router.post('/token', (req, res) => {
  const user = state.findUser(req.body.email);
  console.log('email of req: ', req.body.email);

  // if exists: return 200 + access_token with email
  if (user) {
    if(user.password === req.body.password) {
      res.status(200).json({ user: user, access_token: uuid() });
    }
  }
  // if not exists: return 403
  else {
    res.status(403).send(new ToDoError('index', 'Couldnt Access user on Request: ' + req.path, 403));
  }

});

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'Hey, you found the api. lets see which endpoints you can find, shall we?',
  });
});

router.use('/todos', todos);
router.use('/users', users);

export default router;
