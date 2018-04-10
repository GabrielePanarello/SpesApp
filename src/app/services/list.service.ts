import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { List } from '../beans/list';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from './http.service';
import { catchError, tap, map, filter } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ListService {

  constructor(private http: HttpClient, private httpService: HttpService) { }

  getList(): Observable<List[]>{
    return this.http.get<List[]>(this.httpService.getUrl()+"lists",httpOptions)
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

  addToList(list: List): Observable<List>{
    return this.http.post<List>(this.httpService.getUrl()+"lists",httpOptions)
    .pipe(
      tap((list: List) => console.log("List Added")),
      catchError(this.httpService.handleError<List>('List Add Error'))
    )
  }

  deleteList(list: List): Observable<List> {
    return this.http.delete<List>(this.httpService.getUrl()+"lists/"+list.id,httpOptions)
    .pipe(
      catchError(this.httpService.handleError<List>('delete Hero error'))
    );
  }

}
