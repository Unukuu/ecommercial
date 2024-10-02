"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Link from "next/link";
import { UserContext } from "@/app/context/user-context";
const Signin = () => {
  const { setToken } = useContext(UserContext);
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const signin = async () => {
    const { email, password } = userData;
    try {
      const res = await axios.post(`http://localhost:8000/api/v1/auth/login`, {
        email,
        password,
      });
      console.log(res);
      if (res.status === 200) {
        toast.success("Амжилттай нэвтэрлээ", { autoClose: 1000 });
        const { token } = res.data;
        localStorage.setItem("token", token);
        setToken(token);
        router.push("/");
      }
    } catch (error) {
      console.log("There was an error signing in:", error);
      toast.error("Нэвтрэхэд алдаа гарлаа");
    }
  };
  console.log("aaaa", userData);
  return (
    <div>
      <div className="flex flex-col w-[334px] justify-center m-auto gap-4 py-4 my-24">
        <p className="text-center text-2xl font-bold">Нэвтрэх</p>
        <Input
          placeholder="Имэйл хаяг"
          className="rounded-2xl"
          type="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <Input
          type="password"
          placeholder="Нууц үг"
          className="rounded-2xl"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />

        <Button
          className="rounded-2xl bg-blue-600 hover:bg-white hover:text-black"
          onClick={signin}
        >
          Нэвтрэх
        </Button>
        <Link href="/forgetpass">
          <div className="flex items-center justify-center">
            <span className=" text-[#71717A] border-b-2">Нууц үг мартсан</span>
          </div>
        </Link>
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
