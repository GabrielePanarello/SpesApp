import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderAfterLoginComponent } from './Components/header-after-login/header-after-login.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeListComponent } from './components/home-list/home-list.component';
import { HeaderBeforeLoginComponent } from './Components/header-before-login/header-before-login.component';
import { UrlMockUtilsService } from './services/url-mock-utils.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './Mock/in-memory-data-service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderAfterLoginComponent,
    HeaderBeforeLoginComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation:false})
  ],
  providers: [UrlMockUtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
