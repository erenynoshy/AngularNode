import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-head',
  templateUrl: './slide-head.component.html',
  styleUrls: ['./slide-head.component.css']
})
export class SlideHeadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
styles=[
  {src:"../../assets/coco/sh2.png",text:"shose"},
  {src:"../../assets/coco/7.jpg",text:"dress"},
  {src:"../../assets/coco/3.png",text:"bag"},
  {src:"../../assets/coco/8.jpg",text:"pants"}
]
}
