"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { min } from "date-fns";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const minus = () => {
    setCount(count / 2);
  };
  const add = () => {
    setCount(count * 2);
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <p>Hello Pinecone</p>
        <Button onClick={add}>+</Button>
        <Label className="text-2xl mx-5">{count}</Label>
        <Button onClick={minus}>-</Button>
      </div>
    </div>
  );
}
