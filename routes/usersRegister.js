//the db commend 
require('../connect')
const express=require('express')
const {Router} =require('express')
const routerpage=Router()
routerpage.use(express.json())
const requser=require('../module/userRegister.js')
const bcrypt = require("bcryptjs")
const multer=require('multer')
const storage=multer.diskStorage(//allow use how file will be stored
  {
destination:function(req,file,cb){
cb(null,'./uploads/')// the place to save in 

},//define where the file should be stored
filename:function (req,file,cb)  {
  cb(null, Date.now() + file.originalname)//the type and the name to be saved with
}
}
)
const upload=multer({storage:storage})//this identify place where ulter will save that files 

//the get 
routerpage.get('/',function(req,res)
{
  
    console.log('login')
    requser.find({}).then(pro=>{
        res.status(200).json(pro)
    })
    .catch(err=>{
        res.status(500).json(err)
    })
})
//patch 
routerpage.patch('/:username', function(req, res) {
  console.log('get here ')
  

  requser.updateOne({ username:req.params.username }, req.body).then(j=>{
       console.log(_id)
  console.log('in then function')
   res.status(200).json(j)
   })
   .catch(err=>{
       console.log('error')
      res.status(500).json(err)  
   })
 })
//get by name
routerpage.get('/:username',(req,res,next)=>{

  requser.find({ username:req.params.username}).then(data=>{
      console.log('then of accepted order')
      res.status(200).json(data)
  }) 
  .catch(err=>{
      console.log('error of accepted order')
      res.status(400).json(err)
  })
})
//the post
//we need to accept the image as the image body is binary will not be part 
//of the req.body 
//multer able to parse incoming bodies
//upload .single that will upload only one file 
routerpage.post('/',upload.single('image'),(req,res,next)=>{
    console.log('post op')
  console.log(req.file)
  console.log('the error ')
    const body=req.body;
    
    const {passward}=body //gettting the pass from the body the user send
  
    const saltRounds = 10
    bcrypt.genSalt(saltRounds, function (err, salt) {//this to generate the bcrypt string
        if (err) {
            console.log('the first error ')
          throw err
        } else {
          bcrypt.hash(passward, salt, function(err, hash) { //the hash function to add to the 
            if (err) {
                console.log('the hash get an error ')
              throw err
            } else {
                console.log('it worked ')
            
                const product=new requser(body);
                console.log(product)
                        product.passward=hash
                      //  product.image=req.file.path // here i just saved the image 
                        product.save()
                        .then(result=>
                        {
                            res.status(200).json(result)
                        })
                        .catch(err=>
                        {
                            res.status(400).json(err)
                        })
           
            }
          })
        }
      })
  

})

module.exports=routerpage