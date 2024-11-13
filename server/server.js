import express from "express";
import mongoose from "mongoose";
import routes from "./routes.js";
import cors from "cors";
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin: "http://localhost:4200"}));
app.use(routes);

mongoose.connect("mongodb://localhost:27017/main")
.then(() => console.log('Connected Successfully'))
.catch((err) => { console.error(err); });

mongoose.connection.once("open", (_) => {
    console.log(`Database connected`)})

mongoose.connection.on("error", (err) => {
    console.error(`connection error: ${err}`);
    });

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});