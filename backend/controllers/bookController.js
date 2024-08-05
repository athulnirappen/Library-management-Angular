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
  const { id } = req.params;
  try {
    const singlebook = await Book.findById({ _id: id });
    return res.status(200).json({
      message: "single book",
      singlebook,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error");
  }
};

exports.editBook = async (req, res) => {
  const { id } = req.params;
  const { bookname, bookimage, authorname, assignednames, numberofcopies } =
    req.body;

  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    const updatedAssignedNames = book.assignednames.concat(assignednames);

    book.bookname = bookname;
    book.bookimage = bookimage;
    book.authorname = authorname;
    book.numberofcopies = numberofcopies;

    if (numberofcopies >= updatedAssignedNames.length) {
      book.assignednames = updatedAssignedNames;
    } else {
      book.assignednames = book.assignednames;
    }

    await book.save();

    return res.status(200).json({
      message: "Book is edited",
      book,
    });
  } catch (error) {
    console.error(error);
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
