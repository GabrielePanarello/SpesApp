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
  newProduct: Product;
  loaderCheck = true;

  newProductName = "";
  newProductDose= "";
  newProductQuantity= "";

  lastId=3;

  constructor(private productService: ProductService, private listService: ListService, private activatedRoute: ActivatedRoute, private router: Router) { 
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] != null && params['id'] != "") {
        this.inputId = params['id'];
      }
    });

  }

  ngOnInit() {
    this.getProducts();
  }
  
  getProducts(){
    this.productService.getItemListById(this.inputId).subscribe(
      list =>{
        list.id 
        this.products = list.product;
        this.userId = list.userId;
        this.listName = list.name;
        this.loaderCheck = false;
        this.listService.getListById(list.userId).subscribe(
        lists => {
          this.nLists = lists.length;}
      )}
    );
    
  }

  addProduct(newProductName:string,newProductDose:string,newProductQuantity:string){
    this.lastId++;
    this.newProduct = new Product(this.lastId,"-",newProductName,newProductDose,newProductQuantity,false);
    this.productService.addToProducts(this.newProduct).subscribe(
      responseProduct => {
        this.products.push(responseProduct);
      }
    );
  }

  editProduct(product:Product){
    this.productService.editProduct(product).subscribe(
      () => this.products[this.products.findIndex((obj => obj.id == product.id))] = product);
      this.closeEditItem(product.id);
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

  closeEditItem(id: string | number){
    document.getElementById("myEditItem-"+id).style.display="none";
  }


  pinProduct(id:string){
    this.closeEdit(id);
    document.getElementById("name-"+id).style.textDecoration ="line-through"
  }

  openEditItem(id:String){
    document.getElementById("myEditItem-"+id).style.display="block";
  }
  
  cancel(id:string){
    this.closeEdit(id);
  }

  openAdd(){
    document.getElementById("myAddModal").style.display="block";
  }

  closeAdd(){
    document.getElementById("myAddModal").style.display="none";
  }

}
