import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListService } from '../../services/list.service';
import { Product } from '../../beans/product';
import { List } from '../../beans/list';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {

  inputId : number;
  nLists: number ;
  userId: number;
  products: Product[] = [];

  constructor(private listService: ListService,private activatedRoute: ActivatedRoute, private router: Router) { 
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] != null && params['id'] != "") {
        this.inputId = params['id'];
      }
    });

  }

  ngOnInit() {
    this.getUserId();
    this.getListLenght();
    this.getProducts();
  }

  getUserId(){
    this.listService.getItemListById(this.inputId).subscribe(
      list => this.userId = list.userId
    );
  }

  getListLenght(){
    this.listService.getItemListById(this.inputId).subscribe(
      list => this.listService.getListById(list.userId).subscribe(
        lists => this.nLists = lists.length
      )
    );
  }

  getProducts(){
    this.listService.getItemListById(this.inputId).subscribe(
      list => this.products = list.product
    );
  }

}
