import { Component , Output, EventEmitter, OnInit, ViewChild, AfterViewInit, OnChanges, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TaskService } from '../services/task.service';
import {Router} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements AfterViewInit{
  
  @ViewChild(LoginComponent,{static: true}) child;
  
  constructor(private breakpointObserver: BreakpointObserver,private task:TaskService,private router: Router) 
  {
 
  }

  type:string;
getValue:any=true;
getproduct:any=false;
//sessionStorage.setItem("type","nothing-yet")

@Input() lala
logout()
{
  this.lala="kkk"
  sessionStorage.setItem("type","null")
  console.log(this.lala)
  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
console.log('in routing')
  this.router.navigate(['/home']);
}); 
  
}
ngOnChanges() {
  // create header using child_id
  console.log("change happen")
  
}
  ngAfterViewInit() {
    console.log(sessionStorage.getItem("type"))
  
    console.log(sessionStorage.getItem("username"))
   // localStorage.setItem('typp',"admin")
  this.type=sessionStorage.getItem("type")
   if(this.type=="normal")
   {
     this.getproduct=true;
     this.getValue=true;
   }
   else if(this.type=="admin")
   {
     this.getValue=false;
   }
  }


admin=true
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    //to show something and something not 
    private authListener:Subscription;



  @Output() messageEvent = new EventEmitter<string>();
   searchCat:string
  search(e)
  {

this.task.searchProduct(this.searchCat).subscribe(res=>{
  console.log(this.searchCat)
  this.messageEvent.emit(this.searchCat)
  sessionStorage.setItem("search",this.searchCat)

  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
 
    this.router.navigate(['/searchcat'])
  }); 
 
  
})

  }

}
