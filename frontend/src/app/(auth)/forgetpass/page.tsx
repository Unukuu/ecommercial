"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
const ForgetPass = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSendOtp = async () => {
    const res = await axios.post(
      "http://localhost:8000/api/v1/auth/forget-password",
      { email }
    );
  };
  return (
    <div>
      <div className="flex flex-col w-[334px] justify-center m-auto gap-4 py-4 my-24">
        <p className="text-center text-2xl font-bold">Нууц үг сэргээх</p>
        <Input placeholder="Имэйл хаяг" className="rounded-2xl" type="email" />

        <Button className="rounded-2xl bg-blue-600 hover:bg-white hover:text-black">
          Илгээх
        </Button>
      </div>
    </div>
  );
};
export default ForgetPass;
