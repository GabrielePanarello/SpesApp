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
    this.close();
  }
  

  btn= document.getElementById("myBtn");
  span=document.getElementsByClassName("close")[0];

  
  open(){
    document.getElementById("myModal").style.display="block";
  }
  close(){
    document.getElementById("myModal").style.display="none";
    document.getElementById("menu-item-login").style.padding="0px";
  }

  }

