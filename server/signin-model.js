import mongoose from "mongoose";

const addProduct = mongoose.Schema({
    productID: {type: Number},
    receipes: {type: Array},
    notificationLog: {type: Array}
    },
    {
        versionKey: false,
    }
)

export default mongoose.model("Signin", addProduct);