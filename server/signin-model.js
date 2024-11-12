import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {type: String},
    email: {type: String, required: true},
    password: {type: String, required: true}
    },
    {
        versionKey: false,
    }
)

export default mongoose.model("SigninModel", userSchema);