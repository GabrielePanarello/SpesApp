import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-after-login',
  templateUrl: './header-after-login.component.html',
  styleUrls: ['./header-after-login.component.css']
})
export class HeaderAfterLoginComponent implements OnInit {
  
  @Input() userId: number | string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToLists(){
    this.router.navigate(["user/"+this.userId]);
  }

  goToRecipes(){
    this.router.navigate(["recipe/"+this.userId]);
  }

  goToProfile(){
    this.router.navigate(["profile/"+this.userId]);
  }


  logout(){
    sessionStorage.removeItem("user");
    this.router.navigate(["home"]);
  }
}
