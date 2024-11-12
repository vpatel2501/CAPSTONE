import { Component } from '@angular/core';
// import { AuthService } from '../shared/authService';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  // constructor(private authService: AuthService){}

  onSubmit(name: string, email: string, password: string){
    // this.authService.signupUser(name, email, password)
    console.log(email) 
  }
}
