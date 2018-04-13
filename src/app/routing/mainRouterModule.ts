import {Routes, RouterModule} from '@angular/router'
import { HomeComponent } from '../components/home/home.component';
import { HomeListComponent } from '../components/home-list/home-list.component';
import { NgModule } from '@angular/core';
import { ListDetailComponent } from '../components/list-detail/list-detail.component';
import { ProfileComponent } from '../Components/profile/profile.component';
import { AuthGuardService } from '../services/auth-guard.service';
import { DetailGuardService } from '../services/detail-guard.service';
import { RecipeDetailComponent } from '../Components/recipe-detail/recipe-detail.component';
import { RecipesComponent } from '../Components/recipes/recipes.component';

const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "user/:id", component: HomeListComponent, canActivate:[AuthGuardService,DetailGuardService]},
    {path: "list/:id", component: ListDetailComponent, canActivate:[AuthGuardService]},
    {path: "profile/:id", component: ProfileComponent,  canActivate:[AuthGuardService]},
    {path: "recipeDetail/:id", component: RecipeDetailComponent},
    {path: "recipe/:id", component: RecipesComponent},
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