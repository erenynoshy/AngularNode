//the db commend 
require('../connect')
const express=require('express')
const {Router} =require('express')
const routerpage=Router()
routerpage.use(express.json())
const requser=require('../module/userRegister')
const bcrypt = require("bcryptjs")
console.log('the login page ')
//the get all

//the post 
//as the user entered values not get 
//retrieve from database is an async operation 
routerpage.post('/', (req,res)=>
{
    console.log('the compare result ')
  const   {username,passward}=req.body
  //requser is the odule that contain the data it represent the collection 
  //it create a collection with that module name 
  const currentuser=requser.findOne({ username },function(err,data){
    if (err) {
    
      res.json({msg: 'user not found '},{usertype:req});
      }
      else
      {
          if(data!=null){
           
          bcrypt.compare(passward,data.passward , function(err, isMatch) {
            if (err) {
              console.log('error in the compare password')
             // res.send('error in the compare password')
              res.json({"msg":"error in the compare password","username":username,"passward":passward,"type":data.userType});
            } else if (!isMatch) {
              console.log("Password doesn't match!")
             // res.send("Password doesn't match!")
            
              res.json({"msg":"Password doesn't match!","username":username,"passward":passward,"type":data.userType});
            } else {
              console.log("Password matches!")
            //  res.send("Password matches!")
            console.log(req.body.userType)
              res.json({"msg":"Password matches!","username":username,"passward":passward,"type":data.userType});
              
            }
          })
        }
        else
        {
            console.log('not found user')
            res.json({msg: 'user not found '});
        }
    }
   
  })
 
})
//the update 
/*
---------------------------------------------------------------------------------------


------------------------------still need to test---------------------------------------


-----------------------------------------------------------------------------------------
*/
//the patch
/*
i should keep the user move through pages using its id 
then get its data from the updated form 
and then post that data to the same place where i get the id 
so get the info that match that id and update some of it 

*/
routerpage.patch('/:id', function(req, res) {
    console.log('get here ')
    console.log(req.params.id)

     reqproduct.updateOne({ _id:req.params.id }, req.body).then(j=>{
         console.log(_id)
    console.log('in then function')
     res.status(200).json(j)
     })
     .catch(err=>{
         console.log('error')
        res.status(500).json(err)  
     })
   })



module.exports=routerpage