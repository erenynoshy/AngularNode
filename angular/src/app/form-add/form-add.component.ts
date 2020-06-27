import { Component, OnInit } from '@angular/core';
import * as $ from  'jquery';
import { TaskService } from '../services/task.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})

export class FormAddComponent implements OnInit  {

  constructor(private task:TaskService,private router:Router) { }
//the values cames from the register
title:string;
price:number;
imgsrc:any="../../assets/coco/product/photo.png";
details:string;



addProduct()
{
 
console.log(this.imgsrc)
this.task.postproduct(this.title,this.price,this.details,this.imgsrc)
.subscribe((res)=>
{
console.log(res);
$("#closeModel").click(); 
this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
  
this.router.navigate(['/adminAdd'])
})
})

}
url:any;
readUrl(event:any) {
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();

    reader.onload = (event: ProgressEvent) => {
      this.imgsrc= (<FileReader>event.target).result;
      console.log(this.imgsrc)
    }

    reader.readAsDataURL(event.target.files[0]);
  }
}
 ngOnInit() {
   
  
  }
}
