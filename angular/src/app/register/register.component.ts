import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private task:TaskService) { }

  ngOnInit() {
  }
  //the values cames from the register
  username:string;
  age:number;
 
  email:string;
  passward:string;
createnewUser(e)
{

console.log(e);
this.task.createUser(this.username,this.passward,this.email,this.imageSrc)
.subscribe((res)=>
{
console.log(res);
})
}


imageSrc="../../assets/coco/user.png";
preview(event)
{
 
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url

    reader.onload = (event) => { // called once readAsDataURL is completed
      console.log('here')
      // this.imageSrc=event.target.result.toString()
    }
  }
 
}
}
