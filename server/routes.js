import express from "express";
import UserModel from "./user-model.js";
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
  const user = await UserModel.findOneAndUpdate({name:"ver"},req.body,{new:true});
  res.send("Updated");
})

export default router;