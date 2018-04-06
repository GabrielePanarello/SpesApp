import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderAfterLoginComponent } from './Components/header-after-login/header-after-login.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeListComponent } from './components/home-list/home-list.component';
import { HeaderBeforeLoginComponent } from './Components/header-before-login/header-before-login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderAfterLoginComponent,
    HomeComponent,
    FooterComponent,
    HomeListComponent,
    HeaderBeforeLoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
