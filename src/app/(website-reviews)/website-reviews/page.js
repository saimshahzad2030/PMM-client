import Copyright from "@/components/Copyright/Copyright";
import Footer from "@/components/Footer/Footer";
import MetalValues from "@/components/MetalValues/Metal-Values";
import Navbar from "@/components/Navbar/Navbar";
import Reviews from "@/components/Reviews/Reviews";
import { fetchWebFeedbacks } from "../../../../services/website-feedback";
import { Suspense } from "react";
const WebsiteReviewspage = async () => {
  const reviews = await fetchWebFeedbacks(0, 6);
  return (
    <>
      <div className=" h-auto w-full bg-[#E3BB59]">
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
        </Suspense>
      </div>
      <div className="container mx-auto">
        <MetalValues />
      </div>
      <div className="w-full h-[1px] bg-gray-400"></div>
      <div className="container mx-auto">
        <Suspense fallback={<div>loading</div>}>
          <Reviews
            heading={"Share your thoughts and experiences."}
            text={
              "Your reviews are invaluable in helping others make informed decisions."
            }
            reviews={reviews?.websiteFeedbacks ? reviews?.websiteFeedbacks : []}
            total={reviews?.totalReviews}
          />
        </Suspense>
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

export default WebsiteReviewspage;
