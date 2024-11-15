import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignInModel } from '../shared/signInModel';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  private token: string;
  constructor(private http: HttpClient){}  


  getToken(){
    return this.token;
  }

 

  onSubmit(email: string, password: string){
    const authUser: SignInModel = {email: email, password: password}

    this.http.post<{token: string}>("http://localhost:3000/signin",authUser).subscribe(res => {
      this.token = res.token
    })
  }
}
