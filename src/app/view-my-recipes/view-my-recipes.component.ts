import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-view-my-recipes',
  standalone: true,
  imports: [NgFor],
  templateUrl: './view-my-recipes.component.html',
  styleUrl: './view-my-recipes.component.css'
})
export class ViewMyRecipesComponent {
  private apiUrl = 'http://localhost:3000/recipeView';
  recipes: any[] = [];
  constructor(private http: HttpClient) {}

  getRecipes(): Observable<any> {    
    return this.http.get<any>(this.apiUrl);
  }

  ngOnInit() {
    this.getRecipes().subscribe((data) => {
      console.log(data)
      this.recipes = data;
    });
  }
}