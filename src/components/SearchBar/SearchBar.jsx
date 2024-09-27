import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { fetchSearchedProducts } from "../../../services/product.services";
import { useRouter } from "next/navigation";

// const items = [
//   { label: "Apple", id: 1 },
//   { label: "Banana", id: 2 },
//   { label: "Cherry", id: 3 },
//   { label: "Date", id: 4 },
//   { label: "Elderberry", id: 5 },
// ];

function SearchBar({ setSearchLoading, setBackdropOpen }) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [items, setItems] = React.useState([]);
  const handleOptionSelect = (event, value) => {
    if (value != undefined) {
      setBackdropOpen(true);
      setSearchLoading(true);
      router.push(`/market-place/product-details/${value.id}`);
    }
  };
  return (
    <div className="w-full flex flex-col items-center  ">
      <Autocomplete
        size="small"
        freeSolo
        options={items}
        getOptionLabel={(option) => option.name}
        sx={{ width: "100%" }}
        onChange={handleOptionSelect}
        renderInput={(params) => (
          <TextField
            size="small"
            {...params}
            label="Search"
            variant="outlined"
            fullWidth
            onChange={async (event) => {
              if (event.target.value != "") {
                const productSearch = await fetchSearchedProducts(
                  event.target.value,
                  setItems
                );
              }
            }}
            InputProps={{
              ...params.InputProps,
              style: {
                color: "#ffffff", // White text
              },
            }}
            InputLabelProps={{
              style: { color: "#ffffff" }, // White label text
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#ffffff", // White border color
                },
                "&:hover fieldset": {
                  borderColor: "#ffffff", // White border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#ffffff", // White border color when focused
                },
              },
            }}
          />
        )}
      />
    </div>
  );
}

export default SearchBar;
