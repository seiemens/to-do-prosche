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

  error: string = '';
  email: string = '';
  age: number = 0;
  name: string = '';
  password: string = '';

  constructor(private userService: IServerAccessService, private router: Router, private state: StateService) { 
  }

  ngOnInit(): void {
  }



   public onSubmit() {
    if(typeof this.age == "number" && this.password.length > 7) {

      
      this.userService.createUser(this.email, this.age, this.name, this.password).subscribe({
        next: response => { 
          console.log('success: post token response', response.id); 
          this.router.navigateByUrl("/view-todo"); 
          this.state.UpdateUser(response.id); 
        },
        error: err => console.log(err),
      });
      
    } else {
      this.error = "Inputs wrong. Please validate"
    }
  }


}
