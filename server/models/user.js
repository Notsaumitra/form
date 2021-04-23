const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userExperience: {
        none: { type: Boolean },
        little: { type: Boolean },
        some: { type: Boolean },
        good: { type: Boolean },
        excellent: { type: Boolean }
    },
    interest: {
        dataStructure: { type: Boolean },
        competitiveProg: { type: Boolean },
        pythonDjango: { type: Boolean },
        meanStack: { type: Boolean },
        mernStack: { type: Boolean }
    },
    firstName: { type: String },
    lastName: { type: String },
    areaCode: { type: String },
    phoneNumber: { type: String },
    email: { type: String },
    address: {
        street: { type: String },
        street2: { type: String },
        city: { type: String },
        state: { type: String },
        pinCode: { type: Number }
    },
    occupation: { type: String },
    companyName: { type: String },
    jobPosition: { type: String },
    dates: {
        may1_3: { type: Boolean },
        may15_18: { type: Boolean },
        june1_3: { type: Boolean },
        june15_18: { type: Boolean },
        july1_3: { type: Boolean },
        july15_18: { type: Boolean }
    },
    paymentMethod: { type: String },
    comments: { type: String },
    infoFromWhere: {
        facebook: { type: Boolean },
        twitter: { type: Boolean },
        youtube: { type: Boolean },
        ads: { type: Boolean },
        referral: { type: Boolean }
    }
})

const User = new mongoose.model('User', userSchema);
module.exports = User;