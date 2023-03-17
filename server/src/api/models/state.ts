import { number } from 'zod';
import { ToDo } from './todo';
import { User } from './user';
import * as fs from 'fs';


export class State {
    todos:Array<ToDo> = [];
    users:Array<User> = [];
    constructor(){
      this.todos = new Array<ToDo>();
      this.users = new Array<User>();
    }
    
    writeToFile() {
      const serializedState = JSON.stringify(this);
      fs.writeFileSync('src/data.json', serializedState, 'utf-8');
    }
    
    static readFromFile(): State {
      const state = new State();

      const data:Buffer = fs.readFileSync('src/data.json');
      const dataInString = data.toString();
      const stateFromFile = JSON.parse(dataInString);
  
      // get surveys
      stateFromFile.todos.forEach((element:ToDo) => {
        state.todos.push(new ToDo(element.id, element.owner, element.title, element.description));
      });

      // get users
      stateFromFile.users.forEach((element:User) => {
        state.users.push(new User(element.id, element.age, element.email, element.name, element.isAdmin));
      });
  
      return state;
    }
    getUsers(): Array<User> {
      return this.users;
    }


    findUser(email: string): User | undefined {
      return this.users.find(user => user.email === email);
    }
  }