const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/formCC',{
    useCreateIndex:true,
    useNewUrlParser:true, 
    useUnifiedTopology:true
}).then(()=>{
    console.log('MongoDB connection successful');
}).catch(err=>{
    console.log(err);
    console.log('failed');
})

module.exports=mongoose;

