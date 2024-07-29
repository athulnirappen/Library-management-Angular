const mongoose = require('mongoose')


const bookSchema = new mongoose.Schema({
    bookname: {
        type: String,
        required:true
    },
    bookimage: {
        type: String,
        required:true
    },
    authorname: {
        type: String,
        required:true
    },
    isAssigned: {
        type: Boolean,
        default:false
    },
    assignedname:{
        type: String
        
    }
},{timestamps:true})

const Book = mongoose.model("Book", bookSchema)
module.exports=Book