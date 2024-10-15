"use client";
import { ProductContext } from "@/app/context/product-context";
import axios from "axios";
import { FaHeart } from "react-icons/fa";
import { useParams } from "next/navigation";
import { CiHeart } from "react-icons/ci";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import CommentSection from "@/components/maindesign/comment";

const ProductDetail = () => {
  const [rating, setRating] = useState(0);
  const { products } = useContext(ProductContext);
  const [isTrue, setIstrue] = useState(true);
  const [count, setCount] = useState(0);
  const [isComment, setIsComment] = useState(true);
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
    size: "",
    images: "",
    isNew: true,
    _id: "",
    quantity: 0,
    discount: 0,
    category: "",
  });
  const getProduct = async (id: string | string[]) => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/v1/products/${id}`
      );
      setProduct(res.data.product);
    } catch (error) {
      console.log("error", error);
      toast.error("aldaa garlaa product detail error");
    }
  };
  useEffect(() => {
    getProduct(id);
  }, []);
  return (
    <>
      <div className="flex  container m-auto p-12 gap-5">
        <div className="flex-1 flex gap-5  justify-end items-center">
          <div className=" flex flex-col gap-3">
            <img
              src="/image/1st.png"
              alt=""
              className="w-[67px] h-[100px] rounded-xl"
            />
            <img
              src="/image/1st.png"
              alt=""
              className="w-[67px] h-[100px] rounded-xl"
            />
            <img
              src="/image/1st.png"
              alt=""
              className="w-[67px] h-[100px] rounded-xl"
            />
            <img
              src="/image/1st.png"
              alt=""
              className="w-[67px] h-[100px] rounded-xl"
            />
          </div>
          <div className="w-[422px] h-[521px] overflow-hidden rounded-xl">
            <img src="/image/1st.png" alt="" />
          </div>
        </div>
        <div className="flex-1 flex gap-5 flex-col">
          <div>
            <span className="text-xs font-bold py-1 px-3 border border-blue-600 rounded-2xl">
              New
            </span>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-2xl font-bold">{product.name}</p>
            {isTrue ? (
              <CiHeart
                className="text-3xl"
                onClick={() => {
                  setIstrue(false);
                }}
              />
            ) : (
              <FaHeart
                className="text-2xl text-red-600"
                onClick={() => {
                  setIstrue(true);
                }}
              />
            )}
          </div>
          <p>{product.description}</p>
          <div>
            <p>Хэмжээний заавар</p>
            <div className="flex gap-2 text-xs">
              <p className=" border border-black rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-300">
                S
              </p>
              <p className="border border-black rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-300">
                M
              </p>
              <p className="border border-black rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-300">
                L
              </p>
              <p className=" border border-black rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-300">
                XL
              </p>
              <p className=" border border-black rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-300">
                2XL
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="border border-black rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-300"
              onClick={() => {
                setCount(count - 1);
              }}
            >
              -
            </button>
            <p>{count}</p>
            <button
              className="border border-black rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-300"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xl font-bold">{product.price}</p>
            <div>
              <Button className="bg-[#2563EB] rounded-2xl" onClick={() => {}}>
                Сагсанд нэмэх
              </Button>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <p>Үнэлгээ</p>
              <button
                className="text-[#2563EB] "
                onClick={() => {
                  setIsComment(false);
                }}
              >
                бүгдийг харах
              </button>
            </div>
            <div className="flex items-center gap-2">
              <Rating
                style={{ maxWidth: 100 }}
                value={rating}
                onChange={setRating}
                isRequired
              />
              {/* <RatingStar rate={rate} setRate={setRate} /> */}
              <p className="font-bold">{rating}</p>
              <span className="text-gray-400">(24)</span>
            </div>
            {isComment ? "" : <CommentSection />}
          </div>
        </div>
      </div>
      <p className="font-bold text-3xl container m-auto">Холбоотой бараа</p>
      <div className="grid grid-cols-3 gap-5 container m-auto">
        {products?.slice(0, 6).map((product, i) => {
          return (
            <>
              <div>
                <div className="h-[331px] w-full rounded-2xl overflow-hidden">
                  <img src={product.images[0]} alt="" className="w-full" />
                </div>

                <p>{product.name}</p>
                <p className="font-bold">{product.price}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default ProductDetail;
