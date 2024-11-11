var express = require("express");
var server = express();
const UserModel = require("./user-model")
const bcrypt = require("bcrypt")

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Users")
.then(() => console.log('Connected Successfully'))
.catch((err) => { console.error(err); });

// server.post('/signup', (req,res) => {

//   bcrypt.hash(req.body.password, 10)
//       .then(hash => {
//           const userModel = new UserModel({
//               name: req.body.name,
//               email: req.body.email,
//               password: hash
//           })
//           userModel.save()
//           .then(result => {
//               res.status(201).json({
//                   message: 'User created',
//                   result: result
//               })
//           })
//           .catch(err => {
//               res.status(500).json({
//                   error: err
//               })
//           })
//       })
// })