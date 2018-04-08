import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { User } from '../../beans/user';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  users: User[];

  constructor(private httpService: HttpService) { }

  ngOnInit(){
    this.getUsers();
  }

  getUsers(){
    this.httpService.getUsers()
    .subscribe(
      response => console.log(response)
    );
  }

 

}
