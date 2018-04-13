import {Routes, RouterModule} from '@angular/router'
import { HomeComponent } from '../components/home/home.component';
import { HomeListComponent } from '../components/home-list/home-list.component';
import { NgModule } from '@angular/core';
import { ListDetailComponent } from '../components/list-detail/list-detail.component';
import { ProfileComponent } from '../Components/profile/profile.component';
import { RecipesComponent } from '../Components/recipes/recipes.component';
import { RecipeDetailComponent } from '../Components/recipe-detail/recipe-detail.component';

const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "user/:id", component: HomeListComponent},
    {path: "list/:id", component: ListDetailComponent},
    {path: "recipeDetail/:id", component: RecipeDetailComponent},
    {path: "recipe/:id", component: RecipesComponent},
    {path: "profile", component: ProfileComponent},
    {path: "", redirectTo:"/home", pathMatch:"full"},
    {path: "**", redirectTo:"/home", pathMatch:"full"}
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class MainRouterModule{}