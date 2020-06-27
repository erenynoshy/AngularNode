import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ActivatedRoute,Router } from '@angular/router';
import * as $ from  'jquery';
@Component({
  selector: 'app-admin-add-page',
  templateUrl: './admin-add-page.component.html',
  styleUrls: ['./admin-add-page.component.css']
})
export class AdminAddPageComponent implements OnInit {

  
  constructor(private task:TaskService,private router:Router) { }

 proTitle:string;
  delete(e):any{
   // console.log(e.target.parentNode.parentNode.parentNode.innerHTML.split('text-gray">',4)[1].split('</h6>',2)[0]);
  this. proTitle=e.target.parentNode.parentNode.parentNode.innerHTML.split('card-title">',4)[1].split('</h4>',2)[0]
  console.log("the title")
 console.log(this. proTitle)
  this.task.deleteProduct(this.proTitle).subscribe((res)=>{
    console.log(res)
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
  
      this.router.navigate(['/adminAdd'])
    })
  })
 
  }
// function for the update 
productImage:string
productPrice:number
productTitle:string

update(e)
{
  this.productTitle=e.target.parentNode.parentNode.parentNode.innerHTML.split('card-title">',4)[1].split('</h4>',2)[0]
  this. productPrice=e.target.parentNode.parentNode.parentNode.innerHTML.split('text-gray">',4)[1].split('</h6>',2)[0]
  this.productImage=e.target.parentNode.parentNode.parentNode.innerHTML.split('src="',4)[1].split('">',4)[0]

}

title:string;
price:number;


save()
{
if(this.price==undefined )
{
this.price=this.productPrice
}
if(this.title==undefined)
{
  this.title=this.productImage
}
this.task.updateproduct(this.productTitle,this.title,this.price).subscribe((res)=>{ 
  console.log(res)
  $("#closeModelupdate").click(); 

this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
  
this.router.navigate(['/adminAdd'])
})
})

}

//function to get all products 
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
