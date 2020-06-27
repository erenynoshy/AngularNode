import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  users:any=[];
receiveData(e)
{
  this.users=e
  console.log("from parent")
  console.log(this.users)
}


}
