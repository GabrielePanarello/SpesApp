import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from './http.service';
import { catchError, tap, map, filter } from 'rxjs/operators';
import { Product } from '../beans/product';
import { Recipe } from '../Beans/recipe';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RecipeService {

  constructor(private http: HttpClient, private httpService: HttpService) { }

  getRecipe(): Observable<Recipe[]>{
    return this.http.get<Recipe[]>(this.httpService.getUrl()+"recipes")
    .pipe(
      catchError(this.httpService.handleError('getRecipe',[]))
    );
  }

  getRecipeById(userId: number): Observable<Recipe[]>{
    return this.http.get<Recipe[]>(this.httpService.getUrl()+"recipes",httpOptions)
    .pipe(
      map(recipes => recipes.filter(recipe => recipe.userId == userId))
    );
  }

  addToRecipe(recipe: Recipe): Observable<Recipe>{
    return this.http.post<Recipe>(this.httpService.getUrl()+"recipes",recipe,httpOptions)
    .pipe(
      tap((recipe: Recipe) => console.log("Recipe Added")),
      catchError(this.httpService.handleError<Recipe>('Recipe Add Error'))
    )
  }

  editRecipe(recipe:Recipe):Observable<any>{
    return this.http.put<Recipe>(this.httpService.getUrl()+"recipes/"+recipe.id,recipe,httpOptions)
    .pipe(
      catchError(this.httpService.handleError<any>('Edit Recipe error'))
    );
  }

  deleteRecipe(recipe:Recipe): Observable<Recipe> {
    return this.http.delete<Recipe>(this.httpService.getUrl()+"recipes/"+recipe.id,httpOptions)
    .pipe(
      catchError(this.httpService.handleError<Recipe>('Delete Recipe error'))
    );
  }

}