import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
    // productID: {type: Number},
    // receipes: {type: Array},
    // notificationLog: {type: Array}
    },
    {
        versionKey: false
    }
)

export default mongoose.model("users", userSchema);