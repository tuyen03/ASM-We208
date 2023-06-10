import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        name: String,
        address: String,
        tel: String,
        user_id: String,
        product_list: [{ id: String, quantity: Number, name: String, image: String, price: Number }],
        payment_method: String,
        total: String,
        date: String,
        status: { type: String, default: 'Pending' },
    },
    { timestamps: true, versionKey: false }
);
export default mongoose.model("order", orderSchema); 