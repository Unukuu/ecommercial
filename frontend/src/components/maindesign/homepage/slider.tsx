import { ProductContext } from "@/app/context/product-context";
import Link from "next/link";
import { useContext } from "react";

const Slider = () => {
  const { products } = useContext(ProductContext);
  console.log(products);
  return (
    <div>
      <div className="h-[446px] relative bg-[url('/image/1st.png')] bg-cover bg-[center_top_-40rem] bg-no-repeat px-52 py-7 flex flex-col justify-end gap-4">
        <p className="text-xl">Wild Flower Hoodie</p>
        <p className="text-4xl font-bold">120'000₮</p>
      </div>
      <div className="m-auto container grid grid-cols-4 gap-5 my-10 grid-row-6">
        {products?.map((product, i) => {
          return (
            <>
              <Link href={"/" + product._id}>
                {i === 6 || i === 7 ? (
                  <div className="col-span-2 row-span-2 bg-red-400">
                    <div className="h-[692px] w-full rounded-2xl overflow-hidden">
                      <img src={product.images[0]} alt="" className="w-full" />
                    </div>
                    <p>{product.name}</p>
                    <p className="font-bold">{product.price}</p>
                  </div>
                ) : (
                  <div>
                    <div className="h-[331px] w-full rounded-2xl overflow-hidden">
                      <img src={product.images[0]} alt="" className="w-full" />
                    </div>

                    <p>{product.name}</p>
                    <p className="font-bold">{product.price}</p>
                  </div>
                )}
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Slider;
