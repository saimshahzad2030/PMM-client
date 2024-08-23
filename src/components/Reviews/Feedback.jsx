import React from "react";
import TextField from "@mui/material/TextField";
import Button from "../Button/Button";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Snackbar from "@mui/material/Snackbar";
import RatingComponent from "./Rating";
import { useMediaQuery, useTheme } from "@mui/material";
import { addFeedback } from "../../../services/website-feedback";
import Cookies from "js-cookie";
import Loader from "../Loader/Loader";
const Feedback = ({ setFeedbacks, setSubmitANewFeedback }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [feedback, setFeedback] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [rating, setRating] = React.useState(null);
  const handleSubmit = async () => {
    console.log("Rating:", rating);
    console.log("Feedback:", feedback);
    const response = await addFeedback(
      feedback,
      rating,
      Cookies.get("token"),
      setLoading
    );
    if (response.feedback) {
      setFeedbacks((prevFeedbacks) => [...prevFeedbacks, response.feedback]);
      setSubmitANewFeedback(false);
    }
    handleClick();
  };

  //snackbar code after submitting like an alert
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <div className="flex flex-col items-start w-full">
      <div className="flex flex-col items-center w-full">
        <RatingComponent rating={rating} setRating={setRating} />
      </div>
      <TextField
        id="outlined-textarea"
        label="Enter your feedback"
        placeholder="What can we do to improve your experience? *"
        multiline
        rows={isSmallScreen ? 4 : 10}
        value={feedback}
        sx={{ width: "100%" }}
        onChange={(e) => setFeedback(e.target.value)}
      />
      <Button
        others={"border p-1 px-2 sm:p-2 mt-4 rounded-md"}
        text={loading ? <Loader /> : "Submit my feedback"}
        bgColor={"[#E3BB59]"}
        textColor={"white"}
        border={"[#E3BB59]"}
        borderAfter={"[#E3BB59]"}
        clickHandler={handleSubmit}
      />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Feedback submitted"
        action={action}
      />
    </div>
  );
};

export default Feedback;
