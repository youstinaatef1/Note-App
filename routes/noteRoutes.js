const express = require("express");
const router = express.Router();
const {postNoteController} = require("../controller/noteController");
const authMiddleware = require("../Middleware/AuthMiddleware");
router.post("/note", authMiddleware, postNoteController);
module.exports = router;