import { model, Schema } from "mongoose";

interface iUser {
  _id: Schema.Types.ObjectId;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phoneNumber?: string;
  role: string;
  profile_img: String;
  address: string;
  created_at: Date;
  updated_at: Date;
}
const userSchema = new Schema<iUser>({
  firstname: {
    type: String,
    required: [true, "Хэрэглэгчийн нэрийг заавал оруулна"],
  },
  lastname: {
    type: String,
    required: [true, "Хэрэглэгчийн овог заавал оруулна"],
  },
  email: {
    unique: true,
    type: String,
    required: [true, "Хэрэглэгчийн имэйл хаягийг заавал оруулна"],
  },
  password: {
    type: String,
    minlength: [8, "Хэрэглэгийн нууц үг хамгийн багадаа 8н тэмдэгт байна"],
    required: [true, "Хэрэглэгчийн нууц үгийн заавал оруулна уу"],
  },
  phoneNumber: String,
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  profile_img: {
    type: String,
    default: "",
  },
  address: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});
const User = model("User", userSchema);
export default User;
