const mongoose = require("mongoose");

mongoose.set('strictQuery',true);
mongoose.connect("mongodb://localhost:27017/blogApps",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family:4,

}, (err)=>{
   
 if(err){
        console.log('Conecting has ended with error ' + err);
 }else {
    console.log(' Data base connection is successfull');
 }
   
});
module.exports = mongoose;