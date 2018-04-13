import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class DetailGuardService implements CanActivate{

  inputId: number;

  constructor(private router: Router) {
   }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(sessionStorage.getItem("user") != null && state.url.indexOf("user/"+sessionStorage.getItem("user")) != -1){
      return true;
    }else{
      this.router.navigate(["user/"+sessionStorage.getItem("user")]);
      return false;
    }
    
  }
}