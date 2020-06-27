import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
@Component({
  selector: 'app-order-accepted',
  templateUrl: './order-accepted.component.html',
  styleUrls: ['./order-accepted.component.css']
})
export class OrderAcceptedComponent implements OnInit {

  constructor(private task:TaskService) { }
  order=[];
  state:string
  rejstate:string
  status=[]
  ngOnInit() {
   this. state="accepted"
   this.rejstate="rejected"
    this.task.order(this. state)
    .subscribe((res)=>
    {
for(let i in res)
{
      this.order.push(res[i]);
      
} 
    })
 
    //for the rejected part
    this.task.orderreject(this.rejstate)
    .subscribe((res)=>
    {
      console.log("rejected")
for(let i in res)
{
      this.order.push(res[i]);
} 
    })
  }

}
