const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    UserName: {
        type: String,
        required: true,
        unique: true
    },
    
    Password: {
        type: String,
        required: true,
    }  

}, { timestamps: true });



const User = mongoose.model('Users', UserSchema);
module.exports = User;