const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SearchSchema = new Schema({
    Number: {
        type: String,
        required: true,
    },
    
    status: {
        type: String,
        required: true,
    },
    
    date:{
        type: String,
        required:true
    }

}, { timestamps: true });



const search = mongoose.model('search', SearchSchema);
module.exports = search;