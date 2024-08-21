"use client";
import React from "react";
import RouteComponent from "../RouteComponent/Route-Component";
import JoinNowSection from "../JoinNowSection/Join-Now-Section";

const TermsOfService = () => {
  return (
    <div className="px-8 w-full flex flex-col items-start mb-12">
      <RouteComponent parentRoute={"Home >"} mainRoute={"Terms of service"} />
      <h1 className=" lato-700 text-[18px] md:text-[20px] xl:text-[24px] w-full">
        User Agreement
      </h1>
      <h3 className="lato-700 mt-8">Introduction</h3>
      <p>
        Welcome to [Your App Name] ("the App"). These Terms and Conditions
        ("Terms") govern your use of our mobile application and the services
        provided by [Your Company Name] ("we", "us", "our"). By downloading,
        accessing, or using the App, you agree to be bound by these Terms. If
        you do not agree to these Terms, please do not use the App.
      </p>

      <h3 className="lato-700 mt-4">Definitions</h3>
      <p>
        App: The [Your App Name] mobile application, including all related
        services and features.
      </p>
      <p>
        User: Any individual or entity that downloads, accesses, or uses the
        App.
      </p>
      <p>Service: The water delivery service provided through the App.</p>

      <h3 className="lato-700 mt-4">User Accounts</h3>
      <p>
        Registration: To use certain features of the App, you must create an
        account by providing accurate and complete information. You are
        responsible for maintaining the confidentiality of your account
        credentials.
      </p>
      <p>
        Eligibility: You must be at least 18 years old to use the App. By
        registering, you confirm that you meet this age requirement.
      </p>

      <h3 className="lato-700 mt-4">Use of the App</h3>
      <p>
        Permitted Use: You may use the App for lawful purposes and in accordance
        with these Terms.
      </p>
      <p>Prohibited Use: You agree not to:</p>
      <p>
        Use the App in any way that violates applicable laws or regulations.
      </p>
      <p>Engage in fraudulent or deceptive practices.</p>
      <p>
        Interfere with the operation of the App or the experience of other
        users.
      </p>
      <p>Post or transmit any harmful or malicious content.</p>

      <h3 className="lato-700 mt-4">Orders and Delivery</h3>
      <p>
        Placing Orders: You can place orders for water delivery through the App
        by selecting the desired products, providing delivery information, and
        completing the payment process.
      </p>
      <p>
        Order Confirmation: Once your order is placed, you will receive a
        confirmation notification within the App. This confirmation is not a
        guarantee of delivery.
      </p>
      <p>
        Delivery Times: Delivery times are estimated and may vary. We strive to
        deliver orders promptly but are not liable for any delays beyond our
        control.
      </p>
      <p>
        Delivery Fees: Delivery fees may apply and will be disclosed at the time
        of placing the order.
      </p>

      <h3 className="lato-700 mt-4">Payments</h3>
      <p>
        Payment Methods: We accept various payment methods, including
        credit/debit cards and digital wallets. All payments are processed
        through secure payment gateways.
      </p>
      <p>
        Charges: By placing an order, you agree to pay the listed price for the
        products and any applicable fees.
      </p>
      <p>
        Refunds: Refunds are handled in accordance with our Refund Policy, which
        is available within the App.
      </p>

      <h3 className="lato-700 mt-4">Subscription Services</h3>
      <p>
        Subscription Plans: We offer subscription plans for regular water
        deliveries. Details of available plans, including pricing and delivery
        frequency, can be found in the App.
      </p>
      <p>
        Subscription Management: You can manage your subscription, including
        changes and cancellations, through the App
      </p>
      <p>
        Billing: Subscription fees will be billed according to the selected
        plan. You agree to pay the subscription fees until you cancel your
        subscription.
      </p>

      <h3 className="lato-700 mt-4">Cancellations and Refunds</h3>
      <p>
        Order Cancellations: You can cancel your order within a specified time
        frame, as detailed in the App, without incurring charges. Orders
        canceled after this period may incur a cancellation fee.
      </p>
      <p>
        Refund Policy: Refunds for canceled orders or issues with delivered
        products will be processed in accordance with our Refund Policy.
      </p>

      <h3 className="lato-700 mt-4">User Content</h3>
      <p>
        Content Submission: Users may have the opportunity to submit reviews,
        ratings, or other content within the App. By submitting content, you
        grant us a non-exclusive, royalty-free, worldwide, perpetual license to
        use, modify, and display the content.
      </p>
      <p>
        Content Standards: All content submitted must comply with our Content
        Standards, which prohibit offensive, defamatory, or illegal material.
      </p>

      <h3 className="lato-700 mt-4">Intellectual Property</h3>
      <p>
        Ownership: [Your Company Name] retains all rights, title, and interest
        in and to the App, including all intellectual property rights.
      </p>
      <p>
        License: Users are granted a limited, non-exclusive, non-transferable
        license to access and use the App for personal, non-commercial purposes.
      </p>

      <h3 className="lato-700 mt-4">Limitation of Liability</h3>
      <p>
        To the maximum extent permitted by law, [Your Company Name] shall not be
        liable for any indirect, incidental, special, consequential, or punitive
        damages, or any loss of profits or revenues, whether incurred directly
        or indirectly, or any loss of data, use, goodwill, or other intangible
        losses, resulting from:
      </p>

      <h3 className="lato-700 mt-4">
        Your use of or inability to use the App.
      </h3>
      <p>Any conduct or content of any third party on the App.</p>
      <p>Any content obtained from the App.</p>
      <p>
        Unauthorized access, use, or alteration of your transmissions or
        content.
      </p>

      <h3 className="lato-700 mt-4">Indemnification</h3>
      <p>
        You agree to indemnify and hold harmless [Your Company Name] and its
        affiliates, officers, directors, employees, and agents from any claims,
        liabilities, damages, losses, and expenses, including without limitation
        reasonable legal fees and costs, arising out of or in any way connected
        with your use of the App or violation of these Terms.
      </p>

      <h3 className="lato-700 mt-4">Governing Law</h3>
      <p>
        These Terms are governed by and construed in accordance with the laws of
        [Your Country/State], without regard to its conflict of law principles.
        You agree to submit to the exclusive jurisdiction of the courts located
        in [Your City/State].
      </p>
      <p>
        Refund Policy: Refunds for canceled orders or issues with delivered
        products will be processed in accordance with our Refund Policy.
      </p>

      <h3 className="lato-700 mt-4">Changes to Terms</h3>
      <p>
        We reserve the right to modify these Terms at any time. We will notify
        you of any changes by posting the new Terms within the App. Your
        continued use of the App after such changes constitutes your acceptance
        of the new Terms.
      </p>

      <h3 className="lato-700 mt-4">Cancellations and Refunds</h3>
      <p>
        Order Cancellations: You can cancel your order within a specified time
        frame, as detailed in the App, without incurring charges. Orders
        canceled after this period may incur a cancellation fee.
      </p>

      <h3 className="lato-700 mt-4">Contact Us</h3>
      <p>
        If you have any questions or concerns about these Terms, please contact
        us at:
      </p>

      <p className=" mt-4">[Your Company Name]</p>
      <p>[Your Contact Information]</p>
      <p>[Your Address]</p>
      <p>[Your Email Address]</p>
      <p>[Your Phone Number]</p>
      <p className="my-4 ">
        Copyright &copy; {new Date().getFullYear()} Precious Metal Market, Inc.
      </p>
      <JoinNowSection />
    </div>
  );
};

export default TermsOfService;
