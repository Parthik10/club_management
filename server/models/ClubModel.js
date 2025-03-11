const mongoose = require("mongoose");

const clubSchema = new mongoose.Schema(
  {
    clubName: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    clubHead: { type: String, required: true },
    logo: { type: String }
  },
  { timestamps: true }
);

const Club = mongoose.models.Club || mongoose.model("Club", clubSchema);

module.exports = Club;