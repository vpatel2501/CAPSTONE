import express from "express";
import mongoose from "mongoose";
import UserModel from "./user-model.js";
const app = express();
const PORT = 3000;

// const routes = require("./routes");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use("/api", routes);

mongoose.connect("mongodb://localhost:27017/Users")
.then(() => console.log('Connected Successfully'))
.catch((err) => { console.error(err); });

mongoose.connection.once("open", (_) => {
    console.log(`Database connected`)})

mongoose.connection.on("error", (err) => {
    console.error(`connection error: ${err}`);
    });

const dbInput  = new UserModel ({
    name: "Veeren",
    email: "vpate075@uottawa.ca",
    password: "spice123"
})

app.get("/", (req, res) => {
    // res.send("Hello from an Express API!" );
    console.log(dbInput);
    res.send(dbInput);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.post("/", async (req,res) => {
    const addUser = new UserModel(req.body);

    try {
        await addUser.save();
        res.send(addUser);
    }
    catch (error){
        res.status(500).send(error);
    }
})

// var express = require("express");
// var server = express();
// const UserModel = require("./user-model");
// const bcrypt = require("bcrypt");

// server.use(express.json());





// const router = require('./routes')
// server.use('/tasks', router)

