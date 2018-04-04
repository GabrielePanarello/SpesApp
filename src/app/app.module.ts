import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderAfterLoginComponent } from './Components/header-after-login/header-after-login.component';
import { HomeComponent } from './Components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderAfterLoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
