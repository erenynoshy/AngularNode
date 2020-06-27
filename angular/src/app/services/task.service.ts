import { Injectable } from '@angular/core';
import{ServicesService} from './services.service'
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private services :ServicesService) { }
//function to get the type of the user 
private authStatus=new Subject<boolean>(); // push the data to the app

patchAuthStatus(value:string,userType:any)
{ 
  
  return this.services.patch(`userType/${value}`,{type:userType})
}
getAuthStatus()
{
  console.log('getAuthStatus')
  return this.services.get('userType')
}
  //the function to make user register 
createUser(username:string,passward:string,email:string,image:string)
{
 return  this.services.post('userreg',{username:username,passward:passward,email:email,image:image})
}
//the function to add product 
addProduct(title:string,price:number,details:string,image:string)
{
  console.log(title,details,price,image)
 return  this.services.post('postproduct',{title:title,price:price,details:details,image:image})
}
postproduct(title:string,price:number,details:string,image:string)
{
  console.log('put data to server')
  return this.services.post('putproduct',{title:title,price:price,details:details,image:image})
}

//to accept order
acceptOrder(title:string,status:string)
{
  console.log("task services task")
  return  this.services.patch(`acceptorder/${title}`,{orderState:status}) 
}
//to delete a product
deleteProduct(title:string)
{
  console.log("task services task")
  return  this.services.delete(`delProduct/${title}`) 
}
//update product 
updateproduct(oldtitle:string,title:string,price:number)
{
  console.log("task update function")
  return  this.services.patch(`updateProduct/${oldtitle}`,{title:title,price:price}) 
}

//the function to make order
makeOrderTask(image:string,title:string)
{

  console.log(image)
  console.log("make order")
  
 return  this.services.post('makeOrder',{image:image,title:title})
}
//the function to get user 
userLogin(username:string,passward:string)
{
  console.log("task services task")

  return ( this.services.post
    ('userlogin',{username:username,passward:passward}) 
  )

    
}
//get product depend on cateogry
searchProduct(details:string)
{
  console.log('the product  search task services ')
  return this.services.get(`getcategryproduct/${details}`)
}
//get accepted orders
order(orderState:string)
{
  console.log('the product task services ')
  return this.services.get(`getacceptedorder/${orderState}`)
}
//get rejected orders
orderreject(orderState:string)
{
  console.log('the product task services ')
  return this.services.get(`getrejorder/${orderState}`)
}
//the get all product function 
product()
{
  console.log('the product task services ')
  return this.services.get('getproduct')
}
//the get all order function 
getOrder()
{
  console.log('the order task services ')
  return this.services.get('getOrder')
}
//get user for the profile 
getUser(username:string)
{
console.log('the login ')
return this.services.get(`getuser/${username}`)
}
//update profile
updateprofile(username:string,uname:string,email:string,image:any)
{
return this.services.patch(`updatepro/${username}`,{username:uname,email:email,image:image})
}
}
