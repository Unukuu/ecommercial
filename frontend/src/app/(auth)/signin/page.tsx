"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
const Signin = () => {
  const router = useRouter();
  return (
    <div>
      <div className="flex flex-col w-[334px] justify-center m-auto gap-4 py-4 my-24">
        <p className="text-center text-2xl font-bold">Нэвтрэх</p>
        <Input type="email" placeholder="Имэйл хаяг" className="rounded-2xl" />
        <Input type="password" placeholder="Нууц үг" className="rounded-2xl" />

        <Button className="rounded-2xl bg-blue-600 hover:bg-white hover:text-black">
          Нэвтрэх
        </Button>
        <div className="flex items-center justify-center">
          <span className=" text-[#71717A] border-b-2">Нууц үг мартсан</span>
        </div>
        <Button
          onClick={() => {
            router.push("/signup");
          }}
          variant="outline"
          className="rounded-2xl mt-8"
        >
          Бүртгүүлэх
        </Button>
      </div>
    </div>
  );
};
export default Signin;
