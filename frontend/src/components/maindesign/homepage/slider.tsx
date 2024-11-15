import { ProductContext } from "@/app/context/product-context";
import Link from "next/link";
import { useContext } from "react";

const Slider = () => {
  const { products } = useContext(ProductContext);
  return (
    <div>
      <div className="h-[446px] relative bg-[url('/image/1st.png')] bg-cover bg-[center_top_-40rem] bg-no-repeat px-52 py-7 flex flex-col justify-end gap-4">
        <p className="text-xl">Wild Flower Hoodie</p>
        <p className="text-4xl font-bold">120000₮</p>
      </div>
      <div className="m-auto container grid grid-cols-4 gap-5 my-10 grid-row-6">
        {products?.slice(0, 14).map((product, i) => {
          return (
            <>
              {i === 6 || i === 7 ? (
                <div key={i} className="col-span-2 row-span-2">
                  <Link href={"/" + product._id} className="h-full w-full">
                    <div className="h-[692px] w-full rounded-2xl overflow-hidden">
                      <img src={product.images[0]} alt="" className="w-full" />
                    </div>
                    <p>{product.name}</p>
                    <p className="font-bold">{product.price}</p>
                  </Link>
                </div>
              ) : (
                <Link href={"/" + product._id}>
                  <div
                    key={`eehehe` + i}
                    className="h-[331px] w-full rounded-2xl overflow-hidden"
                  >
                    <img src={product.images[0]} alt="" className="w-full" />
                  </div>

                  <p>{product.name}</p>
                  <p className="font-bold">{product.price}</p>
                </Link>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Slider;
