import { ToDo } from './todo';
import { User } from './user';
import * as fs from 'fs';

//the state class is a buffer, that loads, saves and prepares data to be sent to frontend
export class State {
    todos:Array<ToDo> = [];
    users:Array<User> = [];
    constructor(){
      this.todos = new Array<ToDo>();
      this.users = new Array<User>();
    }
    //saves all the Data to File
    writeToFile() {
      const serializedState = JSON.stringify(this);
      fs.writeFileSync('src/data.json', serializedState, 'utf-8');
    }
    //gets all the Data form the DB File and buts them in the State class object.
    static readFromFile(): State {
      let data:Buffer;
      const state = new State();
      try {
         data = fs.readFileSync('src/data.json');
      } catch {
        fs.writeFileSync('src/data.json', '{"todos":[], "users":[]}');
        data = fs.readFileSync('src/data.json');
      }
      const dataInString = data.toString();
      const stateFromFile = JSON.parse(dataInString);
  
      // get surveys and push them to Array
      stateFromFile.todos.forEach((element:ToDo) => {
        state.todos.push(new ToDo(element.id, element.owner, element.title, element.description));
      });

      // get users and push them to Array
      stateFromFile.users.forEach((element:User) => {
        state.users.push(new User(element.id, element.age, element.email, element.name, element.isAdmin, element.password));
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