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

  private usersUrl = 'api/users';  // URL to web api

  constructor(private http: HttpClient) { }

  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl, httpOptions)
    .pipe(
      catchError(this.handleError('getUsers',[]))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);      
      return of(result as T);
    };
  }


}
