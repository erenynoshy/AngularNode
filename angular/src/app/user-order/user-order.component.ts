import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css']
})
export class UserOrderComponent implements OnInit {

  constructor(private task:TaskService) { }
  order=[];
  state:string
  ngOnInit() {
this.state="waiting"
    this.task.order(this.state)  
    .subscribe((res)=>
    {
for(let i in res)
{
      this.order.push(res[i]);
} 
    })
 
  }
  status:string
  imageOrdered:string
  title:string
  accept(e)
  {
    this.status="accepted"
    this. imageOrdered=e.target.parentNode.parentNode.parentNode.innerHTML.split('src="',4)[1].split('//Z">',2)[0].split('">',2)[0]
   this.title=e.target.parentNode.parentNode.parentNode.innerHTML.split('title">',2)[1].split('</h4>',2)[0]
    this.task.acceptOrder(this.title,this.status).subscribe(res=>{})
  }
  reject(e)
  {
    this.status="rejected"
    this. imageOrdered=e.target.parentNode.parentNode.parentNode.innerHTML.split('src="',4)[1].split('//Z">',2)[0]
    this.title=e.target.parentNode.parentNode.parentNode.innerHTML.split('title">',2)[1].split('</h4>',2)[0]
    this.task.acceptOrder(this.title,this.status).subscribe(res=>{})
  }

}
