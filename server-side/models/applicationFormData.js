const mongoose = require('mongoose')

const applicationData = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    companyname:{
        type:String,
        required:true
    },
    Images:{
        type:String,
        required:true
    },
    unique:{
        type:String,
        required:true
    },
    describe:{
        type:String,
        required:true
    },
    market:{
        type:String,
        required:true
    },
    potential:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"pending"
    },
    date:{
        type:Date,
        default:Date.now
    }
    
})
 
module.exports = mongoose.model('application',applicationData)