import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import IServerAccessService, { IDResponse, LoginResponse, SignupResponse, ToDo, User } from '../server-access.service';

@Injectable({
  providedIn: 'root'
})
export class MockServerAccessService implements IServerAccessService{

  constructor() { }

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
