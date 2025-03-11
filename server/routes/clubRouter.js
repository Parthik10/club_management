const express = require("express");
const {
    createClub,
    getClubs,
    getClubById,
    updateClub,
    deleteClub
} = require("../controllers/clubController.js");

const router = express.Router();

router.post("/", createClub);
router.get("/", getClubs);
router.get("/:id", getClubById);
router.put("/:id", updateClub);
router.delete("/:id", deleteClub);

module.exports = router;