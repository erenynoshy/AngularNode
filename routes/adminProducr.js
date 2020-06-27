//the db commend 
require('../connect')
const express=require('express')
const {Router} =require('express')
const routerpage=Router()
routerpage.use(express.json())
const reqproduct=require('../module/product.js')
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

 
//get by categroy
routerpage.get('/:details',(req,res,next)=>{
    console.log('in search get function')
console.log(req.params.details)
    reqproduct.find({details:req.params.details}).then(data=>{
        res.status(200).json(data)
    }) 
    .catch(err=>{
        res.status(400).json(err)
    })
})
//the delete 
routerpage.delete('/:title',(req,res,next)=>{
    console.log("the delete func ")
    const body=req.params.title;
    console.log(body)
    reqproduct.deleteOne({title:body }).then
    (pro=>{
        console.log(" then ")
        res.status(200).json(pro)
    }).catch(err=>{
        console.log("error ")
        res.status(500).json(err)
    })
})

//the get 
routerpage.get('/',function(req,res){
    reqproduct.find({}).then(pro=>{
        res.status(200).json(pro)
    })
    .catch(err=>{
        res.status(500).json(err)
    })
})
//the post
routerpage.post('/',upload.single('image'),(req,res,next)=>{
    console.log('post op')
    
    const body=req.body;
    
    const product=new reqproduct(body);
   
    product.save()
    .then(result=>{
        console.log('then add pro')
        res.status(200).json(result)
    })
    .catch(err=>{
        console.log('error')
        res.status(400).json(err)
    })

   
})
//the patch

routerpage.patch('/:title', function(req, res) {
    console.log('get here ')
   
console.log(req.params.title)
console.log(req.body)
     reqproduct.updateOne({ title:req.params.title }, req.body).then(j=>{
     
    console.log('in then function')
     res.status(200).json(j)
     })
     .catch(err=>{
         console.log('error')
        res.status(500).json(err)  
     })
   })

module.exports=routerpage