import { Observable, of } from "rxjs";

export default class IServerAccessService {
    currentUser: User = new User('', false, 0, '', '');

    createUser(email: string, age: number, name: string, password: string): Observable<SignupResponse> {
        return of();
      };
  
      login(email: string, password: string): Observable<LoginResponse> {
        return of();
      };
  
      newToDo(title: string, description: string): Observable<IDResponse> {
        return of();
      };
  
      getToDos(): Observable<Array<ToDo>> {
        return of();
      };
  
      updateToDo( title: string, description: string, id: string): Observable<ToDo> {
        return of();
      };
  
  
      getToDoById(id: string): Observable<ToDo> {
        return of();
      };
  
      getUsers(): Observable<Array<User>> {
        return of([{email:'',age:0,name:'',isAdmin:false,password: ''}]);
      };
  
      getUserById(): Observable<User> {
        return of(new User('', false, 0, '', ''));
      }

}

export interface SignupResponse {
    id: string;
  }
  
  export interface IDResponse {
    id: string;
  }
  
  export interface LoginResponse {
    user: User;
    access_token: string;
  }
  
  export interface ToDo {
    id: string;
    title: string;
    description: string;
    owner: string;
    state: number;
  }

  export class User {
    email: string;
    isAdmin: boolean;
    age: number;
    name: string;
    password: string;
    constructor(email: string, isAdmin: boolean, age: number, name: string, password: string) {
        this.email = email;
        this.isAdmin = isAdmin;
        this.age = age;
        this.name = name;
        this.password = password;
    }
}

