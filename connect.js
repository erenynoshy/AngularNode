var mongoose=require('mongoose')
mongoose.connect('mongodb+srv://ereny:ereny@cluster0-wqsjm.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true}).then(()=>{
    console.log('happen')
})
.catch(()=>
{
    console.log('not happen')
})
//another way to check connection 
/*
mongoose.connection.on('connected',(err,data)=>{
if(err)
{
    console.log('not connected')
}
else
{
    console.log('connected')
}
})
*/