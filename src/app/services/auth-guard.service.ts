import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';
import { ComunicatorService } from './comunicator.service';

@Injectable()
export class AuthGuardService implements CanActivate{

  inputId: number;

  constructor(private loginService: LoginService, private router: Router) {
   }

  canActivate(){
    return this.loginService.checkLoggedUser(this.inputId) == true ? this.loginService.checkLoggedUser(this.inputId) : false;
  }
}
