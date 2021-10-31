const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config(); // environment variables
const userRoute = require("./Routes/router");
const mongoose = require("mongoose");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.bqqnk.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("DB connected successfully");
      });
  } catch (err) {
    console.log("not connected" + err);
  }
};

// mongoose
//   .connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("DB connected successfully");
//   })
//   .catch((err) => {
//     console.log("not connected" + err);
//   });

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan());

const PORT = process.env.PORT || 8080;

app.use("/", userRoute);

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));

// const user = "crudApp";
// const pass = "5eQdnAgl29To5avd";
