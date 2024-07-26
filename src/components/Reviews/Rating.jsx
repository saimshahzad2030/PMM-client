import React from "react";
import StarIcon from "@mui/icons-material/Star";
import Rating from "@mui/material/Rating";
const RatingComponent = ({ rating, setRating }) => {
  return (
    <Rating
      name="rating"
      value={rating}
      onChange={(event, newValue) => {
        setRating(newValue);
      }}
      sx={{ margin: "16px 0 " }}
      icon={<StarIcon style={{ color: "#E3BB59" }} fontSize="inherit" />}
    />
  );
};

export default RatingComponent;
