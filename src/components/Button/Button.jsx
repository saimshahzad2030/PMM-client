import React from "react";

const Button = ({
  
  type = "button",
  textColor,
  bgColor,
  padding,
  text,
  others,
  clickHandler,
  border,
  borderAfter,
  textAfter,
  bgAfter,
}) => {
  return (
    <button
      type={type}
      className={` ${others} text-${textColor} bg-${bgColor} ${padding} hover:text-${
        textAfter ? textAfter : bgColor
      } hover:bg-${bgAfter ? bgAfter : textColor} border-${
        border ? border : ""
      } hover:border-${
        borderAfter ? borderAfter : bgColor
      } transition-all duration-300 `}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

export default Button;
