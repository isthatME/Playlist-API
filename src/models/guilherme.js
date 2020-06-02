const mongoose = require('../database/index');

const guilhermeSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})

const guilhermeData = mongoose.model('guigui', guilhermeSchema)

module.exports = { guilhermeData };