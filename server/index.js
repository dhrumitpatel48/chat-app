const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user-route");
const messageRoutes = require("./routes/message-route");

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoutes);
app.use("/api/messages", messageRoutes);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connection established successfully.");
  })
  .catch((err) => {
    console.log(`Error while mongoDB connection: ${err}`);
  });

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} successfully.`);
});
