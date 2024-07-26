import Copyright from "@/components/Copyright/Copyright"; 
import Footer from "@/components/Footer/Footer"; 
import MetalValues from "@/components/MetalValues/Metal-Values";
import Navbar from "@/components/Navbar/Navbar";
import Reviews from "@/components/Reviews/Reviews";

const WebsiteReviewspage = () => {
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
     <Reviews heading={'Share your thoughts and experiences.'}
     text={'Your reviews are invaluable in helping others make informed decisions.'}
     /> 
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

export default WebsiteReviewspage