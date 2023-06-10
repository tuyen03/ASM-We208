import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    User_id: String,
    User_name: String,
    User_password: String,
    User_email: String,
    User_role: { type: String, default: 'member' },
},
    { timestamps: true, versionKey: false }
);

export default mongoose.model("User", userSchema);