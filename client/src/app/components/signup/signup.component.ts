import { Component } from '@angular/core';
import { Router } from '@angular/router';
import IServerAccessService from 'src/app/services/server-access.service';
import StateService from 'src/app/services/StateService/state.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  email = '';
  age = 0;
  name = '';
  password = '';

  constructor(private userService: IServerAccessService, private router: Router, private state: StateService) { 
  }

  ngOnInit(): void {
  }

  /**
   * onSubmit
   */
   public onSubmit() {


    // best practice
    this.userService.createUser(this.email, this.age, this.name, this.password).subscribe({
      next: response => { 
        console.log('success: post token response', response.id); 
        this.router.navigateByUrl("/view-survey"); 
        this.state.UpdateUser(response.id); 
      },
      error: err => console.log(err),
    });
    
  }


}
