const Member = require("../models/member");

exports.addMember = async (req, res) => {
  try {
    const newMember = new Member(req.body);
    await newMember.save();
    return res.status(200).json({
      message: "new member is created",
      newMember,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error");
  }
};
exports.getAllMembers = async (req, res) => {
  try {
    const allMembers = await Member.find();
    return res.status(200).json({
      message: "all members",
      allMembers,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error");
  }
};
exports.getSingleMember = async (req, res) => {

  const{id}=req.params
   try {
    
     const singlemember = await Member.findById({ _id: id })
     return res.status(200).json({
       message: "single product",
       singlemember
     })
   } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error");
   }
 }

exports.editMember = async (req, res) => {
  const { id } = req.params;
  const { name, email, place, phone } = req.body;
  try {
    const editmember = await Member.findByIdAndUpdate(
      { _id: id },
      { name, email, place, phone },
      { new: true }
    );
    await editmember.save();
    return res.status(200).json({
      message: "member details is edited",
      editmember,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error");
  }
};
exports.deleteMember = async (req, res) => {
  const { id } = req.params;
  try {
    const deletemember = await Member.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      message: "member  is deleted",
      deletemember,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error");
  }
};
