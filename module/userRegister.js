const mongoose = require('mongoose');
const userregister=mongoose.model('userregister',
//this userregister is the name of the module it can not be overwritten 
{
    username:
    {
        type:String,
        default:"koky"
    },
    passward:
    {
        type:String
    },
    userType:// theis to make sure that the user is a normal user not an admin 
    {
        type:String,
        default:"normal"
    },
    email:
    {
        type:String
    },
    image:
    {
        type:String
    }


})
module.exports=userregister