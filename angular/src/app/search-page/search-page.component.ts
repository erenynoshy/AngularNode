import { Component, OnInit ,Input} from '@angular/core';
import { TaskService } from '../services/task.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

 
  constructor(private route: ActivatedRoute,private task:TaskService,private router: Router) { }

 
  
  product=[];
  cat:string
  ngOnInit() {
   console.log("after route")
    this.cat =  sessionStorage.getItem("search")
    console.log(this.cat);
    this.task.searchProduct(this.cat )  
    .subscribe((res)=>
    {
for(let i in res)
{
      this.product.push(res[i]);
} 
this.router.navigate(['../searchcat'])
    })
 
  }

}
