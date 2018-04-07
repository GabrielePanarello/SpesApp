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
  
  
  openRegister(){
    document.getElementById("myModalRegister").style.display="block";
  }
  closeRegister(){
    document.getElementById("myModalRegister").style.display="none";
    document.getElementById("menu-item-login").style.padding="0px";
  }

  openLogin(){
    document.getElementById("myModalLogin").style.display="block";
  }
  closeLogin(){
    document.getElementById("myModalLogin").style.display="none";
    document.getElementById("menu-item-login").style.padding="0px";
  }

  }

