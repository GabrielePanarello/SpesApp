import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { List } from '../../beans/list';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  lists: List[];

  constructor(private httpService: HttpService) { }

  ngOnInit(){
    this.getLists();
  }

  getLists(){
    this.httpService.getList()
    .subscribe(
      listResponse => this.lists = listResponse
    );
  }
 

}
