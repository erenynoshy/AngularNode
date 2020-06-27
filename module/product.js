const mongoose = require('mongoose');
const product=mongoose.model('product',
{
    
    title:
{
    type:String
    
},
price:
{
    type:Number
},
details :
{
    type:String
},
image:{
    type:String
}

})
module.exports=product