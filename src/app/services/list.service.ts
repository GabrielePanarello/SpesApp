import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { List } from '../beans/list';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from './http.service';
import { catchError, tap, map, filter } from 'rxjs/operators';
import { Product } from '../beans/product';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ListService {

  constructor(private http: HttpClient, private httpService: HttpService) { }

  getList(): Observable<List[]>{
    return this.http.get<List[]>(this.httpService.getUrl()+"lists")
    .pipe(
      catchError(this.httpService.handleError('getList',[]))
    );
  }

  getListById(userId: number): Observable<List[]>{
    return this.http.get<List[]>(this.httpService.getUrl()+"lists",httpOptions)
    .pipe(
      map(lists => lists.filter(list => list.userId == userId))
    );
  }

  getItemListById(id: number): Observable<List>{
    
    return this.http.get<List>(this.httpService.getUrl()+"lists",httpOptions)
    .pipe(
      map(list => list[id == 1 ? id : id-1]),
      catchError(this.httpService.handleError('getList',null))
    );
  }

  addToList(list: List): Observable<List>{
    return this.http.post<List>(this.httpService.getUrl()+"lists",httpOptions)
    .pipe(
      tap((list: List) => console.log("List Added")),
      catchError(this.httpService.handleError<List>('List Add Error'))
    )
  }

  editList(list:List):Observable<any>{
    return this.http.put<List>(this.httpService.getUrl()+"lists/"+list.id,list,httpOptions)
    .pipe(
      catchError(this.httpService.handleError<any>('Edit List error'))
    );
  }

  deleteList(list: List): Observable<List> {
    return this.http.delete<List>(this.httpService.getUrl()+"lists/"+list.id,httpOptions)
    .pipe(
      catchError(this.httpService.handleError<List>('Delete List error'))
    );
  }

}
