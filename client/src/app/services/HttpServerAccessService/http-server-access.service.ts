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
      const response = this.http.post<LoginResponse>('http://localhost:5000/token', { email, password });
      response.subscribe({
        next: response => {
          console.log('login successful', response);
          this.currentUser = response.user;
          console.log('LoginCall: ', this.currentUser);
        },
        error: err => console.error('error', err),
      });
  
      return response;
    }
  

    newToDo(title: string, description: string): Observable<IDResponse> {
      let owner: string = this.currentUser.email;
      const response = this.http.post<IDResponse>('http://localhost:5000/todos',{ owner, title, description });
      return response;
    }
  

    getToDos(): Observable<Array<ToDo>> {
      const data = this.http.get<Array<ToDo>>('http://localhost:5000/todos',{});
      return data;
    }
  

    updateToDo( title: string, description: string, id: string): Observable<ToDo> {
      let params: URLSearchParams = new URLSearchParams();
      params.set("surveyid", id);
      const data = this.http.patch<ToDo>('http://localhost:5000/todos/' + id, { title, description });
      return data;
    }
  

    getToDoById(id: string): Observable<ToDo> {
      const data = this.http.get<ToDo>('http://localhost:5000/surveys/' + id,{});
      return data;
    }
  
    getUsers(): Observable<Array<User>> {

      const data = this.http.get<Array<User>>('http://localhost:5000/users', {});
      return data;
    }
  

    getUserById(id: string): Observable<User> {
      const data = this.http.get<User>('http://localhost:5000/users/' + id, {})
      return data;
    }

}
