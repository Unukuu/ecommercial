"use client";

import { FaRegTrashCan } from "react-icons/fa6";
const BuySteps = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="container m-auto ">
        <div className="w-64 m-auto">
          <div className="flex justify-between items-center">
            <p className="bg-[#2563EB] h-8 w-8 border border-[#2563EB] rounded-full flex justify-center items-center text-white">
              1
            </p>
            <div className="border border-black bottom-4 w-20"></div>
            <p className="bg-white h-8 w-8 border border-black rounded-full flex justify-center items-center">
              2
            </p>
            <div className="border border-black bottom-4 w-20"></div>
            <p className="bg-white h-8 w-8 border border-black rounded-full flex justify-center items-center">
              3
            </p>
          </div>
        </div>
        <div className="m-auto w-[638px] flex flex-col gap-4 bg-white p-8 mt-14 rounded-xl border shadow-lg">
          <p className="text-xl font-bold">
            1. Сагс <span className="text-[#71717A]">(4)</span>
          </p>
          <div className="flex w-[574px] h-32 gap-6 border rounded-2xl p-4">
            <img
              src="/image/1st.png"
              alt=""
              className="w-24 h-24 rounded-2xl"
            />
            <div className="w-[354px] flex flex-col gap-2">
              <p>Name</p>
              <div className="flex gap-3">
                <button className="w-8 h-8 rounded-full border border-black">
                  -
                </button>
                <p>count</p>
                <button className="w-8 h-8 rounded-full border border-black">
                  +
                </button>
              </div>
              <p className="font-bold">Total Price</p>
            </div>
            <button>
              <FaRegTrashCan className="text-xl" />
            </button>
          </div>
          <div className="flex w-[574px] h-32 gap-6 border rounded-2xl p-4">
            <img
              src="/image/1st.png"
              alt=""
              className="w-24 h-24 rounded-2xl"
            />
            <div className="w-[354px] flex flex-col gap-2">
              <p>Name</p>
              <div className="flex gap-3">
                <button className="w-8 h-8 rounded-full border border-black">
                  -
                </button>
                <p>count</p>
                <button className="w-8 h-8 rounded-full border border-black">
                  +
                </button>
              </div>
              <p className="font-bold">Total Price</p>
            </div>
            <button>
              <FaRegTrashCan className="text-xl" />
            </button>
          </div>
          <div className="flex w-[574px] h-32 gap-6 border rounded-2xl p-4">
            <img
              src="/image/1st.png"
              alt=""
              className="w-24 h-24 rounded-2xl"
            />
            <div className="w-[354px] flex flex-col gap-2">
              <p>Name</p>
              <div className="flex gap-3">
                <button className="w-8 h-8 rounded-full border border-black">
                  -
                </button>
                <p>count</p>
                <button className="w-8 h-8 rounded-full border border-black">
                  +
                </button>
              </div>
              <p className="font-bold">Total Price</p>
            </div>
            <button>
              <FaRegTrashCan className="text-xl" />
            </button>
          </div>
          <div className="flex justify-between">
            <p className="text-xl">Нийт төлөх дүн:</p>
            <p className="text-xl font-bold">Total Price</p>
          </div>
          <div className="flex justify-end">
            <button className="bg-[#2563EB] text-white py-2 px-9 rounded-3xl">
              Худалдан авах
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BuySteps;
