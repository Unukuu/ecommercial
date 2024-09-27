"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { InputOTPPattern } from "@/components/maindesign/inputotp";
const ForgetPass = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [countdown, setCountdown] = useState(30);

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleSendOtp = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/auth/forget-password",
        { email }
      );
    } catch (error) {
      console.log("email ilgeehed aldaa garlaa", error);
      toast.error("email ilgeehed aldaa garlaa");
    }
  };

  const handleResendOTP = () => {
    setCountdown(30);
  };
  useEffect(() => {
    if (countdown > 0) {
      const countDown = setInterval(() => {
        setCountdown((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(countDown);
    }
  }, [countdown]);
  return (
    <div>
      {step === 1 && (
        <div className="flex flex-col w-[334px] justify-center m-auto gap-4 py-4 my-24">
          <p className="text-center text-2xl font-bold">Нууц үг сэргээх</p>
          <Input
            placeholder="Имэйл хаяг"
            className="rounded-2xl"
            type="email"
            onChange={handleEmail}
          />

          <Button
            className="rounded-2xl bg-blue-600 hover:bg-white hover:text-black"
            onClick={handleSendOtp}
          >
            Илгээх
          </Button>
        </div>
      )}
      {step === 2 && (
        <div className="py-8 items-center justify-center flex flex-col gap-6">
          <img src="" alt="" />
          <h1 className="text-2xl font-bold">Баталгаажуулах</h1>
          <p>
            “mujo@nest.edu.mn” хаягт илгээсэн баталгаажуулах кодыг оруулна уу
          </p>
          <InputOTPPattern />
          <p>Дахин илгээх ({countdown})</p>
        </div>
      )}
    </div>
  );
};
export default ForgetPass;
