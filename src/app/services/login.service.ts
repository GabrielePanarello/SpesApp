import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { User } from '../beans/user';
import { HttpService } from './http.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class LoginService {

  constructor(private http: HttpClient, private httpService: HttpService) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.httpService.getUrl()+"users", httpOptions)
    .pipe(
      catchError(this.httpService.handleError('getUsers',[]))
    );
  }

  getUserById(id: number): Observable<User[]> {
    return this.http.get<User[]>(this.httpService.getUrl()+"users", httpOptions)
    .pipe(
      map(users => users.filter(user => user.id === id)),
      catchError(this.httpService.handleError('getUsers',[]))
    );
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.httpService.getUrl()+"users", user, httpOptions)
    .pipe(
      tap((user: User) => console.log("User Added"))
    );
  }

}
