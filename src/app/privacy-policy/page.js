import Blogs from "@/components/Blogs/Blogs";
import ContactUs from "@/components/ContactUs/Contact-Us";
import Copyright from "@/components/Copyright/Copyright";
import Footer from "@/components/Footer/Footer";
import MetalValues from "@/components/MetalValues/Metal-Values";
import Navbar from "@/components/Navbar/Navbar";
import PrivacyPolicy from "@/components/PrivacyPolicy/Privacy-Policy";
import TermsOfService from "@/components/TermsOfService/Terms-Of-Service";
import { Suspense } from "react";

const PrivacyPolicypage = () => {
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
        <PrivacyPolicy />
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
export default PrivacyPolicypage;
