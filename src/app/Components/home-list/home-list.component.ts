import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { List } from '../../beans/list';
import { ListService } from '../../services/list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  lists: List[] = [];
  inputId: number;

  constructor(private listService: ListService,private activatedRoute: ActivatedRoute, private router: Router) { 
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] != null && params['id'] != "") {
        this.inputId = params['id'];
      }
    });
  }

  ngOnInit(){
    this.getUserLists();
  }

  getUserLists(){
    this.listService.getListById(this.inputId)
    .subscribe(
      listResponse => this.lists = listResponse
    );
  }

  addList(list:List){
    this.listService.addToList(list).subscribe(
      listResponse => this.lists.push(listResponse)
    );
  }

  deleteList(list: List){
    this.lists = this.lists.filter(l => l !== list);
    this.listService.deleteList(list).subscribe(
      response => console.log(response)
    );
    console.log(this.lists);
  }
 
  goToDetail(id:number){
    this.router.navigate(["list/"+id]);
  }

}
