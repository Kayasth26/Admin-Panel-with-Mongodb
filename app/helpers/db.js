var mongoose = require('mongoose');

//Database connectivity
mongoose.connect('mongodb://localhost:27017/adminpanel')
.then(() => console.log('Connected to Mongodb...'))
.catch(err => console.error('Could not connected to Mongodb...',err));

Schema = mongoose.Schema

//create Auth Schema
var Auth = new Schema({
    fname: { type: String},
    lName: { type: String},
    gender: { type: String, enum: ['Male', 'Female', 'other'] },
    hobby: { type: Array},
    mobile: { type: Number},
    email: { type: String},
    Password: { type: String},
    city: { type: String},
    Image: { type: String}
});

var AuthModel = mongoose.model('Auth',Auth);

module.exports = AuthModel;