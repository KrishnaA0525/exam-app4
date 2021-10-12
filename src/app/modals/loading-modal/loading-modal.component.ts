import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-modal',
  templateUrl: './loading-modal.component.html',
  styleUrls: ['./loading-modal.component.css']
})
export class LoadingModalComponent implements OnInit {

  a: any = "10";
  b: unknown = {
    x: 10
  };
  c: number = 10;

  constructor() {
    this.a = this.b;
    this.b = this.a;
    this.c = this.a;
    this.a.push("a");
    if(Array.isArray(this.b))
      this.b.push("a");
    // console.log(this.b.x);
    
  }

  ngOnInit(): void {
  }



}
