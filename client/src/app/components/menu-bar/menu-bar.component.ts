import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import IServerAccessService, { User } from 'src/app/services/server-access.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit{
ngOnInit(): void {
  
}
title = 'TestApp';
currentUser: User = new User('eae',false,1,'aa', '');


constructor(userService: IServerAccessService, private router: Router) {
  this.currentUser = userService.currentUser;
}

logout() {
  this.currentUser = new User('', false, 0, '', '');
  this.router.navigateByUrl("/");
  localStorage.clear();
}


}
