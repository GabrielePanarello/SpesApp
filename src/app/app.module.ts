import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeListComponent } from './components/home-list/home-list.component';
import { HeaderBeforeLoginComponent } from './components/header-before-login/header-before-login.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './mock/in-memory-data-service';
import { HttpService } from './services/http.service';
import { MainRouterModule } from './routing/mainRouterModule';
import { LoginService } from './services/login.service';
import { ListService } from './services/list.service';
import { ListDetailComponent } from './components/list-detail/list-detail.component';
import { SortablejsModule } from 'angular-sortablejs';
import { ProductService } from './services/product.service';
import { LoaderComponent } from './components/loader/loader.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ComunicatorService } from './services/comunicator.service';
import { DetailGuardService } from './services/detail-guard.service';
import { ProfileComponent } from './Components/profile/profile.component';
import { HeaderAfterLoginComponent } from './components/header-after-login/header-after-login.component';
import { RecipesComponent } from './Components/recipes/recipes.component';
import { RecipeService } from './services/recipe.service';
import { RecipeDetailComponent } from './Components/recipe-detail/recipe-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderAfterLoginComponent,
    HeaderBeforeLoginComponent,
    HomeComponent,
    HomeListComponent,
    FooterComponent,
    ListDetailComponent,
    LoaderComponent,
    ProfileComponent,
    RecipesComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation:false}),
    MainRouterModule,
    SortablejsModule.forRoot({ animation: 150 })
  ],
  providers: [HttpService, LoginService, ListService, ProductService, AuthGuardService, ComunicatorService, DetailGuardService,RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
