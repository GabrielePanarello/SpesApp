import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../Services/http.service';
import { User } from '../../Beans/user';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {


  constructor(private httpService: HttpService) { }

 

}
