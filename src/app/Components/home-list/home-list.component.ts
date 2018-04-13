import { Component, OnInit, Output } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { List } from '../../beans/list';
import { ListService } from '../../services/list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../beans/product';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  lists: List[] = [];
  products: Product[] = [];
  newListName = "";
  newListDesc = "";
  newList: List;
  inputId: number;
  loaderCheck = true;
  
  constructor(private listService: ListService,private activatedRoute: ActivatedRoute,private router: Router) {

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
      listResponse =>
      { this.loaderCheck = false;
        this.lists = listResponse;}
    );
  }

  addList(name: string, description:string){
    this.newList = new List(5,name,"-",this.products,this.inputId,description);
    this.listService.addToList(this.newList).subscribe(
      listResponse => this.lists.push(listResponse)
    );
  }

  editList(list:List){
    this.listService.editList(list).subscribe(
      () => this.lists[this.lists.findIndex((obj => obj.id == list.id))] = list
    );
    this.closeEdit(list.id);
  }

  deleteList(list: List){
    this.lists = this.lists.filter(l => l !== list);
    this.listService.deleteList(list).subscribe(
      response => console.log(response)
    );
  }
 
  goToDetail(id:number){
    this.router.navigate(["list/"+id]);
  }

  openAdd(){
    document.getElementById("myAddModal").style.display="block";
  }

  closeAdd(){
    document.getElementById("myAddModal").style.display="none";
  }

  openEdit(id: string){
    document.getElementById("myEditModal-"+id).style.display="block";
  }

  closeEdit(id: string | number){
    document.getElementById("myEditModal-"+id).style.display="none";
  }

  openDelete(id: string){
    document.getElementById("myDeleteModal-"+id).style.display="block";
  }

  closeDelete(id:string){
    document.getElementById("myDeleteModal-"+id).style.display="none";
  }

}
