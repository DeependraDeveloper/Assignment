require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");

const app = express();

const route = require("./routes/route");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any());

app.use("/", route);

const url = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.4nkid.mongodb.net/Assignmernt01`;

mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => console.log("mongoose is connected successfully...."))
  .catch((err) => console.log(err));

app.listen(process.env.PORT || 3030, () =>
  console.log(`server running on prot ${process.env.PORT}`)
);
