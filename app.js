const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// laod env variables
require("dotenv").config();

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// cors handler
app.use(cors());

// db connection
const mongoURI = process.env.MONGO_URI;
mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

// routes
const errorHandler = require("./middlewares/errorHandler");
const agentRoutes = require("./routes/agent");
app.use(errorHandler);
app.use("/agent", agentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));
