const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes");
const cookieParser = require("cookie-parser"); 

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use("/api", router);
mongoose
  .connect(
    "mongodb+srv://admin:kR4SGspYjVnaeHmy@cluster0.13vfmv2.mongodb.net/auth?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(4000);
    console.log("database is connected listenig to localhost ");
  })
  .catch((err) => console.log(err));
