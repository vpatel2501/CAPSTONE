import express from "express";
import UserModel from "./user-model.js";
import DeviceModel from "./device-model.js";
import RecipeModel from "./recipe-model.js"
import jwt from "jsonwebtoken";

const router = express.Router();


router.post("/signup", async (req,res) => {
    const addUser = new UserModel(req.body);
    try {
        await addUser.save();
        res.send(addUser);
    }
    catch (error){
        res.status(500).send(error);
    }
})

router.post("/signin", async (req,res) => {

    let userFound;

    UserModel.findOne({email:req.body.email})
    .then(user => {
        if(!user){
            return res.status(401).json({
                message:"User not found"
            })
        }
        userFound = user;
        return req.body.password==user.password;
    })
    .then(result => {
        if(!result) {
            return res.status(401).json({
                message: "Password is incorrect"
            })
        }
        if(userFound){
            const token = jwt.sign({email: userFound.email,userId: userFound._id},"secret_string",{expiresIn:"1h"})
            return res.status(200).json({
                token: token
            })
        }
    })

})

router.post("/addDevice", async (req,res) => {
    const deviceModel = new DeviceModel(req.body);
    try {
        await deviceModel.save();
        res.send(deviceModel);
    }
    catch (error){
        res.status(500).send(error);
    }
})

router.post("/addRecipe", async (req,res) => {
    const recipeModel = new RecipeModel(req.body);
    try {
        await recipeModel.save();
        res.send(recipeModel);
    }
    catch (error){
        res.status(401).send(error);
    }
})

export default router;