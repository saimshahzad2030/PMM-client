"use client";
import React, { useEffect } from "react";
import RouteComponent from "../RouteComponent/Route-Component";
import {
  CLIENT_REVIEWS,
  MARKET_PLACE_PAGE,
} from "../../../constants/constants";
import SingleSlide from "./Single-Slide";
import ProductInfo from "./Product-Info";
import ProductDetails from "./Product-Details";
import ProductSpecification from "./Product-Specification";
import RelatedPorducts from "./Related-Porducts";
import JoinNowSection from "../JoinNowSection/Join-Now-Section";
import CustomerReviews from "../CustomerReviews/Customer-Reviews";
const Product = ({ product, related, reviews, cartItems }) => {
  const [productDetailsSelected, setProductDetailsSelected] =
    React.useState(true);

  return (
    <div className="px-8">
      <RouteComponent
        mainRoute={"Product details"}
        parentRoute={"Home > MarketPlace >"}
      />
      <div className="grid grid-cols-4 md:grid-cols-8 w-full gap-y-4 gap-x-2 my-8">
        <div className="flex flex-col items-center  h-[90vh]  md:h-[400px] lg:h-[500px] w-full col-span-1  overflow-y-scroll ">
          {product.images.map((img) => (
            <div
              className={`flex flex-col items-center justify-center h-[20vh] w-full md:h-[90px] lg:h-[120px] bg-[#F2F2F2] mb-2`}
            >
              <img
                className="w-full h-auto"
                src={img.image}
                alt={product.name}
              />
            </div>
          ))}
        </div>
        <div className="w-full col-span-3 h-[90vh]  md:h-[400px] lg:h-[500px]">
          <SingleSlide
            images={product.images}
            imageName={product.name}
            direction={"horizontal"}
            loop={true}
            slidesPerView={1}
            navigation={true}
            imageWidth={"w-full"}
          />
        </div>
        <ProductInfo product={product} cartItems={cartItems} />
      </div>
      <div className="flex flex-row w-full bg-[#F2F2F2] my-4">
        <button
          className={`text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] button w-6/12 border border-t-0 border-r-0 border-l-0 ${
            productDetailsSelected
              ? "border-b-[#E3BB59] text-[#E3BB59] border-b-2"
              : "border-b-0 text-[#6D6D6D]"
          } py-2 text-center `}
          onClick={() => {
            setProductDetailsSelected(true);
          }}
        >
          Product Details
        </button>
        <button
          className={`text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] button w-6/12 border border-t-0 border-r-0 border-l-0 ${
            !productDetailsSelected
              ? "border-b-[#E3BB59] text-[#E3BB59] border-b-2"
              : "border-b-0 text-[#6D6D6D]"
          } py-2 text-center `}
          onClick={() => {
            setProductDetailsSelected(false);
          }}
        >
          Product Specifiation
        </button>
      </div>
      {productDetailsSelected && (
        <ProductDetails
          details={product.productDetails}
          highlights={product.productHighlights}
        />
      )}
      {!productDetailsSelected && (
        <ProductSpecification specification={product.Specifications} />
      )}
      {related.length > 0 && (
        <RelatedPorducts products={related} cartItems={cartItems} />
      )}
      <JoinNowSection
        text={
          "Join Precious Metal Market today and experience the easiest way to buy and sell precious metals online."
        }
        clickHandler={() => {}}
      />
      {reviews.length > 0 && (
        <CustomerReviews
          heading={"Product Reviews"}
          text={
            "Buy and Sell Precious Metals with Confidence and Peace of Mind"
          }
          reviews={reviews}
        />
      )}
    </div>
  );
};

export default Product;
