import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderBeforeLoginComponent } from './Components/header-before-login/header-before-login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderBeforeLoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
