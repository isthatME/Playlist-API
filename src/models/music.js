const mongoose = require('../database/index');

const MusicSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    playlistName:{
        type:String,
        required:true,
    },
    singer:{
        type:String,
        required:true,
    },
    duration:{
        type:String,
        required:true,
    },
    path:{
        type:String,
        required:true,
    }
})

const Music = mongoose.model('Music', MusicSchema)

module.exports = { Music };