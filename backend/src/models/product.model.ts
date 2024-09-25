import { model, Schema } from "mongoose";

interface iProduct {
  name: string;
  description: string;
  price: number;
  size: string;
  images: [string];
  isNew: boolean;
  quantity: number;
  discount: number;
  category: Schema.Types.ObjectId;
}
const productSchema = new Schema<iProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      default: "comment",
    },
    size: { type: String, enum: ["s", "m", "l", "xl", "xxl"], default: "s" },
    images: {
      type: [String],
      default: ["img"],
    },
    isNew: {
      type: Boolean,
      default: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    category: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Category",
    },
  },
  {
    timestamps: true,
  }
);

const Product = model<iProduct>("product", productSchema);

export default Product;
