const express = require("express");
const authRouter = require("./routes/auth/auth");

// Connect Express
const app = express();
const port = 5000;

// Middleware
app.use(express.json({ extended: false }));

// Define Routes
// All routes should be separated to each category
// (ex. auth, profile, places etc)
app.use("/auth", authRouter);

// Server ON
app.listen(process.env.PORT || port, () => console.log(`Server is On ${port}`));
