"use client";
import React, { useState } from "react";
import { HEART, HEART_FILLED } from "../../../constants/icons";
import { useRouter } from "next/navigation";
import {
  addToFavourites,
  removeFromFavourites,
} from "../../../services/favourites.services";
import Cookies from "js-cookie";
import { deleteProduct } from "../../../services/product.services";
import { addToCart, removeFromCart } from "../../../services/cart.services";
import { IconButton } from "@mui/material";
import { Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const SingleProduct = ({
  product,
  buttonText,
  setProducts,
  cartItems,
  setCartProducts,
}) => {
  const router = useRouter();
  const userId = Cookies.get("id");
  const [loading, setLoading] = React.useState(false);
  const productClickHandler = (id) => {
    router.push(`/market-place/product-details/${id}`);
  };

  const [heartLogo, setHeartLogo] = React.useState(
    product.favourites.some(
      (favourite) => favourite.userId == Cookies.get("id")
    )
      ? HEART_FILLED
      : HEART
  );
  const [responseMessage, setResponseMessage] = useState(null);

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
    <div
      className="flex flex-col items-center w-full cursor-pointer"
      onClick={async () => {
        productClickHandler(product.id);
      }}
    >
      <div className="flex flex-col items-center w-11/12 bg-gray-100 min-h-[250px]">
        <div className="min-w-full h-auto  relative flex flex-col items-center justify-center bg-gray-200">
          <img
            className="w-fit h-auto   min-h-[200px]  max-h-[200px] py-4 px-4"
            src={product.images[0].image}
            alt={product.name}
          />
          <img
            className="w-6 h-6 absolute right-3 top-3 cursor-pointer"
            src={heartLogo.image}
            alt={heartLogo.name}
            onClick={async (e) => {
              e.stopPropagation();
              console.log(product.favourites);
              console.log(
                product.favourites.some(
                  (favourite) => favourite.userId == Cookies.get("id")
                ),
                "product.favourites.some((favourite) => favourite.userId == Cookies.get(id))"
              );
              if (
                product.favourites.some(
                  (favourite) => favourite.userId == Cookies.get("id")
                )
              ) {
                const response = await removeFromFavourites(product.id);
                const newFavourites = product.favourites.filter((favourite) => {
                  return favourite.userId != Cookies.get("id");
                });
                setProducts((prevProductsList) =>
                  prevProductsList.map((p) => {
                    if (p.id == product.id) {
                      // Return the updated product with the new favourites array
                      return {
                        ...p,
                        favourites: newFavourites,
                      };
                    }
                    // Return the product as is if the id doesn't match
                    return p;
                  })
                );

                console.log(response);
                setHeartLogo(HEART);
              } else {
                const response = await addToFavourites(product.id);
                const newFavourites = { userId: userId, productId: product.id };
                setProducts((prevProductsList) =>
                  prevProductsList.map((p) => {
                    if (p.id == product.id) {
                      // Return the updated product with the new favourites array
                      return {
                        ...p,
                        favourites: [...p.favourites, newFavourites],
                      };
                    }
                    // Return the product as is if the id doesn't match
                    return p;
                  })
                );
                // setProducts((prevItems) => {
                //   (prev)=>[
                //     ...prevItems,
                //     { id: response?.cartItem?.id,productId:addCart?.cartItem?.productId },
                //   ]
                // });

                console.log(response);
                setHeartLogo(HEART_FILLED);
              }
            }}
          />
        </div>
        <div className="flex flex-col w-full px-2 overflow-hidden">
          <span className="text-[10px] text-[#FF0F00] mt-2">Best Seller</span>
          <p className="text-[14px] md:text-[13px] xl:text-[16px] line-clamp-2 min-h-[50px]">
            {product.description}
          </p>
          <span className="w-full text-end lato-700 text-[14px] md:text-[12px] xl:text-[17px]">
            $ {product.price}
          </span>
          <div className="flex flex-col items-center w-full mb-2">
          
            {userId || userId != product.sellerId ? (
              <button
                className="button bg-[#E3BB59] w-11/12 py-2 rounded-[8px] mt-2 border border-white text-white hover:text-[#E3BB59] hover:bg-white hover:border-[#E3BB59] transition-all duration-300"
                onClick={async (e) => {
                  e.stopPropagation();

                  if (buttonText && true) {
                    const removeProduct = await deleteProduct(product.id);
                    setProducts((prevItems) =>
                      prevItems.filter((item) => item.id !== product.id)
                    );
                  } else {
                    if (
                      cartItems.some((cart) => {
                        return cart.productId == product.id;
                      })
                    ) {
                      const remove = await removeFromCart(
                        cartItems.filter((prev) => {
                          return prev.productId === product.id;
                        })[0].id,
                        setLoading
                      );
                      setOpen(true);
                      setResponseMessage(remove.message);

                      setCartProducts((prevItems) =>
                        prevItems.filter((prev) => {
                          return prev.productId !== product.id;
                        })
                      );
                    } else {
                      const addCart = await addToCart(product.id, setLoading);
                      setOpen(true);

                      setResponseMessage(addCart.message);
                      setCartProducts((prevItems) => [
                        ...prevItems,
                        {
                          id: addCart?.cartItem?.id,
                          productId: addCart?.cartItem?.productId,
                        },
                      ]);
                    }
                  }
                }}
              >
                {loading
                  ? "loading"
                  : buttonText
                  ? buttonText
                  : cartItems.some((cart) => {
                      return cart.productId == product.id;
                    })
                  ? "Remove from Cart"
                  : "Add to cart"}
              </button>
            ) : (
              <button
                className="button bg-[#E3BB59] w-11/12 py-2 rounded-[8px] mt-2 text-white"
                disabled
              >
                Your product
              </button>
            )}
          </div>
        </div>
      </div>
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

export default SingleProduct;
