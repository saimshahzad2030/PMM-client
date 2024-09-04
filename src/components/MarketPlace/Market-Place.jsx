"use client";
import React, { useEffect } from "react";
import { MARKET_PLACE_PAGE, METAL_COIN } from "../../../constants/constants";
import { HEART } from "../../../constants/icons";
import Link from "next/link";
import SingleProduct from "../Products/SingleProduct";
import { useRouter } from "next/navigation";
const MarketPlace = ({ products, cartItems }) => {
  const [productsList, setProductsList] = React.useState(products);

  const router = useRouter();
  const productClickHandler = (id) => {
    router.push(`/market-place/product-details/${id}`);
  };
  return (
    <div className="flex flex-col items-center w-full my-8 mt-16">
      <h1 className=" lato-700 text-[24px] md:text-[32px] xl:text-[40px]">
        Market Place
      </h1>
      {productsList?.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-4 w-full gap-y-12 md:gap-y-8  px-4">
            {productsList?.map((mp, index) => (
              <SingleProduct
                key={mp.id}
                product={mp}
                productClickHandler={productClickHandler}
                setProducts={setProductsList}
              />
            ))}
          </div>
          <Link href={"/market-place"} className="text-[#E3BB59] underline ">
            View More
          </Link>
        </>
      ) : (
        <>
          <h2 className="text-[16px] w-full text-center font-bold mt-2">
            No Products to show
          </h2>
        </>
      )}
    </div>
  );
};

export default MarketPlace;
