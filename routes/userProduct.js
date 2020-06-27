//the db commend 
require('../connect')
const express=require('express')
const {Router} =require('express')
const routerpage=Router()
routerpage.use(express.json())
const reqproduct=require('../module/product')
const bcrypt = require("bcryptjs")

//get by name 
routerpage.get('/:title',(req,res,next)=>{
    reqproduct.findOne({title}).then(data=>{
        res.status(200).json(data)
    }) 
    .catch(err=>{
        res.status(400).json(err)
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

module.exports=routerpage