import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  private authenticatedEmail: string;
  private authenticatedId: Object;
  constructor(private http: HttpClient){}  


  getToken(){
    return this.token;
  }

  getAuthenticatedEmail() {
    return this.authenticatedEmail
  }

  getAuthenticatedId() {
    return this.authenticatedId
  }

 

  onSubmit(email: string, password: string){
    const authUser: SignInModel = {email: email, password: password}

    this.http.post<{userId: Object,email: string, token: string}>("http://localhost:3000/signin",authUser).subscribe(res => {
      this.authenticatedId = res.userId
      this.authenticatedEmail = res.email
      this.token = res.token
      const httpHeaders: HttpHeaders = new HttpHeaders({
        Authorization: 'Bearer JWT-token'
    });
      location.assign("authenticated/home")
    })
  }
}
