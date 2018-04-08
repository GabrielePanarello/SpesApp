import {Routes, RouterModule} from '@angular/router'
import { HomeComponent } from '../components/home/home.component';
import { HomeListComponent } from '../components/home-list/home-list.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "user/:id", component: HomeListComponent},
    {path: "", redirectTo:"/home", pathMatch:"full"}
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