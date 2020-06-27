import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-slide-foot',
  templateUrl: './slide-foot.component.html',
  styleUrls: ['./slide-foot.component.css']
 
})
export class SlideFootComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  styles=[
{src:'../../assets/coco/9.jpg',height:'350px',width:'250px'},
{src:'../../assets/coco/ch.PNG',height:'500px',width:'300px'},
{src:'../../assets/coco/6.jpg',height:'250px',width:'250px'},
{src:'../../assets/coco/2.png',height:'250px',width:'250px'}
]
}
