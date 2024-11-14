"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
// import { useRouter } from "next/navigation";

const NewPass = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const params = useSearchParams();

  const handleNewPassword = async () => {
    if (!(password === repassword)) {
      console.log("Clicked not match");
      toast("aldaa 2 password tohirohgui");
      return;
    }
    console.log("RT", params.get("resettoken"));
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/verify-password`,
        { password: password, resetToken: params.get("resettoken") }
      );
      toast.success("reset password succeed");
      router.push("/signin");
    } catch (error) {
      toast.error("aldaa garlaa zail2");
    }

    // router.push("/login");
  };
  return (
    <div className="flex flex-col w-[334px] justify-center m-auto gap-4 py-4 my-24">
      <p className="text-center text-2xl font-bold">Нууц үг сэргээх</p>
      <Input
        type="password"
        placeholder="Нууц үг"
        className="rounded-2xl"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Нууц үг давтах"
        className="rounded-2xl"
        onChange={(e) => setRePassword(e.target.value)}
      />
      <ul className="list-disc ml-8">
        <li>Том үсэг орсон байх</li>
        <li>Жижиг үсэг орсон байх</li>
        <li>Тоо орсон байх</li>
        <li>Тэмдэгт орсон байх</li>
      </ul>
      <Button
        className="rounded-2xl bg-blue-600 hover:bg-white hover:text-black"
        onClick={handleNewPassword}
      >
        Үүсгэх
      </Button>
    </div>
  );
};
export default NewPass;
