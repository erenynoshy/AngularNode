import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private task:TaskService,private router: Router) { 

  

  }
  product=[];

//this function is a  built within the class to the inital state when 
//you want your function to run after loading the page 
  ngOnInit() 
  {
    this.task.product ()
    .subscribe((res)=>
    {
for(let i in res)
{
      this.product.push(res[i]);
} 
    })
  }
//get the target data to set it 
orderImg:string;
getdata(e)
{
  //parentnode to get ethe parent element
  console.log(e)
  
   e.target.parentNode.parentNode.parentNode.parentNode.innerHTML.split('""',4)[2]
}  

//the function to make order

title:string
makeOrder(e)
{
 

if(localStorage.getItem("type")!="null"){
  this.orderImg= e.target.parentNode.parentNode.parentNode.parentNode.innerHTML.split('src="',4)[2].split('">',4)[0]
 // console.log(this.orderImg)
this.title=e.target.parentNode.parentNode.parentNode.parentNode.innerHTML.split('-card-title">',4)[1].split('</mat-card-title>',2)[0]
 this.task.makeOrderTask(this.orderImg,this.title).subscribe(res=>{})
}
else
{
  window.alert('you need to login in first .please login now')
 this. router.navigate(['/login'])
 }
}
  
  //for the img src 
  
 
  // onClick() {
  //   console.log(this.imageSrc)
  //   this.imageSrc = "../../assets/coco/2.jpg ";
    
  // }
  // onMouseover()
  // {
  //   this.imageSrc = "../../assets/coco/4.jpg ";
  // }
  // onMouseup()
  // {
   
  //   this.imageSrc = "../../assets/coco/1.jpg";
  // }
}
