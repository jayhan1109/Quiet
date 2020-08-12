const express = require("express");
const router = express.Router();

// @route   GET   /auth
// @desc    Authenticate User
// @access  Public
router.get("/", async (req, res) => {
  res.json("Hello");
});

module.exports = router;
