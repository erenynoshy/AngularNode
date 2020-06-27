const hostname="127.0.0.1"
const port=3000
const express=require('express')
const morgan=require('morgan')
const app=express()
const path=require('path')
require('./connect')
const userpage=require('./routes/userLogin')
const user=require('./routes/usersRegister')
const product=require('./routes/adminProducr')
const order=require('./routes/order')
const type=require('./routes/type')
/*

-------------------------------------------------not working 

*/
//to solve the crs error 
app.use(function(req, res, next) {
  console.log('kkkkkkkkkkkkkkkkkkk');
  res.setHeader('Access-Control-Allow-Origin','*'); //http://localhost:3000,

	res.setHeader('Access-Control-Allow-Headers','*');
  res.setHeader('Access-Control-Allow-Credentials','true');
  res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT,PATCH, DELETE');
  if('OPTIONS'==req.method)
  {
res.sendStatus(200);

  }
  else
  {
console.log('error in header ')
  }
  next();
});



  app.use(express.static('data'));
  app.use(express.json())
  app.use(morgan('dev'))
//the user register
  app.use('/userlogin',userpage)
  app.use('/userreg',user)
 //the user make order
  app.use('/makeOrder',order)
  app.use('/getOrder',order)
  app.use('/getacceptedorder',order)
  


  //admin  product
  app.use('/getproduct',product)
  app.use('/postproduct',product)
  app.use('/delProduct',product)
  app.use('/updateProduct',product)
  app.use('/getcategryproduct',product)
  app.use('/putproduct',product)
  
  
  //admin accept reject order
  app.use('/acceptorder',order)
  app.use('/getrejorder',order)
  

  //the type
  app.use('/userType',type)

  //get user
  app.use('/getuser',user)
  app.use('/updatepro',user)
  
 


app.listen(port,()=>{
    console.log('listen to port 3000')
})