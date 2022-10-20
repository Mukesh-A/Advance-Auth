const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes");
const app = express();

app.use("api/", router);
mongoose
  .connect(
    "mongodb+srv://admin:kR4SGspYjVnaeHmy@cluster0.13vfmv2.mongodb.net/auth?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000);
    console.log("database is connected listenig to localhost ");
  })
  .catch((err) => console.log(err));
