const mongoose = require('mongoose');
const userlogin=mongoose.model('userlogin',
{
username:
{
    type:String,
    required:true //to make that field required 
    
},
passward:
{
    type:String,
    required:true
},
userType:// theis to make sure that the user is a normal user not an admin 
{
    type:String,
    default:"normal"
}

})
module.exports=userlogin