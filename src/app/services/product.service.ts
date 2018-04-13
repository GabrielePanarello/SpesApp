import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { List } from '../beans/list';
import { HttpService } from './http.service';
import { map, catchError, tap } from 'rxjs/operators';
import { Product } from '../beans/product';
import { Recipe } from '../Beans/recipe';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductService {


  constructor(private http: HttpClient, private httpService: HttpService) { }

  getItemListById(id: number): Observable<List>{
    return this.http.get<List>(this.httpService.getUrl()+"lists",httpOptions)
    .pipe(
      map(list => list[id === 1 ? id : id-1]),
      catchError(this.httpService.handleError('getList',null))
    );
  }

  getItemRecipeById(id: number): Observable<List>{
    return this.http.get<List>(this.httpService.getUrl()+"recipes",httpOptions)
    .pipe(
      map(list => list[id === 1 ? id : id-1]),
      catchError(this.httpService.handleError('getRecipe',null))
    );
  }

  addToProducts(product: Product): Observable<Product>{
    return this.http.post<Product>(this.httpService.getUrl()+"lists",product,httpOptions)
    .pipe(
      tap((responseList: Product) => console.log("product added")),
      catchError(this.httpService.handleError('product',undefined))
    );
  }
  
  deleteProduct(product: Product): Observable<Product> {
    return this.http.delete<Product>(this.httpService.getUrl()+"lists/products/"+product.id,httpOptions)
    .pipe(
      catchError(this.httpService.handleError<Product>('Delete List error'))
    );
  }

  editProduct(product:Product):Observable<any>{
    return this.http.put<List>(this.httpService.getUrl()+"lists/products/"+product.id,product,httpOptions)
    .pipe(
      catchError(this.httpService.handleError<any>('Edit List error'))
    );
  }


}
