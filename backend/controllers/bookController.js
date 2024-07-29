const Book = require("../models/book");

exports.Addbook = async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    return res.status(200).json({
      message: "new book is created",
      newBook,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error");
  }
};

exports.getAllbooks = async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json({
      message: "All books",
      books,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error");
  }
};

exports.getsingleBook = async (req, res) => {
  const {id}=req.params
  try {

    const singlebook = await Book.findById({ _id: id })
    return res.status(200).json({
      message: "single book",
      singlebook
    })
    
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error");
  }
}

exports.editBook = async (req, res) => {
  const { id } = req.params;
  const { bookname, bookimage, authorname, isAssigned, assignedname } =
    req.body;
  try {
    const editbook = await Book.findByIdAndUpdate(
      { _id: id },
      { bookname, bookimage, authorname, isAssigned, assignedname },
      { new: true }
    );
    await editbook.save();
    return res.status(200).json({
      message: "book is edited",
      editbook,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error");
  }
};

exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const deletebook = await Book.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      message: "book is deleted",
      deletebook,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error");
  }
};

