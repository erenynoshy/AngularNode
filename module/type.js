const mongoose = require('mongoose');
console.log("order page ")
const userType=mongoose.model('userType',
{
value:
{
    type:String,
    default:"user"
}   , 
type:
{
    type:String,
    default:"normal"
}

})
module.exports=userType