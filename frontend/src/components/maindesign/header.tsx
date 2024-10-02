"use client";
import { IoSearchSharp } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { DropdownMenuDemo } from "./dropdownpage";
import { useContext } from "react";
import { UserContext } from "@/app/context/user-context";
const Header = () => {
  const router = useRouter();
  const { user } = useContext(UserContext);
  return (
    <nav className="bg-black flex px-6 py-4 justify-between">
      <div className="flex justify-center items-center gap-8">
        <Link href="/">
          <div className="flex justify-center items-center gap-2">
            <img src="/image/Vector.png" alt="" className="w-8 h-7" />
            <p className="text-white text-sm">ECOMMERCE</p>
          </div>
        </Link>
        <Link href="/category">
          <p className="text-white text-sm">Ангилал</p>
        </Link>
      </div>
      <div className="flex justify-center items-center px-4 py-2 bg-[#18181B] text-gray-200 text-4xl rounded-3xl">
        <IoSearchSharp />
        <Input placeholder="Бүтээгдэхүүн хайх" className="border-none" />
      </div>
      <div className="text-white flex justify-center items-center gap-6 text-2xl">
        <CiHeart />
        <FiShoppingCart />
        {!user ? (
          <>
            <Button
              variant="outline"
              onClick={() => {
                router.push("/signup");
              }}
            >
              Бүртгүүлэх
            </Button>
            <Button
              className="bg-blue-600 hover:bg-white hover:text-black"
              onClick={() => {
                router.push("/signin");
              }}
            >
              Нэвтрэх
            </Button>
          </>
        ) : (
          <DropdownMenuDemo />
        )}
      </div>
    </nav>
  );
};
export default Header;
