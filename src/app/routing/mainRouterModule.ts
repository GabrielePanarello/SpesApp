import {Routes, RouterModule} from '@angular/router'
import { HomeComponent } from '../components/home/home.component';
import { HomeListComponent } from '../components/home-list/home-list.component';
import { NgModule } from '@angular/core';
import { ListDetailComponent } from '../components/list-detail/list-detail.component';
import { ProfileComponent } from '../Components/profile/profile.component';
import { AuthGuardService } from '../services/auth-guard.service';
import { DetailGuardService } from '../services/detail-guard.service';

const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "user/:id", component: HomeListComponent, canActivate:[AuthGuardService,DetailGuardService]},
    {path: "list/:id", component: ListDetailComponent, canActivate:[AuthGuardService]},
    {path: "profile", component: ProfileComponent,  canActivate:[AuthGuardService]},
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