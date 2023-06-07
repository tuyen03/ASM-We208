import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    User_name: String,
    User_password: String,
    User_email: String,
});

export default mongoose.model("User", userSchema);