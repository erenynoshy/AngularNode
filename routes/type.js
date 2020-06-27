//the db commend 
require('../connect')
const express=require('express')
const {Router} =require('express')
const routerpage=Router()
routerpage.use(express.json())
const reqorder=require('../module/type')
routerpage.get('/',function(req,res)
{
  
    console.log('type')
    reqorder.find({}).then(pro=>{
        res.status(200).json(pro)
    })
    .catch(err=>{
        res.status(500).json(err)
    })
})
routerpage.patch('/:value', function(req, res) {
    console.log('get here ')
    console.log(req.body)
console.log(req.params.value)
    reqorder.updateOne({value:req.params.value}, req.body).then(j=>{
   
    console.log('in then of update order ')
     res.status(200).json(j)
     })
     .catch(err=>{
         console.log('error')
        res.status(500).json(err)  
     })
   })

   module.exports=routerpage