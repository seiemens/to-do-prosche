import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import IServerAccessService, { IDResponse, LoginResponse, SignupResponse, ToDo, User } from '../server-access.service';
import StateService from '../StateService/state.service';

@Injectable({
  providedIn: 'root'
})

export class HttpInterceptorMain implements HttpInterceptor {

  constructor(private userService: IServerAccessService) {
  }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const modifiedRequest = httpRequest.clone({ 
      headers: httpRequest.headers.set('Authorization', this.userService.currentUser.email),
    });
    console.log('interceptor: ', this.userService.currentUser.email);
    return next.handle(modifiedRequest);
  }
}

@Injectable({
  providedIn: 'root'
})
export class HttpServerAccessService implements IServerAccessService{

  constructor(private http: HttpClient, private route: Router, private state: StateService) { 
    let emailPerhaps = localStorage.getItem('email');
    if(emailPerhaps) {
        this.currentUser.email = emailPerhaps;
    } 

  }

  currentUser: User = new User('', false, 0, '', '');

  createUser(email: string, age: number, name: string, password: string): Observable<SignupResponse> {
      const response = this.http.post<SignupResponse>('http://localhost:5000/signup', {email, age, name, password});
      return response;
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
