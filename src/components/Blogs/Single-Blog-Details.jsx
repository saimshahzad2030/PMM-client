import React from "react";
import {
  ARTICLES,
  ARTICLES_IMAGE,
  BLOG_SOCIALS,
} from "../../../constants/constants";
import { DATE } from "../../../constants/icons";
import JoinNowSection from "../JoinNowSection/Join-Now-Section";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material"; // Ensure this import is correct
import { useRouter } from "next/navigation";

const SingleBlogDetails = ({ blog }) => {
  const router = useRouter()
  const blogClickHandler = (id)=>{
    router.push(`/blogs/${id}`)
  }
  // {
  //   description: "Understanding the Value of Gold in Today’s Economy",
  //   startingText:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lectus mauris, tincidunt nec efficitur sit amet, sollicitudin et risus. Nam nec lobortis nisi. Maecenas porttitor tristique lacinia. Quisque congue, nunc a molestie maximus, mauris justo porta nisl, eu aliquam libero urna quis ex. Suspendisse potenti. In volutpat nulla sagittis tortor finibus, vitae fringilla metus faucibus. Suspendisse et nunc eu ex efficitur rhoncus. Mauris venenatis, turpis non sagittis imperdiet, ipsum elit cursus.",
  //   by: "Cameron Williamson",
  //   date: "8 Sep, 2020",
  //   socialLinks: [
  //     {
  //       facebook: "",
  //       insta: "",
  //       twitter: "",
  //       linkedin: "",
  //     },
  //   ],
  //   quotions:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lectus mauris, tincidunt nec efficitur sit amet, sollicitudin et risus. ",
  //   textAfterQuotions:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lectus mauris, tincidunt nec efficitur sit amet, sollicitudin et risus. Nam nec lobortis nisi. Maecenas porttitor tristique lacinia. Quisque congue, nunc a molestie maximus, mauris justo . Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lectus mauris, tincidunt nec efficitur sit amet, sollicitudin et risus. Nam nec lobortis nisi. Maecenas porttitor tristique lacinia. Quisque congue, nunc a molestie maximus, mauris justo porta nisl, eu aliquam libero urna quis ex. Suspendisse potenti. In volutpat nulla sagittis tortor finibus, vitae fringilla metus faucibus. Suspendisse et nunc eu ex efficitur rhoncus. Mauris venenatis, turpis non sagittis imperdiet, ipsum elit cursus.",
  //   images: [
  //     { name: "article", image: "/assets/articles-image.png" },
  //     { name: "article", image: "/assets/articles-image.png" },
  //   ],
  //   blogPosterImage,
  //   textAfterImaage:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lectus mauris, tincidunt nec efficitur sit amet, sollicitudin et risus. Nam nec lobortis nisi. Maecenas porttitor tristique lacinia. Quisque congue, nunc a molestie maximus, mauris justo . Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lectus mauris, tincidunt nec efficitur sit amet, sollicitudin et risus. Nam nec lobortis nisi. Maecenas porttitor tristique lacinia. Quisque congue, nunc a molestie maximus, mauris justo porta nisl, eu aliquam libero urna quis ex. Suspendisse potenti. In volutpat nulla sagittis tortor finibus, vitae fringilla metus faucibus. Suspendisse et nunc eu ex efficitur rhoncus. Mauris venenatis, turpis non sagittis imperdiet, ipsum elit cursus.",
  // },
  return (
    <div className="flex flex-col items-center w-full">
      <img
        className=" rounded-lg w-full h-auto max-h-[400px] mt-4"
        src={ARTICLES_IMAGE.image}
        alt={ARTICLES_IMAGE.name}
      />
      <div className="w-full grid grid-cols-8 gap-x-2 pb-2 pt-12">
        <div className="col-span-8 md:col-span-5 lg:col-span-6 w-full flex flex-col items-start">
          <div className="flex flex-row items-center">
            <img
              className=" w-6 h-auto mr-4"
              src={DATE.image}
              alt={DATE.name}
            />
            <span>{blog.date}</span>
          </div>

          <h2 className=" mt-4 lato-700 text-[24px] md:text-[24px] xl:text-[32px]">
            {blog.description}
          </h2>
          <div className="flex flex-row items-center w-full justify-between my-4">
            <div className="flex flex-row items-center">
              <img
                className=" rounded-full h-8 w-8  mr-4"
                src={blog.blogPosterImage}
                alt={"blogger"}
              />
              <span>{blog.by}</span>
            </div>
            <div className="flex flex-row items-center  ">
              {BLOG_SOCIALS.map((social, index) => (
                <img
                  className=" w-6 h-auto mr-2 cursor-pointer "
                  src={social.image}
                  alt={social.name}
                  onClick={() => {}}
                />
              ))}
            </div>
          </div>

          <p>{blog.textBeforeImage}</p>
          <div className=" px-4 py-2 my-4 flex flex-row items-center justify-between border border-l-[#FA8232] w-11/12 border-t-0 border-r-0 border-b-0 bg-[#FBF5E6]">
            <p className="lato-700 text-[60px] text-[#B69647] mr-4 md:mr-12 text-center">
              &ldquo;
            </p>
            <p className="text-[] md:text-[16px]">{blog.quotions}</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <img
              className=" w-[48%] h-auto rounded-lg"
              src={ARTICLES_IMAGE.image}
              alt={ARTICLES_IMAGE.name}
            />
            <img
              className=" w-[48%] h-auto rounded-lg"
              src={ARTICLES_IMAGE.image}
              alt={ARTICLES_IMAGE.name}
            />
          </div>
          <p className="mb-16 mt-8">{blog.textAfterImage}</p>
        </div>
        <div className="col-span-8 md:col-span-3 lg:col-span-2 w-full flex flex-col items-start">
          <div className="flex flex-col items-center p-4 border border-gray-400 rounded-lg w-full">
            <h2 className="lato-700 text-gray-700 w-full mb-4">Search</h2>
            <TextField
              fullWidth
              id="searcg"
              name="searcg"
              label="Search"
              type="text"
              value={""}
              onChange={() => {}}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility">
                      <Search />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className=" flex flex-col items-center p-4 border border-gray-400 rounded-lg w-full mt-4 ">
            <h2 className="lato-700 text-gray-700 w-full mb-4">
              Related Blogs
            </h2>
            <div className="form-container w-full flex flex-col items-start max-h-[260px] overflow-y-scroll">
              {ARTICLES.map((article,index) => (
                <div className="w-full flex flex-row items-center md:justify-between mt-4 cursor-pointer"
                  onClick={()=>blogClickHandler(index)}
                >
                  <img
                    className="  w-4/12 h-auto mr-2 "
                    src={ARTICLES_IMAGE.image}
                    alt={ARTICLES_IMAGE.name}
                  />
                  <div className="flex flex-col items-start   ">
                    <h3 className="text-[12px] sm:text-[18px] md:text-[12px] text-gray-800">
                      {article.description}
                    </h3>
                    <p className="text-[12px] sm:text-[16px] md:text-[12px] text-gray-500">
                      {article.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className=" flex flex-col items-center p-4 border border-gray-400 rounded-lg w-full mt-4 ">
            <h2 className="lato-700 text-gray-700 w-full mb-4">Recent Blogs</h2>
            <div className="form-container w-full flex flex-col items-start max-h-[260px] overflow-y-scroll">
              {ARTICLES.map((article,index) => (
                <div className="w-full flex flex-row items-center md:justify-between mt-4  cursor-pointer"
                onClick={()=>blogClickHandler(index)}
                >
                  <img
                    className="  w-4/12 h-auto mr-2 "
                    src={ARTICLES_IMAGE.image}
                    alt={ARTICLES_IMAGE.name}
                  />
                  <div className="flex flex-col items-start   ">
                    <h3 className="text-[12px] sm:text-[18px] md:text-[12px] text-gray-800">
                      {article.description}
                    </h3>
                    <p className="text-[12px] sm:text-[16px] md:text-[12px] text-gray-500">
                      {article.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <JoinNowSection
        text={
          "Join Precious Metal Market today and experience the easiest way to buy and sell precious metals online."
        }
        clickHandler={() => {}}
      />
    </div>
  );
};

export default SingleBlogDetails;
