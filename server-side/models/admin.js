const mongoose = require('mongoose')

const adminLogin = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('admin',adminLogin)