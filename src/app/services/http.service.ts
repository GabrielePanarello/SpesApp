import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../beans/user';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { List } from '../beans/list';

@Injectable()
export class HttpService {

  private url = 'api/';  // URL to web api

  constructor() { }

  getUrl(): string{
    return this.url;
  }

  handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);      
      return of(result as T);
    };
  }


}
