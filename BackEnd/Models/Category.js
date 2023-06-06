import mongoose from "mongoose";
const Category_Schame = new mongoose.Schema(
  {
    Name_Category: String,
    Product: [
      {
        type: mongoose.Types.ObjectId,
        ref: "product",
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Category", Category_Schame);
