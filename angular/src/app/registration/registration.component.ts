import { Component, OnInit } from '@angular/core';
import * as $ from  'jquery';
import { TaskService } from '../services/task.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {
  constructor(private task:TaskService,private router:Router) { }
//the values cames from the register
username:string;
age:number;
imgsrc:any="../../assets/coco/profile.png";
email:string;
passward:string;
createnewUser()
{
 // this.imgsrc=  $('.avatar').attr('src')
  console.log("the image")
console.log(this.imgsrc)
this.task.createUser(this.username,this.passward,this.email,this.imgsrc)
.subscribe((res)=>
{
console.log(res);
})
sessionStorage.setItem("type","normal")
console.log(sessionStorage.getItem("type"))
this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
 
this.router.navigate(['/home']);
}); 
}
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