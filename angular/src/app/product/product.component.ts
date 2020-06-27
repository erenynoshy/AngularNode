import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private task:TaskService) { }

 
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
}

