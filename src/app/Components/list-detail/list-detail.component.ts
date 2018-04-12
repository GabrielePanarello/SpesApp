import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListService } from '../../services/list.service';
import { Product } from '../../beans/product';
import { List } from '../../beans/list';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {

  inputId : number;
  nLists: number ;
  userId: number;
  listName: string;
  indexContainer : number;
  products: Product[] = [];

  constructor(private productService: ProductService, private listService: ListService, private activatedRoute: ActivatedRoute, private router: Router) { 
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] != null && params['id'] != "") {
        this.inputId = params['id'];
      }
    });

  }

  ngOnInit() {
    this.getListLenght();
    this.getProducts();
  }
  
  getListLenght(){
    this.productService.getItemListById(this.inputId).subscribe(
      list => this.listService.getListById(list.userId).subscribe(
        lists => this.nLists = lists.length
      )
    );
  }

  getProducts(){
    this.productService.getItemListById(this.inputId).subscribe(
      list => {
        console.log(this.inputId);
        this.products = list.product;
        this.userId = list.userId;
        this.listName = list.name;
        console.log(this.listName);
      }
    );
  }

  addProduct(product: Product){
    this.productService.addToProducts(product).subscribe(
      responseProduct => {
        this.products.push(responseProduct);
      }
    );
  }

  deleteProduct(product: Product){
    this.productService.deleteProduct(product).subscribe(
      response => this.products = this.products.filter(p => p !== product)
    );
  }

  goBack(){
    this.router.navigate(["user/"+this.userId]);
  }

  showEdit(id:string){
    if(document.getElementById(id).style.display == "block"){
      this.closeEdit(id);
    }else{
      document.getElementById(id).style.display="block";
      document.getElementById("wrapper-"+id).style.position="absolute";
    }
  }

  closeEdit(id:string){
    document.getElementById(id).style.display="none";
    document.getElementById("wrapper-"+id).style.position="relative";
  }

  pinProduct(id:string){
    this.closeEdit(id);
    document.getElementById("name-"+id).style.textDecoration ="line-through"
  }

}
