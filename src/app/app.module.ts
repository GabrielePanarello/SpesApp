import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderAfterLoginComponent } from './Components/header-after-login/header-after-login.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderBeforeLoginComponent } from './Components/header-before-login/header-before-login.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListDetailComponent } from './Components/list-detail/list-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderAfterLoginComponent,
    HomeComponent,
    HeaderBeforeLoginComponent,
    FooterComponent,
    ListDetailComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
