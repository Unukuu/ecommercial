import { model, Schema } from "mongoose";
interface ILiked {
  user: Schema.Types.ObjectId;
  products: [{ product: Schema.Types.ObjectId }];
}
const likedSchema = new Schema<ILiked>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);
const Liked = model<ILiked>("Liked", likedSchema);
export default Liked;
