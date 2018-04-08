import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../beans/user';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

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

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);      
      return of(result as T);
    };
  }


}
