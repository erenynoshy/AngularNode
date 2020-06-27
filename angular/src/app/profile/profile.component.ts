import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { TaskService } from '../services/task.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private task:TaskService ,private router:Router) { }

userName=localStorage.getItem("username")
email=""
age="  "
userId:any;
url:any;

  ngOnInit() 
  {
    console.log(localStorage.getItem("username"))
this.task.getUser(this.userName).subscribe(e=>{
  console.log(e)
  this.userName=e[0].username;
 this.email=e[0].email;
 
this.userId=e[0]._id;
console.log(e[0].image)
this.url=e[0].image;
})
   //for the image part
    
  }
  //the update function
  updateprofile()
  {
    this.task.updateprofile(localStorage.getItem("username"),this.userName,this.email,this.url);
    localStorage.setItem("username",this.userName )
  }
  
 
}
