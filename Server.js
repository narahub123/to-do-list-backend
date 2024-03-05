const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const monthlyRoutes = require("./routes/monthlyToDoRouter");

const app = express();

const PORT = process.env.port || 3000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log(err));

app.use(monthlyRoutes);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
