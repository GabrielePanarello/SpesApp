import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderAfterLoginComponent } from './components/header-after-login/header-after-login.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeListComponent } from './components/home-list/home-list.component';
import { HeaderBeforeLoginComponent } from './components/header-before-login/header-before-login.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './mock/in-memory-data-service';




@NgModule({
  declarations: [
    AppComponent,
    HeaderAfterLoginComponent,
    HeaderBeforeLoginComponent,
    HomeComponent,
    HomeListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation:false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
