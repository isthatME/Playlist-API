const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/noderest', { useNewUrlParser:true},).then(() => {
    console.log('connected to mongoDB')
}).catch(error => {
    console.log('error while attempting to connect to mongoDB', error)
})
mongoose.Promise = global.Promise;

module.exports = mongoose;