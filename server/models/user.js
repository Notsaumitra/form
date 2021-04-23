const mongoose=require('mongoose');

const userSchema = new mongoose.Schema({ 
    name:{
        firstName:{type:String},
        lastName:{type:String}
    },
    phone:{
        areaCode:{type:Number},
        phoneNumber:{type:Number}
    },
    email:{type:String},
    address:{
        street:{type:String},
        street2:{type:String},
        city:{type:String},
        state:{type:String},
        pinCode:{type:Number}
    },
    occupation:{type:String},
    companyName:{type:String},
    jobPosition:{type:String},
    paymentMethod:{type:String},
    comments:{type:String}
})

const User = new mongoose.model('User', userSchema);
module.exports= User;