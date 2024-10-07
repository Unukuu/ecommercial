import { Dispatch, SetStateAction } from "react";
import { FaStar } from "react-icons/fa";
const RatingStar = ({
  rate,
  setRate,
}: {
  rate: number;
  setRate: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div>
      <button
        className={`${rate > 0 ? "text-[#FDE047]" : ""}`}
        onClick={() => {
          setRate(1);
        }}
      >
        <FaStar />
      </button>
      <button
        className={`${rate > 1 ? "text-[#FDE047]" : ""}`}
        onClick={() => {
          setRate(2);
        }}
      >
        <FaStar />
      </button>
      <button
        className={`${rate > 2 ? "text-[#FDE047]" : ""}`}
        onClick={() => {
          setRate(3);
        }}
      >
        <FaStar />
      </button>
      <button
        className={`${rate > 3 ? "text-[#FDE047]" : ""}`}
        onClick={() => {
          setRate(4);
        }}
      >
        <FaStar />
      </button>
      <button
        className={`${rate > 4 ? "text-[#FDE047]" : ""}`}
        onClick={() => {
          setRate(5);
        }}
      >
        <FaStar />
      </button>
    </div>
  );
};
export default RatingStar;
