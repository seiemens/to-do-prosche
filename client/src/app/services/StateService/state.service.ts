import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class StateService {

  LoggedInUser: string = "";

  constructor() { }

  UpdateUser(newUser: string) {
    this.LoggedInUser = newUser;
  }

  GetUser() {
    return this.LoggedInUser;
  }
}

