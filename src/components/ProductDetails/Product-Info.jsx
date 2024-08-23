"use client";
import React, { useEffect } from "react";
import { STAR } from "../../../constants/icons";
import Button from "../Button/Button";
import { deleteProduct } from "../../../services/product.services";
import { addToCart, removeFromCart } from "../../../services/cart.services";
import Cookies from "js-cookie";
import { IconButton } from "@mui/material";
import { Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Loader from "../Loader/Loader";
const ProductInfo = ({ product, cartItems }) => {
  console.log(product.sellerId);
  console.log(Cookies.get("id"));
  const [cart, setCart] = React.useState(cartItems);
  const [counter, setCounter] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  const [responseMessage, setResponseMessage] = React.useState(null);

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
  return (
    <div className="flex flex-col items-start  w-full col-span-4 px-2 h-auto">
      <h1 className="mt-[4px] lato-700 text-[18px] md:text-[16px] xl:text-[24px] text-gray-700 line-clamp-2">
        {product.description}
      </h1>

      <div className="mt-[5%] flex flex-row items-center ">
        {Array.from({ length: product.rating }, (_, index) => (
          <img className="w-5 h-auto mr-1" src={STAR.image} alt={STAR.name} />
        ))}
      </div>
      <div className="mt-[5%] flex flex-row items-center ">
        <h3 className="text-gray-800">$ {product.price}</h3>
        <h3 className="line-through text-gray-400 ml-4">
          $ {Math.ceil(Number(product.price) * 1.2)}
        </h3>
      </div>
      {product.sellerId != Cookies.get("id") && (
        <div className="mt-[5%] flex flex-col sm:flex-row items-center justify-between w-full my-8">
          <div className="w-auto md:w-auto grid grid-cols-3">
            <button
              className=" h-12 w-12 md:h-8 md:w-8 flex flex-col items-center justify-center button px-2 p-1 sm:p-2 border border-gray-400 text-gray-800 bg-white hover:bg-gray-800 hover:border-gray-800 hover:text-white transition-all duration-300"
              onClick={() => setCounter(counter > 1 ? counter - 1 : 0)}
            >
              -
            </button>
            <button className=" h-12 w-12 md:h-8 md:w-8 flex flex-col items-center justify-center button px-2 p-1 sm:p-2 border border-gray-400 text-gray-800 bg-white hover:bg-gray-800 hover:border-gray-800 hover:text-white transition-all duration-300">
              {counter}
            </button>
            <button
              className=" h-12 w-12 md:h-8 md:w-8 flex flex-col items-center justify-center button px-2 p-1 sm:p-2 border border-gray-400 text-gray-800 bg-white hover:bg-gray-800 hover:border-gray-800 hover:text-white transition-all duration-300"
              onClick={() =>
                setCounter(
                  counter === product.available ? counter : counter + 1
                )
              }
            >
              +
            </button>
          </div>

          {product.sellerId != Cookies.get("id") && (
            <button
              className="border-white w-full mt-4 sm:mt-0 sm:w-[30%] border px-2 p-1 sm:p-2 rounded-md text-white bg-[#E3BB59] hover:border-[#E3BB59]"
              onClick={async (e) => {
                console.log("hitte");
              }}
            >
              Buy now
            </button>
          )}
          {product.sellerId != Cookies.get("id") && (
            <button
              className="border-white w-full mt-4 sm:mt-0 sm:w-[30%] border px-2 p-1 sm:p-2 rounded-md text-white bg-[#E3BB59] hover:border-[#E3BB59]"
              onClick={async (e) => {
                // e.stopPropagation();
                if (Cookies.get("id") && true) {
                  if (
                    cart.some((c) => {
                      return c.productId == product.id;
                    })
                  ) {
                    console.log(cart, "cart");
                    console.log(
                      cart.filter((prev) => {
                        return prev.productId === product.id;
                      })[0].id,
                      "cartItems.filter((prev)=>{return prev.productId === product.id})[0].id"
                    );
                    const remove = await removeFromCart(
                      cart.filter((prev) => {
                        return prev.productId === product.id;
                      })[0].id,
                      setLoading
                    );
                    setOpen(true);
                    setResponseMessage(remove.message);
                    if (remove.deletedProduct) {
                      setCart((prevItems) =>
                        prevItems.filter((prev) => {
                          return prev.productId !== product.id;
                        })
                      );
                    }
                  } else {
                    console.log([product.id, "product.id"]);
                    const addCart = await addToCart(product.id, setLoading);

                    setOpen(true);
                    setResponseMessage(addCart?.message);
                    if (addCart.cartItem) {
                      setCart((prevItems) => [
                        ...prevItems,
                        {
                          id: addCart?.cartItem?.id,
                          productId: addCart?.cartItem?.productId,
                        },
                      ]);
                    }
                  }
                }
              }}
            >
              {!loading ? (
                cart.some((c) => {
                  return c.productId == product.id;
                }) == true ? (
                  "Remove from Cart"
                ) : (
                  "Add to Cart"
                )
              ) : (
                <Loader />
              )}
            </button>
          )}
        </div>
      )}

      <div className="mt-[5%] flex flex-col items-start">
        <p>Metal: {product.metalType}</p>
        <p className="mt-2">Model: {product.model}</p>
        <p className="mt-2">Availability: {product.available}</p>
      </div>
      <ul className="mt-10% list-disc list-inside  text-gray-700 pl-2   mt-4">
        {product.productHighlights.map((h) => (
          <li>{h.highlight}</li>
        ))}
      </ul>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={responseMessage}
        action={action}
      />
    </div>
  );
};

export default ProductInfo;
