import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
name:string;
age;
users=[]
user:any;
@Output() myEvent=new EventEmitter();
getData()
{
  this.user={
    name:this.name,
    age:this.age
  }
 this.users.push(this.user)
 this.myEvent.emit(this.users);
}
}

