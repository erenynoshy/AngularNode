import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

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
