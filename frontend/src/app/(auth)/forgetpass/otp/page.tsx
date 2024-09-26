"use client";
import { InputOTPPattern } from "@/components/maindesign/inputotp";
const Otp = () => {
  return (
    <div className="py-8 items-center justify-center flex flex-col gap-6">
      <img src="" alt="" />
      <h1 className="text-2xl font-bold">Баталгаажуулах</h1>
      <p>“mujo@nest.edu.mn” хаягт илгээсэн баталгаажуулах кодыг оруулна уу</p>
      <InputOTPPattern />
      <p>Дахин илгээх (30)</p>
    </div>
  );
};
export default Otp;
