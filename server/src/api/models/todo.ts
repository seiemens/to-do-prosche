import { uuid } from 'uuidv4';

export class ToDo {
    id = '';
    owner = '';
    title = '';
    description = '';
    state = 0;

    constructor(id:string, owner:string, title:string, desc:string) {
      if (id == null || id == '') {
        this.id = uuid();
      } else {
        this.id = id;
      }
      
      this.owner = owner;
      this.title = title;
      this.description = desc;
    }
  
    test() {
      return '123';
    }
  }