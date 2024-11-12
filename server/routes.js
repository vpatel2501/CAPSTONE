import express from "express";
import UserModel from "./user-model.js";
import Product from "./signin-model.js";
const router = express.Router();

router.post("/test", async (req,res) => {
    const addUser = new UserModel(req.body);

    try {
        await addUser.save();
        res.send(addUser);
    }
    catch (error){
        res.status(500).send(error);
    }
})

router.post("/testupdate", async (req,res) => {
  const user = await UserModel.findOneAndUpdate({name:"veere 22 2n"},req.body,{new:true});
  res.send("Updated");
})

export default router;