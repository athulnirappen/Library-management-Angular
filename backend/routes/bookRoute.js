const express = require("express");
const {
  Addbook,
  getAllbooks,
  editBook,
  deleteBook,
  getsingleBook,
} = require("../controllers/bookController");

const router = express.Router();

router.post("/addbook", Addbook);
router.get('/getsinglebook/:id',getsingleBook)
router.get("/allbook", getAllbooks);
router.put("/editbook/:id", editBook);
router.delete("/deletebook/:id", deleteBook);



module.exports = router;
