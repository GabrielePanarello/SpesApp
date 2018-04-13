import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../Beans/recipe';
import { Product } from '../../beans/product';
import { ComunicatorService } from '../../services/comunicator.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[]= [];
  products: Product[] = [];
  newRecipeName = "";
  newRecipeDesc = "";
  newRecipe: Recipe;
  inputId: number;
  loaderCheck = true;
  
  constructor(private comunicatorService:ComunicatorService, private recipeService: RecipeService,private activatedRoute: ActivatedRoute,private router: Router) {

    this.activatedRoute.params.subscribe(params => {
      if (params['id'] != null && params['id'] != "") {
        this.inputId = params['id'];
      }
    });

    this.comunicatorService.mySubjectId$.subscribe ((newValue: number) => {
      console.log(newValue);
      this.inputId = newValue;
    });
  }


  ngOnInit(){
    this.getUserRecipes();
  }

  getUserRecipes(){
    this.recipeService.getRecipeById(this.inputId)
    .subscribe(
      recipeResponse =>
      { this.loaderCheck = false;
        this.recipes = recipeResponse;}
    );
  }

  addRecipe(name: string, description:string){
    this.newRecipe = new Recipe(5,name,"-",this.products,this.inputId,description);
    this.recipeService.addToRecipe(this.newRecipe).subscribe(
      recipeResponse => this.recipes.push(recipeResponse)
    );
  }

  editRecipe(recipe:Recipe){
    this.recipeService.editRecipe(recipe).subscribe(
      () => this.recipes[this.recipes.findIndex((obj => obj.id == recipe.id))] = recipe
    );
    this.closeEdit(recipe.id);
  }

  deleteRecipe(recipe: Recipe){
    this.recipes = this.recipes.filter(l => l !== recipe);
    this.recipeService.deleteRecipe(recipe).subscribe(
      response => console.log(response)
    );
  }
 
  goToDetail(id:number){
    this.router.navigate(["recipe/"+id]);
  }

  openAdd(){
    document.getElementById("myAddModal").style.display="block";
  }

  closeAdd(){
    document.getElementById("myAddModal").style.display="none";
  }

  openEdit(id: string){
    document.getElementById("myEditModal-"+id).style.display="block";
  }

  closeEdit(id: string | number){
    document.getElementById("myEditModal-"+id).style.display="none";
  }

  openDelete(id: string){
    document.getElementById("myDeleteModal-"+id).style.display="block";
  }

  closeDelete(id:string){
    document.getElementById("myDeleteModal-"+id).style.display="none";
  }

}
