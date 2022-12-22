const mongoose = require('mongoose')

const slots = new mongoose.Schema({
    slot:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"open"
    }
})

module.exports = mongoose.model('bookingslot',slots)