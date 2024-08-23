import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

function Loader({ color, className }) {
  return (
    <div
      className={`flex flex-col items-center justify-center ${
        className ? className : ""
      }`}
    >
      <CircularProgress style={{ color: color ? color : "white" }} size={18} />
    </div>
  );
}

export default Loader;
