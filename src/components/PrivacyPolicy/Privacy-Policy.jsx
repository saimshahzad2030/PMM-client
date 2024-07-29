"use client";
import React from "react";
import RouteComponent from "../RouteComponent/Route-Component";
import JoinNowSection from "../JoinNowSection/Join-Now-Section";

const PrivacyPolicy = () => {
  return (
    <div className="px-8 w-full flex flex-col items-start mb-12">
      <RouteComponent parentRoute={"Home >"} mainRoute={"Privacy Policy"} />
      <h1 className=" lato-700 text-[18px] md:text-[20px] xl:text-[24px] w-full">
        Effective Date: January 1, 2024
      </h1>
      <p className="my-4 text-[18px] md:text-[20px] xl:text-[24px]">
        Last Reviewed: January 1, 2024
      </p>
      <h3 className="lato-700 mt-2">Introduction</h3>
      <p>
        [Your Company Name] ("we", "us", "our") is committed to protecting your
        privacy. This Privacy Policy explains how we collect, use, disclose, and
        safeguard your information when you use our mobile application, [Your
        App Name] ("the App"). By accessing or using the App, you agree to the
        terms of this Privacy Policy.
      </p>

      <h3 className="lato-700 mt-4">Information We Collect</h3>
      <p>Personal Information</p>
      <p>
        When you register for an account or use our services, we may collect
        personal information, including but not limited to:
      </p>
      <ul className="  list-outside list-disc list-inside text-[16px] text-gray-700 pl-2 mb-3">
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Payment information</li>
      </ul>
      <p>Non-Personal Information</p>
      <p>
        We may also collect non-personal information that does not identify you
        individually, such as:
      </p>
      <ul className="  list-outside list-disc list-inside text-[16px] text-gray-700 pl-2 mb-3">
        <li>Device information (e.g., device ID, operating system)</li>
        <li>Usage data (e.g., pages viewed, actions taken within the App)</li>
        <li>Phone Location data (e.g., IP address, GPS coordinates)</li>
      </ul>

      <h3 className="lato-700 mt-4">How We Use Your Information</h3>
      <p>Personal Information</p>
      <p>We use your personal information to:</p>
      <ul className="  list-outside list-disc list-inside text-[16px] text-gray-700 pl-2 mb-3">
        <li>Create and manage your account</li>
        <li>Process and fulfill your orders</li>
        <li>Communicate with you regarding your orders and account</li>
        <li>Provide customer support</li>
        <li>Send you promotional materials and updates (with your consent)</li>
        <li>Improve and personalize your experience within the App</li>
      </ul>
      <p>Non-Personal Information</p>
      <p>We use non-personal information to:</p>
      <ul className="  list-outside list-disc list-inside text-[16px] text-gray-700 pl-2 mb-3">
        <li>Analyze usage patterns and trends</li>
        <li>Enhance the functionality and user experience of the App</li>
        <li>Monitor and improve our services</li>
      </ul>

      <h3 className="lato-700 mt-4">How We Share Your Information</h3>
      <p>We may share your information in the following circumstances:</p>
      <ul className="  list-outside list-disc list-inside text-[16px] text-gray-700 pl-2 mb-3">
        <li>
          Service Providers: We may share your information with third-party
          service providers who perform services on our behalf, such as payment
          processing, delivery services, and customer support.
        </li>
        <li>
          Legal Requirements: We may disclose your information if required to do
          so by law or in response to valid requests by public authorities.
        </li>
        <li>
          Business Transfers: In the event of a merger, acquisition, or sale of
          all or a portion of our assets, your information may be transferred to
          the acquiring company.
        </li>
        <li>
          With Your Consent: We may share your information with third parties if
          you provide us with consent to do so.
        </li>
      </ul>

      <h3 className="lato-700 mt-4">Data Security</h3>
      <p>
        We implement appropriate technical and organizational measures to
        protect your personal information from unauthorized access, disclosure,
        alteration, and destruction. However, no data transmission over the
        internet or electronic storage method is completely secure, and we
        cannot guarantee absolute security.
      </p>

      <h3 className="lato-700 mt-4">Your Rights</h3>
      <p>
        Depending on your location, you may have the following rights regarding
        your personal information:
      </p>
      <ul className="  list-outside list-disc list-inside text-[16px] text-gray-700 pl-2 mb-3">
        <li>
          Access: You can request access to the personal information we hold
          about you.
        </li>
        <li>
          Correction: You can request that we correct any inaccurate or
          incomplete personal information.
        </li>
        <li>
          Deletion: You can request that we delete your personal information,
          subject to certain legal restrictions.
        </li>
        <li>
          Objection: You can object to the processing of your personal
          information in certain circumstances.
        </li>
        <li>
          Withdrawal of Consent: If we process your personal information based
          on your consent, you can withdraw your consent at any time.
        </li>
      </ul>
      <p>
        To exercise any of these rights, please contact us using the contact
        information provided below.
      </p>

      <h3 className="lato-700 mt-4">Third-Party Links</h3>
      <p>
        The App may contain links to third-party websites or services that are
        not operated by us. We are not responsible for the privacy practices of
        these third parties, and we encourage you to review their privacy
        policies.
      </p>

      <h3 className="lato-700 mt-4">Children's Privacy</h3>
      <p>
        The App is not intended for use by individuals under the age of 18. We
        do not knowingly collect personal information from children under 18. If
        we become aware that we have collected personal information from a child
        under 18, we will take steps to delete such information.
      </p>

      <h3 className="lato-700 mt-4">Changes to This Privacy Policy</h3>
      <p>
      We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy within the App. Your continued use of the App after any changes indicates your acceptance of the updated Privacy Policy.
      </p>
 
<h3 className="lato-700 mt-4">Contact Us</h3>
      <p>
      If you have any questions or concerns about these Privacy Policy, please contact us at:
      </p>


       




      <p className=" mt-4">[Your Company Name]</p>
      <p>[Your Contact Information]</p>
      <p>[Your Address]</p>
      <p>[Your Email Address]</p>
      <p className="mb-8">[Your Phone Number]</p> 
      <JoinNowSection />
    </div>
  );
};

export default PrivacyPolicy;
