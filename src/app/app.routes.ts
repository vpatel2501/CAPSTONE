import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClient } from '@angular/common/http';
import { RecipesComponent } from './recipes/recipes.component';


export const routes: Routes = [
    {path:"", component: HomeComponent},
    {path:"", component: HttpClient},
    {path:"signin", component: SigninComponent},
    {path:"signup", component: SignupComponent},
    {path:"recipes", component: RecipesComponent}
];