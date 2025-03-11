const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    clubName: { type: String, required: true },
    role: { type: String, required: true },
  },
  { timestamps: true }
);

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
