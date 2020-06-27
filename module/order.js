
const mongoose = require('mongoose');
console.log("order page ")
const userOrder=mongoose.model('userOrder',
{
image:
{
    type:String
  
    
},
title:
{
    type:String
},
orderState:
{
    type:String,
    default:"waiting"
}

})
module.exports=userOrder