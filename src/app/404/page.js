import Blogs from "@/components/Blogs/Blogs";
import Copyright from "@/components/Copyright/Copyright"; 
import Footer from "@/components/Footer/Footer"; 
import HowItWorks from "@/components/HowItWorks/How-It-Works";
import MetalValues from "@/components/MetalValues/Metal-Values";
import Navbar from "@/components/Navbar/Navbar";
import NotFound from "@/components/NotFound/404-Not-Found";
import Reviews from "@/components/Reviews/Reviews";

const NotFoundpage = () => {
  return (
    <>
      <div className=" h-auto w-full bg-[#E3BB59]">
      <Navbar />

    </div>
    <div className="container mx-auto">
      <MetalValues/> 

      </div>
    <div className="w-full h-[1px] bg-gray-400"></div>
    <div className="container mx-auto">
     <NotFound/>
      </div>
      <div className="w-full h-1 bg-[#E3BB59]"></div>
      
      <div className="container mx-auto">
      <Footer/>
      </div>
      <div className="w-full h-[2px] bg-gray-400"></div>
      <div className="container mx-auto">
        <Copyright/>
      </div></>
  )
}  

export default NotFoundpage