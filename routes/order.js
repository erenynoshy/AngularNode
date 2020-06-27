//the db commend 
require('../connect')
const express=require('express')
const {Router} =require('express')
const routerpage=Router()
routerpage.use(express.json())
const reqorder=require('../module/order.js')
const bcrypt = require("bcryptjs")


const multer=require('multer')
const storage=multer.diskStorage(//allow use how file will be stored
  {
destination:function(req,file,cb){
cb(null,'./uploadsproduct/')// the place to save in 

},//define where the file should be stored
filename:function (req,file,cb)  {
  cb(null, Date.now() + file.originalname)//the type and the name to be saved with
}
}
)
const upload=multer({storage:storage})//this identify place where ulter will save that files 


/*


the patch should update the state to cancel or reject or stay accepted 
not to update all data 


*/

 //the patch

routerpage.patch('/:title', function(req, res) {
    console.log('get here ')
    console.log(req.body)
console.log(req.params.title)
    reqorder.updateOne({title:req.params.title}, req.body).then(j=>{
   
    console.log('in then of update order ')
     res.status(200).json(j)
     })
     .catch(err=>{
         console.log('error')
        res.status(500).json(err)  
     })
   })
//the get 

routerpage.get('/',function(req,res)
{
  
    console.log('login')
    reqorder.find({}).then(pro=>{
        res.status(200).json(pro)
    })
    .catch(err=>{
        res.status(500).json(err)
    })
})
//get by state
routerpage.get('/:orderState',(req,res,next)=>{
    console.log(req.params.orderState)
    reqorder.find({orderState:req.params.orderState}).then(data=>{
        console.log('then of accepted order')
        res.status(200).json(data)
    }) 
    .catch(err=>{
        console.log('error of accepted order')
        res.status(400).json(err)
    })
})
//the post
routerpage.post('/',upload.single('image'),(req,res,next)=>{
    console.log('post op')
    const body=req.body;
    const product=new reqorder(body);
    product.save()
    .then(result=>{
        res.status(200).json(result)
    })
    .catch(err=>{
        res.status(400).json(err)
    })
})
module.exports=routerpage