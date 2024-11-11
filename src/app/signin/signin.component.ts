import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  loginForm: FormGroup<{ username: FormControl<string | null>; password: FormControl<string | null>; }> | undefined;

  

  // ngOnInit(): void {
  //   this.loginForm = new FormGroup({
  //     'username': new FormControl('', [Validators.required]),
  //     'password': new FormControl('', [Validators.required])
  //   })
  // }

  onSubmit(){
    console.log(this.loginForm);
  }
}
