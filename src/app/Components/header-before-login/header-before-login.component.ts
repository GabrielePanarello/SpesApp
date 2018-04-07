import { Component, OnInit } from '@angular/core';
import { IButton } from 'selenium-webdriver';

@Component({
  selector: 'app-header-before-login',
  templateUrl: './header-before-login.component.html',
  styleUrls: ['./header-before-login.component.css']
})
export class HeaderBeforeLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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

