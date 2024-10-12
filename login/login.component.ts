import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    username: '',
    password: ''
  };

  errorMessage: string = '';


  onSubmit() {
    // this.authService.login(this.loginData).subscribe(
    //   (response) => {
    //     // Handle successful login (e.g., navigate to dashboard)
    //     console.log('Login successful:', response);
    //   },
    //   (error) => {
    //     // Handle login error
    //     this.errorMessage = 'Invalid username or password';
    //   }
    // );
  }
}
