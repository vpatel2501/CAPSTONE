import express from "express";
import mongoose from "mongoose";
import UserModel from "./user-model.js";
import routes from "./routes.js";
import cors from "cors";
const app = express();
const PORT = 3000;

// const routes = require("./routes");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:4200",
    })
    );
app.use(routes);

mongoose.connect("mongodb://localhost:27017/main")
.then(() => console.log('Connected Successfully'))
.catch((err) => { console.error(err); });

mongoose.connection.once("open", (_) => {
    console.log(`Database connected`)})

mongoose.connection.on("error", (err) => {
    console.error(`connection error: ${err}`);
    });

app.get("/", async (req, res) => {
    try{
        const users = await UserModel.find({});
        console.log(users);
        res.send(users);
    }
    catch(error){
        res.status(500).send(error)
    }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// app.post("/test", async (req,res) => {
//     const addUser = new UserModel(req.body);

//     try {
//         await addUser.save();
//         res.send(addUser);
//     }
//     catch (error){
//         res.status(500).send(error);
//     }
// })
