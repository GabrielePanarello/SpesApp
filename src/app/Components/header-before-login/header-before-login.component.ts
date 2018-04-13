import { Component, OnInit } from '@angular/core';
import { IButton } from 'selenium-webdriver';
import { HttpService } from '../../services/http.service';
import { User } from '../../beans/user';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ComunicatorService } from '../../services/comunicator.service';

@Component({
  selector: 'app-header-before-login',
  templateUrl: './header-before-login.component.html',
  styleUrls: ['./header-before-login.component.css']
})
export class HeaderBeforeLoginComponent implements OnInit {

  users: User[];
  username: string;
  password: string;
  newUser: User = new User();
  num:string;

  constructor(private loginService: LoginService, private comunicator: ComunicatorService,private router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

  doLogin(){
    for(let user of this.users){
      if(user.name == this.username && user.password == this.password){
        console.log("Utente Trovato");
        this.comunicator.changeId(user.id);
        sessionStorage.setItem("user",""+user.id);
        this.router.navigate(["user/"+user.id]);
        break;
      }else{
        console.log("Utente Non Trovato");
      }
    }
  }

  doSignUp(user: User){
    this.loginService.register(user).subscribe();
  }

  getUsers(){
    this.loginService.getUsers()
    .subscribe(
      usersResponse => this.users = usersResponse 
    );
  }

  openRegister() {
    document.getElementById("myModalRegister").style.display = "block";
    document.getElementById("mail").style.color = "transparent";
    document.getElementById("messaggio").style.color = "transparent";
  }
  closeRegister() {
    document.getElementById("myModalRegister").style.display = "none";
    //document.getElementById("menu-item").style.padding="0px";
    document.getElementById("mail").style.color = "gray";
    document.getElementById("messaggio").style.color = "gray";
  }

  openLogin() {
    document.getElementById("myModalLogin").style.display = "block";
    document.getElementById("mail").style.color = "transparent";
    document.getElementById("messaggio").style.color = "transparent";

  }
  closeLogin() {
    document.getElementById("myModalLogin").style.display = "none";
    document.getElementById("mail").style.color = "gray";
    document.getElementById("messaggio").style.color = "gray";

  }

}

