import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../beans/user';
import { catchError, tap, map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { List } from '../beans/list';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HttpService {

  private url = 'api/';  // URL to web api

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url+"users", httpOptions)
    .pipe(
      catchError(this.handleError('getUsers',[]))
    );
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.url+"users", user, httpOptions)
    .pipe(
      tap((user: User) => console.log("User Added - id=${user.id}"))
    );
  }

  getList(): Observable<List[]>{
    return this.http.get<List[]>(this.url+"lists",httpOptions)
    .pipe(
      catchError(this.handleError('getList',[]))
    );
  }

  getListById(userId: number): Observable<List[]>{
    return this.http.get<List[]>(this.url+"lists",httpOptions)
    .pipe(
      map(lists => lists.filter(list => list.userId == userId))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);      
      return of(result as T);
    };
  }


}
