const mongoose = require('mongoose');


Schema = mongoose.Schema;

const contact = new Schema({
    contactName: { type: String },
    email: { type: String },
    contactNumber: { type: String },
    messages: { type: String },
    date: { type: String }
});

const contactWithModel = mongoose.model('contact', contact);

module.exports = contactWithModel;