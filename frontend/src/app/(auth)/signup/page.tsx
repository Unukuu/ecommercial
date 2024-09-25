"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
const Signup = () => {
  const router = useRouter();
  const [newUser, setNewUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phonenumber: "99112233",
    repassword: "",
  });
  const signup = async () => {
    const { firstname, lastname, email, password, phonenumber, repassword } =
      newUser;
    if (password !== repassword) {
      toast.error("Нууц үг хоорондоо тохирохгүй байна.");
      return;
    }
    try {
      const res = await axios.post(`http://localhost:8000/api/v1/auth/signup`, {
        firstname,
        lastname,
        email,
        password,
        phonenumber,
      });
      if (res.status === 201) {
        toast.success("Амжилттай бүртгэглээ", { autoClose: 1000 });
        router.push("/signin");
      }
    } catch (error) {
      console.log("error", error);
      toast.error("Алдаа гарлаа");
    }
  };
  console.log(newUser);
  return (
    <div className="flex flex-col w-[334px] justify-center m-auto gap-4 py-4 my-24">
      <p className="text-center text-2xl font-bold">Бүртгүүлэх</p>
      <Input
        type="text"
        placeholder="Овог"
        className="rounded-2xl"
        value={newUser.lastname}
        onChange={(e) => setNewUser({ ...newUser, lastname: e.target.value })}
      />
      <Input
        type="text"
        placeholder="Нэр"
        className="rounded-2xl"
        value={newUser.firstname}
        onChange={(e) => setNewUser({ ...newUser, firstname: e.target.value })}
      />
      <Input
        type="email"
        placeholder="Имэйл хаяг"
        className="rounded-2xl"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <Input
        type="password"
        placeholder="Нууц үг"
        className="rounded-2xl"
        value={newUser.password}
        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
      />
      <Input
        type="password"
        placeholder="Нууц үг давтах"
        className="rounded-2xl"
        value={newUser.repassword}
        onChange={(e) => setNewUser({ ...newUser, repassword: e.target.value })}
      />
      <ul className="list-disc ml-8">
        <li>Том үсэг орсон байх</li>
        <li>Жижиг үсэг орсон байх</li>
        <li>Тоо орсон байх</li>
        <li>Тэмдэгт орсон байх</li>
      </ul>
      <Button
        className="rounded-2xl bg-blue-600 hover:bg-white hover:text-black"
        onClick={signup}
      >
        Үүсгэх
      </Button>
      <Button
        onClick={() => {
          router.push("/signin");
        }}
        variant="outline"
        className="rounded-2xl mt-8"
      >
        Нэвтрэх
      </Button>
    </div>
  );
};
export default Signup;
