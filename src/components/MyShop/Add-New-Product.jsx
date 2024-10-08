"use client";
import React from "react";
import RouteComponent from "../RouteComponent/Route-Component";

import { Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { useMediaQuery } from "@mui/material";
import {
  Backdrop,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import {
  ALERT,
  CROSS,
  DELETE_ICON,
  DROPDOWN,
  UPLOAD_IMAGE,
} from "../../../constants/icons";
import { useRouter } from "next/navigation";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField, IconButton, InputAdornment, Input } from "@mui/material";
import { ImagesearchRoller } from "@mui/icons-material";
import { addProduct } from "../../../services/product.services";
import Loader from "../Loader/Loader";
const validationSchema = Yup.object({
  grade: Yup.string(),
  thickness: Yup.string(),
  metalcontent: Yup.string(),
  diameter: Yup.string(),
  purity: Yup.string(),
  name: Yup.string().required("Product Name is required"),
  type: Yup.string().required("Product Category is required"),
  model: Yup.string("Must be a string"),
  available: Yup.number("Must be a Number").required("Required"),
  price: Yup.number("Must be a Number").required("Required"),
  productDetails: Yup.string("Must be a string").required("Required"),
  productHighlights: Yup.array().of(Yup.string()),
});
const AddNewProduct = () => {
  const isSmallScreen = useMediaQuery("(max-width:640px)");

  const router = useRouter();
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [submitButtonClicked, setSubmitButtonClicked] = React.useState(false);
  const [arrangeForDropOff, setArrangeForDropOff] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [backdropopen, setBackdropOpen] = React.useState(false);
  const [editCategory, setEditCategory] = React.useState("");
  const [imagesUpload, setImagesUpload] = React.useState(0);
  const [videosUpload, setVideosUpload] = React.useState(0);
  const [selectedImages, setSelectedImages] = React.useState([]);
  const [selectedVideos, setSelectedVideos] = React.useState([]);
  const [imageError, setImageError] = React.useState(null);
  const [videoError, setVideoError] = React.useState(null);
  const handleFileChange = (event, setFieldValue) => {
    const files = Array.from(event.target.files);
    const validImageTypes = ["image/jpeg", "image/png", "image/gif"];

    const newFiles = files.filter((file) =>
      validImageTypes.includes(file.type)
    );

    // Update the selected files and images upload count
    setSelectedImages([...selectedImages, ...newFiles]);
    setImagesUpload(imagesUpload + newFiles.length);
    setFieldValue("images", [...selectedImages, ...newFiles]);
  };
  const handleVideoChange = (event, setFieldValue) => {
    const files = Array.from(event.target.files);
    const validVideoTypes = ["video/mp4", "video/webm", "video/ogg"];

    const newFiles = files.filter((file) =>
      validVideoTypes.includes(file.type)
    );

    // Update the selected files and videos upload count
    setSelectedVideos([...selectedVideos, ...newFiles]);
    setVideosUpload(videosUpload + newFiles.length);
    setFieldValue("videos", [...selectedImages, ...newFiles]);
  };
  const handleBackdropClose = () => {
    setBackdropOpen(false);
  };
  const handleBackdropOpen = () => {
    setBackdropOpen(true);
  };
  const goBack = () => {
    router.back();
  };
  const [highlights, setHighlights] = React.useState([""]);

  const addHighlightField = () => {
    if (highlights.length < 5) {
      setHighlights([...highlights, ""]);
    }
  };

  const removeHighlightField = (index) => {
    const newHighlights = highlights.filter((_, i) => i !== index);
    setHighlights(newHighlights);
  };

  const handleHighlightChange = (index, value, setFieldValue) => {
    const newHighlights = [...highlights];
    newHighlights[index] = value;
    setHighlights(newHighlights);
    setFieldValue("productHighlights", newHighlights);
  };
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
    <div className="w-full flex flex-col items-start px-2 sm:px-8  mb-12">
      <RouteComponent
        parentRoute={"Home > My Shop >"}
        mainRoute={" New Product Listing"}
      />
      <div className="flex flex-row w-full bg-[#F2F2F2] my-4">
        <button
          className={` text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] w-6/12  button sm:w-6/12 md:w-4/12 border border-t-0 border-r-0 border-l-0 border-b-[#E3BB59] text-[#E3BB59] border-b-2 py-2 text-center `}
          onClick={() => {
            goBack();
          }}
        >
          {`< New Product Listing`}
        </button>
      </div>
      <Formik
        initialValues={{
          grade: "",
          thickness: "",
          metalcontent: "",
          diameter: "",
          purity: "",
          name: "",
          type: "",
          model: "",
          available: "",
          price: "",
          productDetails: "",
          images: [],
          videos: [],

          productHighlights: highlights,
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          values.images = selectedImages;
          values.videos = selectedVideos;
          values.productHighlights = highlights;
          if (values.images.length < 4) {
            setImageError("At least 4 images pls");
            return;
          }
          if (values.videos.length < 1) {
            setVideoError("At least one Video pls");
            return;
          }
          setVideoError(null);
          setImageError(null);

          const addNewProduct = await addProduct(values, setLoading);
          if (addNewProduct.newProduct) {
            setOpen(true);

            setResponseMessage(
              `${addNewProduct.message}. Redirecting you to your products section....`
            );
            setTimeout(() => {
              router.push("/my-account/my-shop");
            }, 3000);
          } else {
            setOpen(true);

            setResponseMessage(addNewProduct.message);
          }
        }}
      >
        {({
          errors,
          touched,
          handleChange,
          handleBlur,
          values,
          setFieldValue,
        }) => (
          <Form className="w-full flex flex-col items-start ">
            <div className="w-full border border-gray-300 rounded-md flex flex-col items-start py-6 px-2 sm:px-4 md:px-12 my-4">
              <h2>Product Details</h2>
              <div className="flex flex-col items-center w-full mt-4">
                <TextField
                  size={isSmallScreen ? "small" : "medium"}
                  fullWidth
                  id="name"
                  name="name"
                  label="Product Name"
                  type={"text"}
                  placeholder="Product Name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    submitButtonClicked && touched.name && Boolean(errors.name)
                  }
                  helperText={
                    submitButtonClicked && touched.name && errors.name
                  }
                />
              </div>
              <div className="flex flex-col items-center w-full mt-4">
                <FormControl
                  size={isSmallScreen ? "small" : "medium"}
                  fullWidth
                  error={
                    submitButtonClicked && touched.type && Boolean(errors.type)
                  }
                >
                  <InputLabel id="type-label">Metal Type</InputLabel>
                  <Select
                    labelId="type-label"
                    id="type"
                    name="type"
                    value={values.type}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Product Type"
                  >
                    <MenuItem value="gold">Gold</MenuItem>
                    <MenuItem value="silver">Silver</MenuItem>
                    <MenuItem value="platinum">Platinum</MenuItem>
                    <MenuItem value="palladium">Palladium</MenuItem>
                    <MenuItem value="rare">Rare</MenuItem>
                  </Select>
                  {submitButtonClicked &&
                    touched.type &&
                    Boolean(errors.type) && (
                      <div style={{ color: "red", fontSize: "12px" }}>
                        {errors.type}
                      </div>
                    )}
                </FormControl>
              </div>

              <div className="flex flex-col items-center w-full mt-4">
                <TextField
                  size={isSmallScreen ? "small" : "medium"}
                  fullWidth
                  id="model"
                  name="model"
                  label="model"
                  type={"text"}
                  placeholder="Model"
                  value={values.model}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    submitButtonClicked &&
                    touched.model &&
                    Boolean(errors.model)
                  }
                  helperText={
                    submitButtonClicked && touched.model && errors.model
                  }
                />
              </div>
              <div className="flex flex-col items-center w-full mt-4">
                <TextField
                  size={isSmallScreen ? "small" : "medium"}
                  fullWidth
                  id="available"
                  name="available"
                  label="Available"
                  type={"text"}
                  placeholder="Available"
                  value={values.available}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    submitButtonClicked &&
                    touched.available &&
                    Boolean(errors.available)
                  }
                  helperText={
                    submitButtonClicked && touched.available && errors.available
                  }
                />
              </div>

              <div className="flex flex-col items-center w-full mt-4">
                <TextField
                  size={isSmallScreen ? "small" : "medium"}
                  fullWidth
                  id="price"
                  name="price"
                  label="price"
                  type={"text"}
                  placeholder="price"
                  value={values.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    submitButtonClicked &&
                    touched.price &&
                    Boolean(errors.price)
                  }
                  helperText={
                    submitButtonClicked && touched.price && errors.price
                  }
                />
              </div>
              <div className="flex flex-col items-center w-full mt-4">
                <TextField
                  size={isSmallScreen ? "small" : "medium"}
                  fullWidth
                  id="productDetails"
                  name="productDetails"
                  label="Product Details"
                  type={"text"}
                  placeholder="Product Details"
                  value={values.productDetails}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    submitButtonClicked &&
                    touched.productDetails &&
                    Boolean(errors.productDetails)
                  }
                  helperText={
                    submitButtonClicked &&
                    touched.productDetails &&
                    errors.productDetails
                  }
                  multiline
                  minRows={1}
                />
              </div>

              <div className="flex flex-col items-center w-full mt-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center w-full mt-2">
                    <TextField
                      size={isSmallScreen ? "small" : "medium"}
                      fullWidth
                      label={`Product Highlight ${index + 1}`}
                      value={highlight}
                      onChange={(e) =>
                        handleHighlightChange(
                          index,
                          e.target.value,
                          setFieldValue
                        )
                      }
                      error={
                        submitButtonClicked &&
                        touched.productHighlights &&
                        Boolean(errors.productHighlights)
                      }
                      helperText={
                        submitButtonClicked &&
                        touched.productHighlights &&
                        errors.productHighlights
                      }
                    />
                    {index > 0 && (
                      <IconButton
                        onClick={() => removeHighlightField(index)}
                        className="ml-2"
                      >
                        <span>
                          <img
                            className="w-8 h-auto"
                            src={DELETE_ICON.image}
                            alt={DELETE_ICON.name}
                          />
                        </span>
                      </IconButton>
                    )}
                  </div>
                ))}
                {highlights.length < 5 && (
                  <button
                    type="button"
                    onClick={addHighlightField}
                    className="mt-2 text-blue-500"
                  >
                    Add Another Highlight
                  </button>
                )}
              </div>
              {/* <div
                className="cursor-pointer flex flex-row items-center justify-between w-full mt-4 px-4  h-14 border border-gray-300 rounded-md "
                onClick={() => handleBackdropOpen()}
              >
                <p className="text-gray-500">Category</p>
                <img
                  className="w-4 h-auto "
                  src={DROPDOWN.image}
                  alt={DROPDOWN.name}
                />
              </div>  */}

              <h2 className="mt-8">Specification</h2>
              <div className="flex flex-col items-center col-span-1 w-full mt-4">
                <TextField
                  size={isSmallScreen ? "small" : "medium"}
                  fullWidth
                  id="grade"
                  name="grade"
                  label="Grade"
                  type={"text"}
                  value={values.grade}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    submitButtonClicked &&
                    touched.grade &&
                    Boolean(errors.grade)
                  }
                  helperText={
                    submitButtonClicked && touched.grade && errors.grade
                  }
                />
              </div>
              <div className="flex flex-col items-center col-span-1 w-full mt-4">
                <TextField
                  size={isSmallScreen ? "small" : "medium"}
                  fullWidth
                  id="diameter"
                  name="diameter"
                  label="Diameter"
                  type={"text"}
                  value={values.diameter}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    submitButtonClicked &&
                    touched.diameter &&
                    Boolean(errors.diameter)
                  }
                  helperText={
                    submitButtonClicked && touched.diameter && errors.diameter
                  }
                />
              </div>
              <div className="flex flex-col items-center w-full mt-4">
                <TextField
                  size={isSmallScreen ? "small" : "medium"}
                  fullWidth
                  id="thickness"
                  name="thickness"
                  label="Thickness"
                  type={"text"}
                  value={values.thickness}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    submitButtonClicked &&
                    touched.thickness &&
                    Boolean(errors.thickness)
                  }
                  helperText={
                    submitButtonClicked && touched.thickness && errors.thickness
                  }
                />
              </div>
              <div className="flex flex-col items-center w-full mt-4">
                <TextField
                  size={isSmallScreen ? "small" : "medium"}
                  fullWidth
                  id="metalcontent"
                  name="metalcontent"
                  label="Metal Content"
                  type={"text"}
                  value={values.metalcontent}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    submitButtonClicked &&
                    touched.metalcontent &&
                    Boolean(errors.metalcontent)
                  }
                  helperText={
                    submitButtonClicked &&
                    touched.metalcontent &&
                    errors.metalcontent
                  }
                />
              </div>
              <div className="flex flex-col items-center w-full mt-4">
                <TextField
                  size={isSmallScreen ? "small" : "medium"}
                  fullWidth
                  id="purity"
                  name="purity"
                  label="Purity"
                  type={"text"}
                  value={values.purity}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    submitButtonClicked &&
                    touched.purity &&
                    Boolean(errors.purity)
                  }
                  helperText={
                    submitButtonClicked && touched.purity && errors.purity
                  }
                />
              </div>
              <div className="flex flex-col md:flex-row items-start w-full mt-4">
                <input
                  type="file"
                  id="file-input"
                  onChange={(e) => handleFileChange(e, setFieldValue)}
                  className="hidden"
                  accept="image/*,application/pdf" // Adjust the file types as needed
                />
                <label className="text-gray-600 w-auto">Product Images</label>
                <div className="w-full flex flex-row items-center mt-4 md:mt-0">
                  <label
                    htmlFor={imagesUpload > 8 ? "" : "file-input"}
                    className="ml-2 md:ml-4 cursor-pointer flex flex-col items-center justify-center p-2 px-1 sm:p-4 border border-gray-300 rounded-sm text-gray-500"
                  >
                    <img
                      className="w-6 h-auto "
                      src={UPLOAD_IMAGE.image}
                      alt={UPLOAD_IMAGE.name}
                    />
                    <p className="text-center text-[12px] sm:text-[16px]">
                      Add image
                    </p>
                    <p className="text-center text-[12px] sm:text-[16px]">{`(${imagesUpload}/9)`}</p>
                  </label>
                  <ul className=" list-disc list-inside  text-[12px] sm:text-[16px] text-gray-700 pl-2 mb-3 ml-1 sm:ml-4">
                    <li>Size: 3:4 Image</li>
                    <li>File size: Maximum of 25mb</li>
                    <li>Format: Lorem impsum</li>
                    {imageError && (
                      <li className="text-red-600 font-bold">{imageError}</li>
                    )}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-9 w-full gap-2">
                {selectedImages.length > 0 && (
                  <>
                    {selectedImages.slice(0, 9).map((file, index) => (
                      <div
                        key={index}
                        className="p-2 flex flex-col items-end  col-span-1 "
                      >
                        <img
                          className="w-4  h-auto object-cover   rounded-sm mb-2 cursor-pointer"
                          src={CROSS.image}
                          alt={CROSS.name}
                          onClick={() => {
                            setImagesUpload(imagesUpload - 1);
                            setSelectedImages(
                              selectedImages.filter(
                                (image, indexOfImage) => indexOfImage != index
                              )
                            );
                          }}
                        />
                        <img
                          src={URL.createObjectURL(file)}
                          alt={file.name}
                          className="w-fullh-auto object-cover   rounded-sm"
                        />
                      </div>
                    ))}
                  </>
                )}
              </div>
              <div className="flex flex-col md:flex-row items-start w-full mt-4">
                <div className="flex flex-col md:flex-row items-start w-full mt-12">
                  <input
                    type="file"
                    id="video-input"
                    onChange={(e) => handleVideoChange(e, setFieldValue)}
                    className="hidden"
                    accept="video/*"
                  />
                  <label className="text-gray-600 w-auto">Product Videos</label>
                  <div className="w-full flex flex-row items-center mt-4 md:mt-0">
                    <label
                      htmlFor={imagesUpload > 8 ? "" : "video-input"}
                      className="ml-2 sm:ml-4 cursor-pointer flex flex-col items-center justify-center p-4 border border-gray-300 rounded-sm text-gray-500"
                    >
                      <img
                        className="w-6 h-auto "
                        src={UPLOAD_IMAGE.image}
                        alt={UPLOAD_IMAGE.name}
                      />
                      <p className="text-[12px] sm:text-[16px] text-center">
                        Add Video
                      </p>
                      <p className="text-[12px] sm:text-[16px]">{`(${videosUpload}/9)`}</p>
                    </label>
                    <ul className="   list-disc list-inside text-[12px] sm:text-[16px] text-gray-700 pl-2 mb-3 ml-2 sm:ml-4">
                      <li>Size: 3:4 Image</li>
                      <li>File size: Maximum of 25mb</li>
                      <li>Format: Lorem impsum</li>
                      {videoError && (
                        <li className="text-red-600 font-bold">{videoError}</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-9 w-full gap-2">
                {selectedVideos.length > 0 && (
                  <div className="mt-2 text-gray-700 flex flex-wrap">
                    {selectedVideos.slice(0, 9).map((file, index) => (
                      <div
                        key={index}
                        className="p-2 flex flex-col items-end col-span-1"
                      >
                        <img
                          className="w-4 h-auto object-cover rounded-sm mb-2 cursor-pointer"
                          src={CROSS.image}
                          alt={CROSS.name}
                          onClick={(index) => {
                            setVideosUpload(videosUpload - 1);
                            setSelectedVideos(
                              selectedVideos.filter((image, indexOfImage) => {
                                indexOfImage !== index;
                              })
                            );
                          }}
                        />
                        <video
                          src={URL.createObjectURL(file)}
                          alt={file.name}
                          className="w-full h-auto object-cover rounded-sm"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* <div className='flex flex-col items-center '>
                <button className=" button bg-[#E3BB59] text-white p-2 w-full" type="submit" onClick={()=>setSubmitButtonClicked(true)}>
                  Update Password
                </button>
              </div> */}
            <div className="w-full flex flex-row items-center justify-end">
              <button
                className=" button border bg-white border-[#E3BB59] text-[#E3BB59] p-2  hover:text-white hover:bg-[#E3BB59] hover:border-[#E3BB59] transition-all duration-300 rounded-md mr-4"
                onClick={() => {
                  setArrangeForDropOff(true);
                  setArrangeForPickUp(false);
                  handleBackdropOpen();
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-[140px] button border bg-[#E3BB59] border-[#E3BB59] text-white p-2   hover:bg-[#ecca75] transition-all duration-300 rounded-md"
                onClick={() => {
                  setSubmitButtonClicked(true);
                }}
              >
                {loading ? <Loader color={"white"} /> : "Save and Publish"}
              </button>
            </div>
            <Snackbar
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              message={responseMessage}
              action={action}
            />
          </Form>
        )}
      </Formik>

      {/* <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropopen}
      >
        <div className="relative flex flex-col items-center w-full">
          {backdropopen && (
            <div className="form-container flex flex-col items-center justify-center  bg-white p-6 rounded-md w-11/12 sm:w-9/12 md:w-6/12  overflow-y-auto">
              <div className="w-full flex flex-row items-center justify-between ">
                <div className="flex flex-col items-center w-11/12  text-gray-800">
                  <TextField
                    fullWidth
                    id="editcategory"
                    name="editcategory"
                    label="Edit category"
                    type={"text"}
                    value={editCategory}
                    onChange={(e) => setEditCategory(e.target.value)}
                  />
                </div>
                <img
                  className="w-8 h-auto cursor-pointer"
                  src={CROSS.image}
                  alt={CROSS.name}
                  onClick={() => handleBackdropClose()}
                />
              </div>
              <div className="w-full rounded-md border border-gray-300 h-[300px] my-4"></div>
              <div className="flex flex-row items-center w-full justify-end">
                <button
                  className=" button border bg-white border-[#E3BB59] text-[#E3BB59] p-2 w-4/12 hover:text-white hover:bg-[#E3BB59] hover:border-[#E3BB59] transition-all duration-300 rounded-md"
                  onClick={() => {
                    // setArrangeForDropOff(false);
                    // setArrangeForPickUp(false);
                    handleBackdropClose();
                  }}
                >
                  Cancel
                </button>
                <button
                  className="ml-4 button border bg-[#E3BB59] border-[#E3BB59] text-white p-2 w-4/12 hover:text-[#E3BB59] hover:bg-white hover:border-[#E3BB59] transition-all duration-300 rounded-md"
                  onClick={() => {
                    // setArrangeForDropOff(false);
                    // setArrangeForPickUp(false);
                    handleBackdropClose();
                  }}
                >
                  Confirm
                </button>
              </div>
            </div>
            
          )}
            
        </div>
      </Backdrop> */}
    </div>
  );
};

export default AddNewProduct;
