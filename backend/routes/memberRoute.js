const express = require("express");
const { addMember, getAllMembers, editMember, deleteMember, getSingleMember } = require("../controllers/memberController");


const router = express.Router();

router.post('/addmember', addMember)
router.get("/getmember", getAllMembers);
router.get("/getsinglemember/:id", getSingleMember);
router.put("/editmember/:id", editMember);
router.delete('/deletemember/:id',deleteMember)

module.exports = router;
