import { Component } from '@angular/core';
import { Router } from '@angular/router';
import IServerAccessService from 'src/app/services/server-access.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  email = '';
  password = '';


  constructor(private userService: IServerAccessService, private router: Router) { 
;
   }

  ngOnInit(): void {
    let userPerhaps = localStorage.getItem('user');
    if(userPerhaps) {
      this.userService.currentUser = JSON.parse(userPerhaps);
    }
  }

  public onSubmit() {
    console.log('email: ' , this.email)
    this.userService.login(this.email, this.password).subscribe({
      next: response => {
        localStorage.setItem('user', JSON.stringify(response.user));
        console.log('success: OnSubmit in Client: ', response.access_token); 
        this.router.navigateByUrl("/view-survey"); 
      },
      error: err => console.error('error', err)
    });
    
  }

}
