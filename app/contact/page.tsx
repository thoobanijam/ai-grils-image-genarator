'use client'

import { MdOutlineDateRange } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import { IoMdBatteryDead } from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";

const page = () => {
  const [resolved, setResolved] = useState(false);
  const router =useRouter()
  return (
    <div className="w-full h-[auto]  bg-[#0f172a] text-white px-1  lg:px-14 py-12">
          <div className='flex justify-center items-center flex-col p-2 
             sm:w-[100%]  
           
        lg:w-[100%] 
          '>
            <h1 className='text-[#e2e8f0] font-bold text-2xl p-6'>Contact Us</h1>
            <p className='text-[#9ca3af] w-[66%] text-center p-6 sm:w-[95%]'>
              Get in touch with AI Girl Image Generator - contact information, support options, and ways to reach out for questions, feedback, or assistance.</p>
          <p className="flex items-center gap-1 text-gray-400">
      <MdOutlineDateRange />
      Nov 18, 2025
    </p>
      <div className='
  border border-gray-800
 w-[95%]       
    sm:w-[95%]    
    md:w-[70%]   
    lg:w-[55%]
  mx-auto
  rounded-3xl
  px-6
  text-[#e2e8f0]
'>
  <h3 className="group text-md md:text-lg mb-4 pt-4 cursor-pointer flex items-center gap-2   mt-2">
              Contact Us
              <IoIosLink
      className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
    /></h3>

    <h3 className="group text-2xl  mb-4 pt-4 cursor-pointer flex items-center gap-2   mt-2">
             Get in Touch
              <IoIosLink
      className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
    /></h3>
    <p className=" text-md">
         We'd love to hear from you! Whether you have questions about our AI image generator, need technical support, want to provide feedback, or have business inquiries, we're here to help..
        </p>
         <h3 className="group text-2xl  mb-4 pt-4 cursor-pointer flex items-center gap-2   mt-2">
             Quick Contact Options
              <IoIosLink
      className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
    /></h3>
    <h3 className="group text-md md:text-lg mb-4 pt-4 cursor-pointer flex items-center gap-2   mt-2">
              Email Support (Preferred)
              <IoIosLink
      className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
    /></h3>
    <p className="text-md">
          Email: <a href="mailto:support@styleart.ai" className=" text-[#295beb]  cursor-pointer">support@styleart.ai</a>
        </p>


         <ul className="list-disc list-inside space-y-1 ">
          <li>Fastest response for technical issues</li>
          <li>Suitable for general inquiries and feedback</li>
          <li>Response Time: 24-48 hours</li>
                                         </ul>
 <h3 className="group text-md md:text-lg mb-4 pt-4 cursor-pointer flex items-center gap-2   mt-2">
       Discord Community (Recommended for Quick Help)
              <IoIosLink
      className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
    /></h3>
  <p className="text-md">
       Discord:
       <a href="mailto:support@styleart.ai" 
       onClick={()=>router.push('login')}
       className=" text-[#295beb]  cursor-pointer">
        Join our Discord server</a>
        </p>
        <ul className="list-disc list-inside space-y-1 ">
          <li>Connect with our community and team</li>
          <li>Get quick answers from other users</li>
          <li>Share your creations and get feedback</li>
          <li>Stay updated with latest features and announcements</li>
                               </ul>
       <h3 className="group text-md md:text-lg mb-4 pt-4 cursor-pointer flex items-center gap-2   mt-2">
              Live Chat Options
              <IoIosLink
      className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
    /></h3>
     <p className=" text-md">
        While we don't offer traditional live chat, our Discord community provides real-time support and interaction with both our team and fellow users.
        </p>
    <h3 className="group text-2xl  mb-4 pt-4 cursor-pointer flex items-center gap-2   mt-2">
          Before You    Contact Us
              <IoIosLink
      className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
    /></h3>
     <h3 className="group text-md md:text-lg mb-4 pt-4 cursor-pointer flex items-center gap-2   mt-2">
           Check Our FAQ
              <IoIosLink
      className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
    /></h3>
    <p className=" text-md mb-4">
        Many common questions are answered in our frequently asked questions:
        </p>
      <ul className="list-disc list-inside space-y-1 ">
          <li>Getting started: How to use the AI image generator</li>
          <li>Usage limits: Free vs. premium features</li>
          <li>Image quality: Tips for better results</li>
          <li>Language support: Available languages and localization</li>
                               </ul>

     <p className="text-md">
  For the complete FAQ, please visit our{" "}
  <span
    onClick={() => router.push("/#freeai_girls")}
    className="text-[#295beb] cursor-pointer"
  >
    FAQ section.
  </span>
</p>
 <h3 className="group text-2xl  mb-4 pt-4 cursor-pointer flex items-center gap-2   mt-2">
            What We Can Help With
              <IoIosLink
      className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
    /></h3>
                           
       <h3 className="group text-md md:text-lg mb-4 pt-4 cursor-pointer flex items-center gap-2   mt-2">
             Technical Support
              <IoIosLink
      className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
    /></h3>
  <ul className="list-disc list-inside space-y-1 ">
          <li>Website functionality issues</li>
          <li>Image generation errors</li>
          <li>Browser compatibility problems</li>
          <li>Performance concerns</li>
           <li>Mobile app issues (if applicable)</li>
                               </ul>
    <h3 className="group text-md md:text-lg mb-4 pt-4 cursor-pointer flex items-center gap-2   mt-2">
            Account & Usage
              <IoIosLink
      className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
    /></h3>
  <ul className="list-disc list-inside space-y-1 ">
          <li>Registration assistance (not required for basic use)</li>
          <li>Usage reports and statistics</li>
          <li>Account management questions</li>
          <li>Billing inquiries (if applicable)</li>
         
                               </ul>
  <h3 className="group text-md md:text-lg mb-4 pt-4 cursor-pointer flex items-center gap-2   mt-2">
        Content & Features
              <IoIosLink
      className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
    /></h3>
  <ul className="list-disc list-inside space-y-1 ">
          <li>Feature requests and suggestions</li>
          <li>Bug reports and issues</li>
          <li>Content feedback</li>
          <li>Quality improvement suggestions</li>
          <li>New feature inquiries</li></ul>
  <h3 className="group text-md md:text-lg mb-4 pt-4 cursor-pointer flex items-center gap-2   mt-2">
       Business & Partnerships
              <IoIosLink
      className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
    /></h3>
  <ul className="list-disc list-inside space-y-1 ">
          <li>Media inquiries</li>
          <li>Partnership opportunities</li>
          <li>Business development</li>
          <li>Integration questions</li>
          <li>API access requests</li></ul>
  <h3 className="group text-md md:text-lg mb-4 pt-4 cursor-pointer flex items-center gap-2   mt-2">
      Legal & Privacy
              <IoIosLink
      className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
    /></h3>
  <ul className="list-disc list-inside space-y-1 ">
          <li>Privacy policy questions</li>
          <li>Terms of service inquiries</li>
          <li>GDPR compliance</li>
          <li>Data protection concerns</li>
          <li>Terms modifications</li>
          </ul>
         <h3 className="group text-2xl  mb-4 pt-4 cursor-pointer flex items-center gap-2   mt-2">
         Response TImes
              <IoIosLink
      className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
    /></h3>
    {/* tabels*/}
    <div className="overflow-x-auto mt-6">
  <table className="w-[600px] border border-gray-600 border-collapse text-left">
    <thead>
      <tr className="text-gray-300">
        <th className="border border-gray-600 px-4 py-3">
          Type of Inquiry
        </th>
        <th className="border border-gray-600 px-4 py-3">
          Response Time
        </th>
        <th className="border border-gray-600 px-4 py-3">
          Priority
        </th>
      </tr>
    </thead>

    <tbody className="text-gray-300">
      <tr className="">
        <td className="border border-gray-600 px-4 py-3">Technical Issues</td>
        <td className="border border-gray-600 px-4 py-3">Within 24 hours</td>
        <td className="border border-gray-600 px-4 py-3  font-medium">
          High
        </td>
      </tr>

      <tr >
        <td className="border border-gray-600 px-4 py-3">Feature Requests</td>
        <td className="border border-gray-600 px-4 py-3">Within 48 hours</td>
        <td className="border border-gray-600 px-4 py-3  font-medium">
          Medium
        </td>
      </tr>

      <tr >
        <td className="border border-gray-600 px-4 py-3">General Questions</td>
        <td className="border border-gray-600 px-4 py-3">Within 24–48 hours</td>
        <td className="border border-gray-600 px-4 py-3  font-medium">
          Medium
        </td>
      </tr>

      <tr >
        <td className="border border-gray-600 px-4 py-3">Business Inquiries</td>
        <td className="border border-gray-600 px-4 py-3">Within 2–3 business days</td>
        <td className="border border-gray-600 px-4 py-3  font-medium">
          Medium
        </td>
      </tr>

      <tr >
        <td className="border  border-gray-600 px-4 py-3">Legal Questions</td>
        <td className="border border-gray-600 px-4 py-3">Within 1–2 business days</td>
        <td className="border border-gray-600 px-4 py-3  font-medium">
          High
        </td>
      </tr>
    </tbody>
  </table>
   <h3 className="group text-2xl  mb-4 pt-4 cursor-pointer flex items-center gap-2   mt-2">
           How to Write an Effective Support Mesage
              <IoIosLink
      className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
    /></h3>
  <h3 className="group text-md md:text-lg mb-4 pt-4 cursor-pointer flex items-center gap-2   mt-2">
    ✉️ Good Example
              <IoIosLink
      className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
    /></h3>

    {/* black div*/}
 <div className="relative max-w-3xl mx-auto bg-[#191919] text-gray-300 rounded-2xl p-6 border border-gray-700 overflow-x-auto scrollbar-none">
  
  {/* Top-right status icon */}
  <div
    onClick={() => setResolved(!resolved)}
    className="absolute top-4 right-4 cursor-pointer text-2xl"
  >
    {resolved ? (
      <IoCheckmark className="text-gray-400" />
    ) : (
      <IoMdBatteryDead className="text-gray-400" />
    )}
  </div>

  {/* Content */}
  <h3 className="text-sm text-gray-300 mb-4 whitespace-nowrap">
    Subject: Issue with image download on mobile device
  </h3>

  <p className="text-sm text-gray-300 mb-3 whitespace-nowrap">
    Hello team,
  </p>

  <p className="text-sm text-gray-300 mb-3 whitespace-nowrap">
    I've been using your AI image generator successfully on desktop/browser,
    but I'm experiencing issues with downloading images on my mobile device
    (iPhone 14 Pro, iOS 17.1, Safari).
  </p>

  <p className="text-sm text-gray-300 mb-3 whitespace-nowrap">
    The generation works fine, but when I click download, nothing happens.
    I've tried refreshing the page and using private browsing mode, but the
    issue persists.
  </p>

  <p className="text-sm text-gray-300 mb-5 whitespace-nowrap">
    Could you please help resolve this? Thanks!
  </p>

  <p className="text-sm text-gray-300 whitespace-nowrap">
    Best regards,
    <br />
    <span className="italic">[Your Name]</span>
  </p>
</div>
 <h3 className="group text-md  mb-4 pt-4 cursor-pointer flex items-center gap-2   mt-2">
       💡 Tips for Better Support
              <IoIosLink
      className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
    /></h3>
    <p className=" text-md">
         Be specific: Include error messages, device information, and steps to reproduce
Include context: Mention what you were trying to accomplish
Provide details: Browser, device, operating system version
Be patient: We respond to inquiries in the order received
One topic per email: This helps us provide faster responses        </p>
<h3 className="group text-2xl  mb-4 pt-4 cursor-pointer flex items-center gap-2   mt-2">
      Business Hour
              <IoIosLink
      className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
    /></h3>
<p className=" text-md">
        Our support team operates on the following schedule:     </p>
      <ul className="list-disc list-inside space-y-1 ">
          <li>Monday - Friday: 9:00 AM - 6:00 PM (UTC+8)</li>
          <li>Weekends & Holidays: Reduced availability, but we  urgent issues</li>
          <li>Emergency support: Available 24/7 for critical service outages</li>
   
         </ul>

         <h3 className="group text-2xl  mb-4 pt-4 cursor-pointer flex items-center gap-2   mt-2">
   Important Notes
              <IoIosLink
      className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
    /></h3>
    <h3 className="group text-md  mb-4 pt-4 cursor-pointer flex items-center gap-2   mt-2">
  Privacy Notice
              <IoIosLink
      className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
    /></h3>
     <ul className="list-disc list-inside space-y-1 ">
          <li>We never ask for your personal management information</li>
          <li>Don't share passwords or sensitive account details via email</li>
          <li>All support communications are secure and confidential</li>
                                         </ul>
  <h3 className="group text-md  mb-4 pt-4 cursor-pointer flex items-center gap-2   mt-2">
Service Limitations
              <IoIosLink
      className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
    /></h3>
     <ul className="list-disc list-inside space-y-1 ">
          <li>We provide support for our free service on a best-effort basis</li>
          <li>Complex technical issues may require more investigation time</li>
          <li>Feature requests are considered based on user demand and technical feasibility</li>
                                         </ul>
  <h3 className="group text-md  mb-4 pt-4 cursor-pointer flex items-center gap-2   mt-2">
Community Support
              <IoIosLink
      className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
    /></h3>
      <p className=" text-md">
        While we provide direct email support, you can also find helpful information in:      </p>
  <ul className="list-disc list-inside space-y-1 ">
          <li>FAQ section: Most common questions answered</li>
          <li>Blog posts: Tips, tutorials, and feature explanations</li>
          <li>Discord community:
            <span onClick={()=>router.push('login')}
                className=" text-[#295beb]  cursor-pointer">
                   Join our Discord server </span>
            for updates, announcements, and community support</li>
                                         </ul> 
            
<h3 className="group text-2xl  mb-4 pt-4 cursor-pointer flex items-center gap-2   mt-2">
Contact Summary
              <IoIosLink
      className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
    /></h3>
     <p className=" text-md">
        Primary Contact:  <span onClick={()=>router.push('login')}
                className=" text-[#295beb]  cursor-pointer">
                  support@styleart.ai  </span>
        Response Time: 24-48 hours (usually faster!) Coverage: Technical support, questions, feedback, business inquiries
              </p>
      <p className="text-md">Last updated: November 18, 2025</p>
      <div className="w-full h-px bg-[#9ba2ae] my-6 border border-gray-800"></div>
 
            
               <p className="text-md">
   Need help right now? Start with our {" "}
  <span
    onClick={() => router.push("/#freeai_girls")}
    className="text-[#295beb] cursor-pointer"
  >
    FAQ section.
  </span>  for immediate answers to common questions!
</p>
</div>
 </div>

 
    </div></div>
  )
}

export default page