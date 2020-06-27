import { Component, OnInit } from '@angular/core';
//import * as $ from  'jquery';
@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {
  logo: any;

  constructor() { 

  }

  ngOnInit() {
  //   $(document).ready(function() {

    
  //     var readURL = function(input) {
  //         if (input?.files && input?.files[0]) {
  //             var reader = new FileReader();
  
  //             reader.onload = function (e) {
  //                 $('.avatar').attr('src', e.target?.result);
  //             }
      
  //             reader.readAsDataURL(input.files[0]);
  //         }
  //     }
      
  
  //     $(".file-upload").on('change', function(){
  //         readURL(this);
  //     });
  // });
  }
 
  }
//   onFileChange(fileInput: any){
//     this.logo = fileInput.target.files[0];

//     let reader = new FileReader();

//     reader.onload = (e: any) => {
//         this.logo = e.target.result;
//     }

//     reader.readAsDataURL(fileInput.target.files[0]);
// }


