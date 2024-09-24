import SingleBlog from "@/components/Blogs/Single-Blog";
import Copyright from "@/components/Copyright/Copyright";
import Footer from "@/components/Footer/Footer";
import MetalValues from "@/components/MetalValues/Metal-Values";
import Navbar from "@/components/Navbar/Navbar";
import { notFound } from "next/navigation";
import { ARTICLES } from "../../../../../constants/constants";
import { Suspense } from "react";

async function getBlogData(blogId) {
  const blog = ARTICLES.find((blog, index) => index == blogId);

  if (!blog) {
    return null;
  }
  return blog;
}

const BlogsPage = async ({ params }) => {
  const blogId = params["blog-id"];
  const blogData = await getBlogData(blogId);
  if (!blogData) {
    notFound();
  }

  return (
    <>
      <div className="h-auto w-full bg-[#E3BB59]">
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
        </Suspense>
      </div>
      <div className="container mx-auto">
        <MetalValues />
      </div>
      <div className="w-full h-[1px] bg-gray-400"></div>
      <div className="container mx-auto">
        <SingleBlog id={blogId} />
      </div>
      <div className="w-full h-1 bg-[#E3BB59]"></div>
      <div className="container mx-auto">
        <Footer />
      </div>
      <div className="w-full h-[2px] bg-gray-400"></div>
      <div className="container mx-auto">
        <Copyright />
      </div>
    </>
  );
};

export default BlogsPage;
