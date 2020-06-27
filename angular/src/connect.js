/*
to connect to db we must first require the engine that is 
responable to ge the lng that make the db and the frontend talk 
*/
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ereny:ereny@cluster0-wqsjm.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true}).then(function(){
console.log("connect")
}).catch(function(error) {
    console.error(error);
});

/*
usenewurlparser  the old string parer is replaced so we use the 
new parser option without making that :true it will return error 
or mongodb won't be able to connect 
*/