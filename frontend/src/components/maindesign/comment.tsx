import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import axios from "axios";
import { toast } from "react-toastify";
const CommentSection = ({ id }: { id: string | string[] }) => {
  const [refetch, setReFetch] = useState(true);
  const [product, setProduct] = useState([
    { comment: "", starRating: 0, user: { firstname: "" } },
  ]);
  const [comData, setComData] = useState({
    starRating: 0,
    comment: "",
  });
  const handleRating = (value: number) => {
    setComData({ ...comData, starRating: value });
  };
  const signin = async () => {
    const { starRating, comment } = comData;

    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/products/${id}`,
        {
          starRating,
          comment,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (res.status === 200) {
        toast.success("success update comment");
        console.log(res.data);
      }

      setReFetch(!refetch);
    } catch (error) {
      console.log("There was an error update comment", error);
      toast.error("comment hesegt алдаа гарлаа");
    }
  };
  const getProduct = async (id: string | string[]) => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/v1/products/${id}`
      );
      setProduct(res.data.product.commentSec);
    } catch (error) {
      console.log("error", error);
      toast.error("aldaa garlaa product detail error");
    }
  };
  useEffect(() => {
    getProduct(id);
  }, [refetch]);

  return (
    <>
      {product.map((com, i) => {
        return (
          <div
            key={`product` + i}
            className=" flex flex-col justify-center border-b border-dotted py-4"
          >
            <div className="flex gap-3  items-center">
              <p className="text-[14px] font-semibold">{com.user.firstname}</p>
              <Rating style={{ maxWidth: 100 }} value={com.starRating} />
            </div>
            <span className="text-[14px] text-[#71717A]">{com.comment}</span>
          </div>
        );
      })}
      <div className="bg-[#F4F4F5] p-6 flex flex-col gap-2 rounded-lg">
        <p className="font-semibold">Одоор үнэлэх</p>
        <Rating
          style={{ maxWidth: 150 }}
          value={comData.starRating}
          onChange={handleRating}
        />
        <p className="font-semibold">Сэтгэгдэл үлдээх</p>
        <textarea
          className="border w-full h-44 rounded-lg p-6"
          placeholder="Энд бичнэ үү"
          value={comData.comment}
          onChange={(e) => setComData({ ...comData, comment: e.target.value })}
        />
        <div>
          <Button className="bg-[#2563EB] py-2 px-9" onClick={signin}>
            Үнэлэх
          </Button>
        </div>
      </div>
    </>
  );
};
export default CommentSection;
