import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head-slide',
  templateUrl: './head-slide.component.html',
  styleUrls: ['./head-slide.component.css']
})
export class HeadSlideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  isShow=true
onClick(){
  console.log('hhhh')
this.isShow=!this.isShow;
console.log(this.isShow)
}
}
