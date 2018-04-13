import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../beans/product';
import { Recipe } from '../../beans/recipe';
import { ProductService } from '../../services/product.service';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  inputId : number;
  nRecipes: number ;
  userId: number;
  recipeName: string;
  indexContainer : number;
  products: Product[] = [];
  loaderCheck = true;

  constructor(private productService: ProductService, private recipeService: RecipeService, private activatedRoute: ActivatedRoute, private router: Router) { 
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] != null && params['id'] != "") {
        this.inputId = params['id'];
      }
    });

  }

  ngOnInit() {
    this.getProducts();

  }
  
  getProducts(){
    this.productService.getItemRecipeById(this.inputId).subscribe(
      recipe =>{ 
        this.products = recipe.product;
        this.userId = recipe.userId;
        this.recipeName = recipe.name;
        this.loaderCheck = false;
        this.recipeService.getRecipeById(recipe.userId).subscribe(
          recipes => {
          this.nRecipes = recipes.length;}
      )}
    );
    
  }


  addProduct(product: Product){
    this.productService.addToProducts(product).subscribe(
      responseProduct => {
        this.products.push(responseProduct);
      }
    );
  }

  editProduct(product:Product){
    this.productService.editProduct(product).subscribe(
      () => this.products[this.products.findIndex((obj => obj.id == product.id))] = product);
  }

  deleteProduct(product: Product){
    this.productService.deleteProduct(product).subscribe(
      response => this.products = this.products.filter(p => p !== product)
    );
  }

  goBack(){
    this.router.navigate(["recipe/"+this.userId]);
  }

  showEdit(id:string){
    if(document.getElementById(id).style.display == "block"){
      this.closeEdit(id);
    }else{
      document.getElementById(id).style.display="block";
      document.getElementById("wrapper-"+id).style.position="absolute";
    }
  }

  closeEdit(id:string){
    document.getElementById(id).style.display="none";
    document.getElementById("wrapper-"+id).style.position="relative";
  }

  pinProduct(id:string){
    this.closeEdit(id);
    document.getElementById("name-"+id).style.textDecoration ="line-through"
  }

  cancel(id:string){
    this.closeEdit(id);
  }

  openAdd(){
    document.getElementById("myAddModal").style.display="block";
  }

  closeAdd(){
    document.getElementById("myAddModal").style.display="none";
  }
}
