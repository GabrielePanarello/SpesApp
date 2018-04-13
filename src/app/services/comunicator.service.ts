import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ComunicatorService {

  private mySubject = new Subject<boolean>();
  private mySubjectId = new Subject<number>();
  public mySubject$ = this.mySubject.asObservable();
  public mySubjectId$ = this.mySubjectId.asObservable();

  constructor() { }
  
  changeSubject(value: boolean){
    this.mySubject.next(value);
  }

  changeId(value: number){
    this.mySubjectId.next(value);
  }

}
