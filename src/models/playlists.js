const mongoose = require('mongoose');

const PlaylistSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    cover:{
        type:String,
        required:true,
    }
})

const Playlist = mongoose.model('Playlist', PlaylistSchema)

module.exports = { Playlist };