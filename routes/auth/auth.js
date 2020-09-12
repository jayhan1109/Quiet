const express = require("express");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const { auth } = require("../../middleware/auth");

const router = express.Router();

// @route   GET     /auth
// @desc    Get Current
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    // TODO: Get current user information except "password"
    // user id will be store in "req.user.id"
    // Following line is the example of MongoDB
    // const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST     /auth/login
// @desc    Login User & Get Token
// @access  Public
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // TODO: Check if the email is exist
    // MongoDB Example
    // let user = await User.findOne({ email });

    // If user doesn't exist, return error
    if (!user) {
      return res.status(400).json({ errors: "Invalid Credentials" });
    }

    // Check if the password valid to hashed password
    // We need to parse user password from DB
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ errors: "Invalid Credentials" });
    }

    // Return jsonwebtoken
    const payload = {
      user: {
        id: user.id,
      },
    };

    // Create and Return token
    jwt.sign(
      payload,
      config.get("jwtToken"),
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST     /api/register
// @desc    Register user
// @access  Public
router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // TODO: Check if the email is exist
    // MongoDB Example
    // let user = await User.findOne({ email });

    // If user already exist, return error
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ errors: "User already exist" });
    }

    user = new User({
      name,
      email,
      password,
    });

    // Encrypt password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // TODO: Save user in database
    // MongoDB example
    // await user.save();

    // Return jsonwebtoken
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      config.get("jwtToken"),
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
