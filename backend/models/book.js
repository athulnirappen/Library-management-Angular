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
    numberofcopies: {
        type:Number
    },
    
    assignednames:{
        type: Array
        
    }
},{timestamps:true})

const Book = mongoose.model("Book", bookSchema)
module.exports=Book