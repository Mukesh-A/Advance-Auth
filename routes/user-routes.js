const express = require("express");
const router = express.Router();
const mongoose = require("./routes/user-routes");

router.get("/", (req, res, next) => {
  res.send("hello ");
});
module.exports = router;
