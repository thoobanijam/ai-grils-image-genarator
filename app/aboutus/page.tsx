'use client';
import React from 'react';
import { MdOutlineDateRange } from "react-icons/md";
import { IoIosLink } from "react-icons/io";

const AboutUsPage = () => {
  return (
    <div className="w-full min-h-screen  bg-[#0f172a] text-white px-1  lg:px-14 py-12">
      <div className='flex justify-center items-center flex-col p-2 
           
   
    lg:w-[95%] 
      '>
        <h1 className='text-[#e2e8f0] font-bold text-4xl p-6'>About Us</h1>
        <p className='text-[#9ca3af] w-[66%] text-center p-2 sm:w-[95%]'>Learn about AI Girl Image Generator - our mission, values, and commitment to making AI image generation accessible to everyone.</p>
      <p className="flex items-center gap-1 text-gray-400">
  <MdOutlineDateRange />
  Nov 18, 2025
</p>
      </div>
      {/* Header */}
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
    <h1 className="group text-lg md:text-2xl mb-4 pt-4 cursor-pointer flex items-center gap-2">
  About AI Girl Image Generator

  <IoIosLink
    className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
  />
</h1>


      <p className=" text-md   mb-4">
       Welcome to AI Girl Image Generator, your premier destination for free, unlimited AI-powered image generation. We're passionate about democratizing artificial intelligence technology and making it accessible to everyone, regardless of technical expertise or financial resources.
      </p>

     

      {/* Our Mission */}
      <section className="  space-y-4">
        <h1 className="group text-lg md:text-2xl   cursor-pointer flex items-center gap-2">
            Our Mission 
            <IoIosLink
    className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
  /></h1>
        <p className=" text-md">
          Our mission is simple yet powerful: Make AI image generation accessible to everyone, everywhere, for free.
        </p>
        <p className=" text-md">
          We believe that creative tools powered by AI should not be locked behind paywalls, complex interfaces, or registration requirements. Everyone deserves the ability to bring their imagination to life through AI-generated images.
        </p>
      </section>

      {/* What We Offer */}
      <section className="  space-y-4">
         <h1 className="group text-lg md:text-2xl mb-4 pt-4 cursor-pointer flex items-center gap-2">

            What We Offer
            <IoIosLink
    className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
  /></h1>
        
        <h3 className="group text-lg md:text-lg mb-4 pt-4 cursor-pointer flex items-center gap-2   mt-2">
            100% Free Forever
            <IoIosLink
    className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
  /></h3>
        <ul className="list-disc list-inside space-y-1 ">
          <li>No hidden fees, no premium tiers, no credit systems</li>
          <li>Truly unlimited image generation</li>
          <li>All features available to all users</li>
          <li>No registration or account required</li>
        </ul>

        <h3 className="group text-lg md:text-lg mb-4 pt-4 cursor-pointer flex items-center gap-2   mt-2">
            Privacy-First Approach
            <IoIosLink
    className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
  /></h3>
        <ul className="list-disc list-inside space-y-1 ">
          <li>Your generated images are never stored on our servers</li>
          <li>Prompt history saved locally in your browser only</li>
          <li>No personal data collection</li>
          <li>Complete anonymity</li>
        </ul>

        <h3 className="group text-lg font-medium text-white mt-4 flex items-center gap-2 cursor-pointer">
  Truly Global

  <IoIosLink
    className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
  />
</h3>

        <ul className="list-disc list-inside space-y-1 ">
          <li>Support for 8 languages: English, Chinese, Japanese, Spanish, Arabic, French, and German</li>
          <li>Multilingual prompt support</li>
          <li>Accessible from anywhere in the world</li>
          <li>Optimized for all devices and screen sizes</li>
        </ul>

        <h3 className="group text-lg font-medium text-white mt-4 flex items-center gap-2 cursor-pointer">
            Powerful AI Technology<IoIosLink
    className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
  /></h3>
        <ul className="list-disc list-inside space-y-1">
          <li>State-of-the-art AI image generation models</li>
          <li>Fast generation - most images ready in 30 seconds or less</li>
          <li>Multiple aspect ratios and image sizes</li>
          <li>High-quality, photorealistic outputs</li>
          <li>AI-powered prompt optimization for better results</li>
        </ul>
      </section>

      {/* Our Values */}
      <section className=" mb-10 space-y-4">
        <h2 className="group text-lg md:text-2xl mb-4 pt-4 cursor-pointer flex items-center gap-2">
            Our Values<IoIosLink
    className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
  /></h2>
       <h2 className="group text-lg  text-white mt-4 flex items-center gap-2 cursor-pointer ">
        Accessibility <IoIosLink
    className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
  /></h2>
       <p className=" text-md">We believe advanced AI technology should be available to everyone, not just those who can afford expensive subscriptions. That's why we're committed to keeping our service 100% free forever.</p>
      </section>

      {/* Privacy policy */}
       <h2 className="group text-lg  text-white mt-4 flex items-center gap-2 cursor-pointer ">
        Privacy & Security <IoIosLink
    className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
  /></h2>
       <p className=" text-md">
        Your privacy is paramount. We operate on a strict no-storage policy for generated images and collect minimal data only for essential functionality.</p>
{/*user-centric */}
        <h2 className="group text-lg  text-white mt-4 flex items-center gap-2 cursor-pointer ">
       User-Centric Design <IoIosLink
    className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
  /></h2>
       <p className=" text-md">
        We continuously improve our interface based on user feedback, ensuring that our tool remains intuitive and easy to use for beginners while offering powerful features for advanced users.</p>

{/*Transparcy */}
        <h2 className="group text-lg  text-white mt-4 flex items-center gap-2 cursor-pointer ">
       Transparency <IoIosLink
    className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
  /></h2>
       <p className=" text-md">
        We're open about how our service works, what data we collect (minimal), and how we protect your privacy. No hidden agendas, no data mining, just pure creative freedom.</p>

{/*Innovation */}
        <h2 className="group text-lg  text-white mt-4 flex items-center gap-2 cursor-pointer ">
       Innovation <IoIosLink
    className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
  /></h2>
       <p className=" text-md">
       We stay at the forefront of AI image generation technology, constantly updating our models and features to provide you with the best possible results.</p>
{/*why choose us  */}
<h1 className="group text-lg md:text-2xl mb-4 pt-4 cursor-pointer flex items-center gap-2">

           Why Choose Us?
            <IoIosLink
    className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
  /></h1>
  {/*no register  */}
   <h2 className="group text-lg  text-white mt-4 flex items-center gap-2 cursor-pointer ">
      No Registration Barrier <IoIosLink
    className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
  /></h2>
  <p className=" text-md">
       Unlike many AI image generators that require you to create an account, verify your email, and provide personal information, we let you start generating images immediately. Just visit our site and start creating.</p>
      {/*trult unlimited  */}
      {/*no register  */}
   <h2 className="group text-lg  text-white mt-4 flex items-center gap-2 cursor-pointer ">
     Truly Unlimited <IoIosLink
    className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
  /></h2>
  <p className=" text-md">
       Many "free" AI image generators have hidden limitations - daily generation caps, credit systems, or reduced quality for free users. We don't. Generate as many images as you want, whenever you want, at full quality.</p>

 {/*real AI  */} 
 <h2 className="group text-lg  text-white mt-4 flex items-center gap-2 cursor-pointer ">
     Real AI,Not Filter <IoIosLink
    className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
  /></h2>
  <p className=" text-md">
       We use authentic AI image generation technology, not simple filters or templates. Each image is uniquely generated based on your prompt using advanced machine learning models.
       </p>
      
{/*community-driven */}
<h2 className="group text-lg  text-white mt-4 flex items-center gap-2 cursor-pointer ">
     Community-Driven <IoIosLink
    className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
  /></h2>
  <p className=" text-md">
       We listen to our users. Our features and improvements are driven by community feedback and real user needs.       </p>
   {/*How to keep it free */}   
   <h1 className="group text-lg md:text-2xl mb-4 pt-4 cursor-pointer flex items-center gap-2">

          How We Keep It Free
            <IoIosLink
    className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
  /></h1>
  <p className=" text-md">
       We listen to our users. Our features and improvements are driven by community feedback and real user needs.       </p>

<ul className="list-disc list-inside space-y-1 ">
          <li>Efficient Infrastructure: We use optimized, cost-effective cloud infrastructure</li>
          <li>Sustainable Model: We may display non-intrusive advertisements to cover operational costs (always respecting your experience)</li>
          <li>Volume Efficiency: Serving many users allows us to benefit from economies of scale</li>
          <li>Passion Project: This started as a passion project to make AI accessible, and that mission remains our core</li>
        </ul>

    {/* our commitment to you*/}
     <h1 className="group text-lg md:text-2xl mb-4 pt-4 cursor-pointer flex items-center gap-2">

       Our Commitment to You
            <IoIosLink
    className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
  /></h1>
  <p className=" text-md">
       We promise to:      
        </p>
        <ul className="list-disc list-inside space-y-1 ">
          <li>✅ Keep the service completely free for all core features</li>
          <li>✅ Never require registration for basic use</li>
          <li>✅ Respect your privacy and never sell your data</li>
          <li>✅ Continuously improve and update our technology</li>
          <li>✅ Listen to user feedback and implement requested features</li>
        <li>✅ Maintain fast, reliable service</li>
        <li>✅ Be transparent about any changes or limitations</li>
        </ul>
{/*Technology behind the service */}
<h1 className="group text-lg md:text-2xl mb-4 pt-4 cursor-pointer flex items-center gap-2">

      Technology Behind the Service
            <IoIosLink
    className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
  /></h1>
  <p className=" text-md">
      While we keep our specific AI models and infrastructure details proprietary for security and competitive reasons, we can share that:  
        </p>
  <ul className="list-disc list-inside space-y-1 ">
          <li>We use state-of-the-art diffusion models for image generation</li>
          <li>Our servers are optimized for fast processing</li>
          <li>We implement multiple layers of content filtering to ensure safe, appropriate outputs</li>
          <li>Regular updates keep our models current with the latest AI advancements</li>
                  </ul>

<h1 className="group text-lg md:text-2xl mb-4 pt-4 cursor-pointer flex items-center gap-2">

    Looking Forward
            <IoIosLink
    className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
  /></h1>
  <p className="text-md">
     As AI technology continues to evolve, so will we. Our roadmap includes:
        </p>
  <ul className="list-disc list-inside space-y-1 ">
          <li>Enhanced image customization options</li>
          <li>More advanced prompt optimization features</li>
          <li>Improved generation speed</li>
          <li>More language support</li>
            <li>More language supportCommunity features (coming soon) </li>
                   </ul>
{/* join our community */}
<h1 className="group text-lg md:text-2xl mb-4 pt-4 cursor-pointer flex items-center gap-2">

   Join Our Community
            <IoIosLink
    className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
  /></h1>
  <p className="text-md">
    We're more than just a tool - we're a community of creators, artists, designers, and AI enthusiasts. Whether you're:        </p>
 <ul className="list-disc list-inside space-y-1 ">
          <li>A professional designer looking for quick concept art</li>
          <li>A content creator needing images for your projects</li>
          <li>A student exploring AI technology</li>
          <li>Someone who simply enjoys creating beautiful images</li>
            
                   </ul>
                   <p className=" w-[70%]">...you're welcome here, and it's completely free.</p>
      {/* Contact */}
      <section className="max-w-5xl mx-auto mb-10 space-y-4">
        <h1 className="group text-lg md:text-2xl mb-4 pt-4 cursor-pointer flex items-center gap-2">

Contact Us
            <IoIosLink
    className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
  /></h1>
  <p className="text-md">
          Have questions, suggestions, or feedback? We'd love to hear from you!
        </p>
        <p className="text-md">
          Email: <a href="mailto:support@styleart.ai" className=" text-[#295beb]  cursor-pointer">support@styleart.ai</a>
        </p>
        <p className="text-md">Response Time: Typically 24-48 hours</p>
        <p className="text-md">Your feedback helps us improve — please reach out!</p>
      </section>
{/*thank you */}
<h1 className="group text-lg md:text-2xl mb-4 pt-4 cursor-pointer flex items-center gap-2">

Thank You
            <IoIosLink
    className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
  /></h1>
  <p className="text-gray-300">
         Thank you for choosing AI Girl Image Generator. Every image you create, every prompt you write, and every visit you make helps us achieve our mission of democratizing AI image generation.        </p>
         <p className="text-gray-300 pt-4">
        Let's create something amazing together! 🎨✨      </p>
        <div className="w-full h-px bg-[#9ba2ae] my-6 border border-gray-800"></div>

      {/* Footer Note */}
      <p className=" text-gray-300 text-sm mt-6 mb-6">
        Last Updated: November 18, 2025
      </p>

    </div></div>
  );
};

export default AboutUsPage;
