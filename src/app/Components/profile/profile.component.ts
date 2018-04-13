import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from '../../beans/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  users: User[] = [];
  inputId: number;
  user:User;

  constructor(private loginService: LoginService, private activatedRoute: ActivatedRoute, private router: Router) { 
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] != null && params['id'] != "") {
        this.inputId = params['id'];
      }
    });

  }

  ngOnInit() {
    console.log(this.inputId);
    this.getUsers();
  }

  getUsers(){
    this.loginService.getUsers()
    .subscribe(
      usersResponse =>{ 
        this.users = usersResponse;
        this.user = this.users[this.users.findIndex((obj => obj.id == this.inputId))];
      }
    );
  }

}
