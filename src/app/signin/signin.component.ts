import { Component, OnInit } from '@angular/core';
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

  constructor(private http: HttpClient){}

  onSubmit(email: string, password: string){
    const authUser: SignInModel = {email: email, password: password}
    console.log(authUser);

    this.http.post("http://localhost:3000/signin",authUser).subscribe(res => {
      console.log(res)
    })
  }
}
