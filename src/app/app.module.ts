import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderAfterLoginComponent } from './components/header-after-login/header-after-login.component';
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


@NgModule({
  declarations: [
    AppComponent,
    HeaderAfterLoginComponent,
    HeaderBeforeLoginComponent,
    HomeComponent,
    HomeListComponent,
    FooterComponent,
    ListDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation:false}),
    MainRouterModule
  ],
  providers: [HttpService, LoginService, ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
