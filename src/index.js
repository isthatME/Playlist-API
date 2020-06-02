const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const { mongoose } = require('./database/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(cors());

//all models
const { User } = require('./models/user');
const { Playlist } =  require('./models/playlists');
const { Music } =  require('./models/music')
const { LoginData } =  require('./models/loginData')
 


//register controller
app.get('/register', (req,res) => {
    User.find({}).then((users) => {
        res.send(users)
    })
})

app.post('/register', (req,res) => {
    let { name, email, password } = req.body

    let newUser = new User({
        name,
        email,
        password
    })
    newUser.save().then((userDoc) => {
        res.send(userDoc)
    })
})

app.patch('/register/:id',(req,res) => {
    User.findByIdAndUpdate({_id: req.params.id}, {
        $set:req.body
    }).then(() => {
        res.sendStatus(200);
    }).catch(err = res.sendStatus(400))
})


//login controller
app.post('/users', (req,res) => {
    let {email, password} = req.body

    let newUser = new LoginData({
        email,
        password
    })
    newUser.save().then((userDoc) => {
        res.send(userDoc)
    })
})

//playlist controller
app.post('/playlist', (req,res) => {
    let {name,cover} = req.body

    let newPlaylist = new Playlist({
        name,
        cover
    })
    newPlaylist.save().then((playlistDoc) => {
        res.send(playlistDoc)
    })
})

app.get('/playlist', (req,res) => {
    Playlist.find({}).then((playlists) => {
        res.send(playlists)
    })
})


//music controller
app.post('/musics', (req,res) => {
    let {name, playlistName,singer,duration,path} = req.body

    let newMusic = new Music({
        name,
        playlistName,
        singer,
        duration,
        path
    })
    newMusic.save().then((musicDoc) => {
        res.send(musicDoc)
    })
})

app.delete('/musics/:id', (req,res) => {
    Music.findOneAndDelete({_id: req.params.id},{
        $set:req.body
    }).then(() => {
        res.sendStatus(200)
    })
})
//get all songs
app.get('/musics', (req,res) => {
    Music.find().then((musics) => {
        res.send(musics)
    })
})

//get all song from an playlist
app.get('/musicss', (req,res) => {
    const {playlistName} = req.query
    Music.find({playlistName}).then((data) => {
        res.send(data)
    })
})


app.listen(3000);



