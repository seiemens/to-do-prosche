import { SpawnSyncOptionsWithBufferEncoding } from 'child_process';
import { uuid } from 'uuidv4';

export class User {
    id: string;
    age: number;
    name: string;
    email: string;
    isAdmin: boolean;
    password: string;

    constructor(id: string, age: number, email: string, name: string, isAdmin: boolean, password: string){
      this.id = !id ? uuid() : id;
      this.email = email;
      this.name = name;
      this.age = age;
      this.isAdmin = isAdmin;
      this.password = password;
    }

  }