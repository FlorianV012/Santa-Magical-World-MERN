const express = require("express");
const app = express();
// const mongoose = require("mongoose");
require("dotenv").config();
const mongoClient = require("./mongoClient");

const cors = require("cors");
app.use(cors());

const port = process.env.PORT || 5000;

const categoriesRoutes = require("./routes/categories");
const toysRoutes = require("./routes/toys");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  //   console.log("bienvenue sur la page d'acceuil");
  res.send("Home");
});

app.use("/categories", categoriesRoutes);
app.use("/toys", toysRoutes);

app.listen(port, () => {
  console.log(`Serveur connecté sur le port : ${port}`);
});
