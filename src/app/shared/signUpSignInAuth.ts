import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SignUpModel } from "./signUpModel";

// @Injectable({providedIn:"root"})
export class AuthService {
    constructor(private http: HttpClient){}

    signupUser(name: string, email: string, password: string) {

        // const authData: SignUpModel = {name: name, email: email, password: password};

        // this.http.post('http://localhost:27017/sign-up/', authData).subscribe(res => {
        //     console.log(res);
        // })
    }
}