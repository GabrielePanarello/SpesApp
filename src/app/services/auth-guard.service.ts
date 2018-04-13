import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class AuthGuardService implements CanActivate{

  inputId: number;

  constructor(private router: Router) {
   }

  canActivate(){
    if(sessionStorage.getItem("user") != null){
      return true;
    }else{
      this.router.navigate(["home"]);
      return false;
    }
    
  }
}
