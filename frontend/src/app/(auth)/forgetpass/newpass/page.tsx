"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const NewPass = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col w-[334px] justify-center m-auto gap-4 py-4 my-24">
      <p className="text-center text-2xl font-bold">Нууц үг сэргээх</p>
      <Input type="password" placeholder="Нууц үг" className="rounded-2xl" />
      <Input
        type="password"
        placeholder="Нууц үг давтах"
        className="rounded-2xl"
      />
      <ul className="list-disc ml-8">
        <li>Том үсэг орсон байх</li>
        <li>Жижиг үсэг орсон байх</li>
        <li>Тоо орсон байх</li>
        <li>Тэмдэгт орсон байх</li>
      </ul>
      <Button className="rounded-2xl bg-blue-600 hover:bg-white hover:text-black">
        Үүсгэх
      </Button>
    </div>
  );
};
export default NewPass;
