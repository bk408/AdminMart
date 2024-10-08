const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

mongoose
  .connect(
    "mongodb+srv://bhavyakhatri1912:bk408@adminmart.acc19.mongodb.net/?retryWrites=true&w=majority&appName=adminmart"
  )
  .then(() => console.log("mongo connected..."))
  .catch((error) => console.log(error));

const PORT = process.env.PORT || 5000;

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Port is running on ${PORT}`);
});
