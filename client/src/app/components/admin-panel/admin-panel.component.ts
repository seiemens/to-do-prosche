import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import IServerAccessService, { User } from 'src/app/services/server-access.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  idOfUser: any;
  user: User = new User("", false,0,'','');
  dataSource: any[];
  displayedColumns: Array<String> = [];


    

  constructor(private serverAccessService: IServerAccessService, private router: Router) { 
    this.dataSource = [];
    this.displayedColumns = ["name", "age", "email", "password", "edit", "todos"];
  }

  ngOnInit(): void {
    this.serverAccessService.getUsers().subscribe({
      next: response => {
        this.dataSource = response;
        console.log(response)
      },
      error: err => {console.error('error', err);}
    });

  }

  editUser(element: any): void {
    let email = element.email;
    this.router.navigate(["/edit-user/" + email]);
  }

  editTodos(element: any): void {
    let email = element.email;
    this.router.navigate(['/view-todos/' + email]);
  }

}

