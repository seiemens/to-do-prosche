import { Component } from '@angular/core';
import { Router } from '@angular/router';
import IServerAccessService, { ToDo } from 'src/app/services/server-access.service';



const COLUMNS_SCHEMA = [
  {
      key: "title",
      type: "text",
      label: "Title"
  },
  {
      key: "description",
      type: "text",
      label: "Occupation"
  },
  {
      key: "state",
      type: "text",
      label: "State"
  },
  {
      key: "delete",
      type: "delete",
      label: "Delete"
  }
]




@Component({
  selector: 'app-view-todos',
  templateUrl: './view-todos.component.html',
  styleUrls: ['./view-todos.component.scss']
})
export class ViewTodosComponent {
  dataSource: Array<ToDo> = [];
  displayedColumns: any = COLUMNS_SCHEMA.map((col) => col.key);


  constructor(private ServerAccess: IServerAccessService, private router: Router){
    this.dataSource = [];
  }


  ngOnInit() {
    this.loadTable();
  }

  async loadTable() {


    await this.ServerAccess.getToDos().subscribe({
      next: response => {
        let todosOfUser: Array<ToDo> = [];
        response.forEach(elem => {
          if(elem.owner == this.ServerAccess.currentUser.email) {
            todosOfUser.push(elem);
          }
        });
        this.dataSource = todosOfUser;
      },
      error: err => {console.error('error', err);}
    });
  }

  deleteToDo(element: ToDo) {
    this.ServerAccess.deleteToDo(element.id).subscribe({
      next: response => {
        this.loadTable();
      },
      error: err => {console.error('error: ', err);}
    });
  }

}
