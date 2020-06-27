import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private task:TaskService ,private route:ActivatedRoute,private router:Router) { }
usertype:string
  ngOnInit() {
  }
  
  username:string;
  passward:string;
  obj:any;
  checkUser()
  {
    
    this.task.userLogin(this.username,this.passward).subscribe((res)=>
{
 this.obj=res
  
  
 sessionStorage.setItem("type",this.obj.type);
  
  sessionStorage.setItem("username",this.obj.username);
 this.task.patchAuthStatus("user",res)
  console.log('after login');
  console.log(res)
  //sending data from one component to another
 
  if(this.obj.msg=="Password matches!")
  {
    console.log("the passward match")
   
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
 
    this.router.navigate(['/home']);
  }); 

 
  }
  else if(this.obj.msg=="user not found ")
  {
    window.alert('sorry you need to create account first')
  }
  else if(this.obj.type=="admin")
  {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
 
      this.router.navigate(['/home']);
    }); 
  }
  else
  {
    window.alert("password doesn't match please try again")


   this.router.navigate(['/login'])
 }
})
  }
}
