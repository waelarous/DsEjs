const mongoose = require("mongoose");

let db = mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.io0m2.mongodb.net/DSframework?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("connected to db succcesfuly...");
    }
  }
);
