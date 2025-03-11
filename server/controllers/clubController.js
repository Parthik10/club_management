const Club = require("../models/ClubModel.js");

// Create a new club
const createClub = async (req, res) => {
    try {
        const club = new Club(req.body);
        await club.save();
        res.status(201).json(club);
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: "Club name already exists" });
        }
        res.status(500).json({ message: "Server Error", error });
    }
};

// Get all clubs
const getClubs = async (req, res) => {
    try {
        const clubs = await Club.find();
        res.status(200).json(clubs);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

// Get a single club by ID
const getClubById = async (req, res) => {
    try {
        const club = await Club.findById(req.params.id);
        if (!club) return res.status(404).json({ message: "Club not found" });
        res.status(200).json(club);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

// Update a club by ID
const updateClub = async (req, res) => {
    try {
        const club = await Club.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!club) return res.status(404).json({ message: "Club not found" });
        res.status(200).json(club);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

// Delete a club by ID
const deleteClub = async (req, res) => {
    try {
        const club = await Club.findByIdAndDelete(req.params.id);
        if (!club) return res.status(404).json({ message: "Club not found" });
        res.status(200).json({ message: "Club deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

module.exports = { createClub, getClubs, getClubById, updateClub, deleteClub };