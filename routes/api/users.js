const express = require("express");
const router = express.Router();

// @route  GET api/users
// @desc   Test route
// @access Public (do not need a token)

router.get("/", (req, res) => {
  res.send("User route");
});

module.exports = router;
