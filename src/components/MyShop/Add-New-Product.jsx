"use client";
import React from "react";
import RouteComponent from "../RouteComponent/Route-Component";
import { Backdrop } from "@mui/material";
import { ALERT, CROSS, DROPDOWN, UPLOAD_IMAGE } from "../../../constants/icons";
import { useRouter } from "next/navigation";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField, IconButton, InputAdornment, Input } from "@mui/material";
const validationSchema = Yup.object({
  grade: Yup.string(),
  thickness: Yup.string(),
  metalcontent: Yup.string(),
  diameter: Yup.string(),
  purity: Yup.string(),
  productname: Yup.string().required("Product Name is required"),
  Category: Yup.string().required("Product Category is required"),
});
const AddNewProduct = () => {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [submitButtonClicked, setSubmitButtonClicked] = React.useState(false);
  const [arrangeForDropOff, setArrangeForDropOff] = React.useState(false);
  const [backdropopen, setBackdropOpen] = React.useState(false);
  const [editCategory, setEditCategory] = React.useState("");
  const [imagesUpload, setImagesUpload] = React.useState(0);
  const [videosUpload, setVideosUpload] = React.useState(0);
  const [selectedImages, setSelectedImages] = React.useState([]); 
  const [selectedVideos, setSelectedVideos] = React.useState([]);
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const validImageTypes = ["image/jpeg", "image/png", "image/gif"];

    const newFiles = files.filter((file) =>
      validImageTypes.includes(file.type)
    );

    // Update the selected files and images upload count
    setSelectedImages([...selectedImages, ...newFiles]);
    setImagesUpload(imagesUpload + newFiles.length);
  };
  const handleVideoChange = (event) => {
    const files = Array.from(event.target.files);
    const validVideoTypes = ['video/mp4', 'video/webm', 'video/ogg'];

    const newFiles = files.filter(file => validVideoTypes.includes(file.type));

    // Update the selected files and videos upload count
    setSelectedVideos([...selectedVideos, ...newFiles]);
    setVideosUpload(videosUpload + newFiles.length);
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
  const handleFileUpload = () => {
    if (selectedImages.length > 0) {
      // Process the file upload here (e.g., send to server)
      console.log("Uploading:", selectedImages);
    } else {
      console.log("No files selected.");
    }
  };
  return (
    <div className="w-full flex flex-col items-start px-8  mb-12">
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
          productname: "",
          Category: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleBackdropClose();
        }}
      >
        {({ errors, touched, handleChange, handleBlur, values }) => (
          <Form className="w-full flex flex-col items-start ">
            <div className="w-full border border-gray-300 rounded-md flex flex-col items-start py-6 px-2 sm:px-4 md:px-12 my-4">
              <h2>Product Details</h2>
              <div className="flex flex-col items-center w-full mt-4">
                <TextField
                  fullWidth
                  id="productname"
                  name="productname"
                  label="Product Name"
                  type={"text"}
                  placeholder="Brand Name + Product Type + Key Features (Materials, Size, Model)"
                  value={values.grade}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    submitButtonClicked &&
                    touched.productname &&
                    Boolean(errors.productname)
                  }
                  helperText={
                    submitButtonClicked &&
                    touched.productname &&
                    errors.productname
                  }
                />
              </div>
              <div
                className="cursor-pointer flex flex-row items-center justify-between w-full mt-4 px-4  h-14 border border-gray-300 rounded-md "
                onClick={() => handleBackdropOpen()}
              >
                <p className="text-gray-500">Category</p>
                <img
                  className="w-4 h-auto "
                  src={DROPDOWN.image}
                  alt={DROPDOWN.name}
                />
              </div> 
                <div className="flex flex-col md:flex-row items-start w-full mt-4">
                  <input
                    type="file"
                    id="file-input"
                    onChange={handleFileChange}
                    className="hidden"
                    accept="image/*,application/pdf" // Adjust the file types as needed
                  />
                  <label className="text-gray-600 w-auto">Product Images</label>
                  <div className="w-full flex flex-row items-center mt-4 md:mt-0">
                    <label
                      htmlFor={imagesUpload >8 ? "" : "file-input"}
                      className="ml-2 md:ml-4 cursor-pointer flex flex-col items-center justify-center p-2 px-1 sm:p-4 border border-gray-300 rounded-sm text-gray-500"
                    >
                      <img
                        className="w-6 h-auto "
                        src={UPLOAD_IMAGE.image}
                        alt={UPLOAD_IMAGE.name}
                      />
                      <p className="text-center text-[12px] sm:text-[16px]">Add image</p>
                      <p className="text-center text-[12px] sm:text-[16px]">{`(${imagesUpload}/9)`}</p>
                    </label>
                    <ul className="  list-outside list-disc list-inside  text-[12px] sm:text-[16px] text-gray-700 pl-2 mb-3 ml-1 sm:ml-4">
                      <li>Size: 3:4 Image</li>
                      <li>File size: Maximum of 25mb</li>
                      <li>Format: Lorem impsum</li>
                    </ul>
                  </div>
                </div> 
              <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-9 w-full gap-2">
                {selectedImages.length > 0 && (
                  <>
                    {selectedImages.slice(0, 9).map((file, index) => (
                      <div key={index} className="p-2 flex flex-col items-end  col-span-1 ">
                        <img
                          className="w-4  h-auto object-cover   rounded-sm mb-2 cursor-pointer"
                          src={CROSS.image}
                          alt={CROSS.name}
                          onClick={(index)=>{
                            setImagesUpload(imagesUpload-1)
                            setSelectedImages(selectedImages.filter((image,indexOfImage)=>{ indexOfImage !== index}))
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
                <div className="flex flex-col md:flex-row items-start w-full">
                  <input
                    type="file"
                    id="video-input"
                    onChange={handleVideoChange}
                    className="hidden"
                    accept="video/*"  
                  />
                  <label className="text-gray-600 w-auto">Product Videos</label>
                  <div className="w-full flex flex-row items-center mt-4 md:mt-0">

                    <label
                      htmlFor={imagesUpload >8 ? "" : "video-input"}
                      className="ml-2 sm:ml-4 cursor-pointer flex flex-col items-center justify-center p-4 border border-gray-300 rounded-sm text-gray-500"
                    >
                      <img
                        className="w-6 h-auto "
                        src={UPLOAD_IMAGE.image}
                        alt={UPLOAD_IMAGE.name}
                      />
                      <p className="text-[12px] sm:text-[16px] text-center">Add Video</p>
                      <p className="text-[12px] sm:text-[16px]">{`(${videosUpload}/9)`}</p>
                    </label>
                    <ul className="  list-outside list-disc list-inside text-[12px] sm:text-[16px] text-gray-700 pl-2 mb-3 ml-2 sm:ml-4">
                      <li>Size: 3:4 Image</li>
                      <li>File size: Maximum of 25mb</li>
                      <li>Format: Lorem impsum</li>
                    </ul>
                  </div>
                </div>
                {/* <button
        onClick={handleFileUpload}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md"
      >
        Upload
      </button> */}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-9 w-full gap-2">
              {selectedVideos.length > 0 && (
        <div className="mt-2 text-gray-700 flex flex-wrap">
          {selectedVideos.slice(0, 9).map((file, index) => (
            <div key={index} className="p-2 flex flex-col items-end col-span-1">
              <img
                className="w-4 h-auto object-cover rounded-sm mb-2 cursor-pointer"
                src={CROSS.image}
                alt={CROSS.name}
                onClick={(index)=>{
                  setVideosUpload(videosUpload-1)
                  setSelectedVideos(selectedVideos.filter((image,indexOfImage)=>{ indexOfImage !== index}))
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

            <div className="w-full border border-gray-300 rounded-md flex flex-col items-start py-6 px-2 sm:px-6 md:px-12 my-4">
              <h2>Specification</h2>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="flex flex-col items-center col-span-1 w-full">
                  <TextField
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
                <div className="flex flex-col items-center col-span-1 w-full">
                  <TextField
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
                <div className="flex flex-col items-center ">
                  <TextField
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
                      submitButtonClicked &&
                      touched.thickness &&
                      errors.thickness
                    }
                  />
                </div>
                <div className="flex flex-col items-center ">
                  <TextField
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
                <div className="flex flex-col items-center ">
                  <TextField
                    fullWidth
                    id="purity"
                    name="purity"
                    label="Purity"
                    type={"text"}
                    value={values.thickness}
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
                className=" button border bg-[#E3BB59] border-[#E3BB59] text-white p-2   hover:text-[#E3BB59] hover:bg-white hover:border-[#E3BB59] transition-all duration-300 rounded-md"
                onClick={() => {
                  // setArrangeForDropOff(false);
                  // setArrangeForPickUp(true);
                  // handleBackdropOpen();
                  setSubmitButtonClicked(true);
                }}
              >
                Save and Publish
              </button>
            </div>
          </Form>
        )}
      </Formik>

      <Backdrop
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
      </Backdrop>
    </div>
  );
};

export default AddNewProduct;
