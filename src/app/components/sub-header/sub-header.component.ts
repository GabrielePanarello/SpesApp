import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit {

  @Input() listLength:number;
  @Input() userId:number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(["user/"+this.userId]);
  }

}
