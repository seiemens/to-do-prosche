import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import IServerAccessService from 'src/app/services/server-access.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent {

  error: string = '';
  title: string = '';
  description: string = '';


constructor(private ServerAccess: IServerAccessService, private Router: Router) { }

  public onSubmit() {
        this.ServerAccess.newToDo(this.title, this.description).subscribe({
          next: response => { 
            console.log('succ cess');
            this.Router.navigateByUrl('/view-todo');
          },
          error: err => console.log(err),
        });
      

    }
}
