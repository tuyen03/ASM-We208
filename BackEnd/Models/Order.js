import mongoose from "mongoose";
const orderSchema = new mongoose.Schema(
    {
        name: String,
        address: String,
        tel: String,
        user_id: String,
        product_list: String,
        payment_method: String,
        total: String,
        date: String
    },
    { timestamps: true, versionKey: false }
);
export default mongoose.model("order", orderSchema);