import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

faceEvent(){
  window.location.href="https://www.facebook.com/home.php"
  console.log("clicked")
}
twitterEvent(){
  window.location.href="https://twitter.com/twitter"
}
googleEvent(){
  window.location.href="https://aboutme.google.com/u/0/?referer=gplus"
}


}
