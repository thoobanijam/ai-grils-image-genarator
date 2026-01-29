'use client'
import { useState } from "react";

import { WiDaySunny } from "react-icons/wi";
import { IoMoonOutline } from "react-icons/io5";
import { MdTv } from "react-icons/md";
import { SiDiscord } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { FaArrowUpLong } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";
import { useRouter } from "next/navigation";



const Footer = () => {
const router = useRouter()
  const [open, setOpen] = useState(false);

  const languages = ["English", "Deutsch", "Francais", "Espanol", "Chinees", "Arabic"];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-[#0f172a] text-[#9ca3af] px-2 py-6 ">
      
      {/* Top Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-4 sm:grid-cols-1 gap-8 mb-8 px-2 sm:px-2 lg:px-2 ">        
        {/* Brand */}
        <div className="mb-8 md:mb-0 sm:w-full md:w-full  ">
          <div className="flex items-center gap-3 mb-3">
            <img src="/img/logo.png" alt="Logo" 
            className="h-10 w-10" />
            <h2 className="text-white font-semibold text-2xl w-full  ">
  AI Girl Image  
       Generator
</h2>

          </div>

          <p className="text-lg leading-relaxed w-full sm:w-74 md:w-98 break-words">
            Free AI image generator for creating stunning AI-generated images.
            No registration, unlimited use, supports all languages.
          </p>
           <div onClick={()=>router.push('/')}
           className="text-md mt-4 text-white bg-[#202a3b] w-130 px-3 py-3 mb-4 border border-[#4b5563] rounded-sm cursor-pointer">
            Built with ❤️ AI Girl Image Generator
          </div>
        </div>

        {/* About */}
        <div className="mb-8 md:mb-0 md:ml-40">
          <h3 className="text-white font-semibold mb-3 text-[25px]">About</h3>
          <ul className="space-y-2 text-sm">
            <li onClick={() => router.push('/aboutus')}
            className="hover:text-white cursor-pointer text-[20px]">About Us</li>
           <li
  onClick={() => {
    const el = document.getElementById("why-choose");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }}
  className="hover:text-white cursor-pointer text-[20px]"
>
  Highlights
</li>

            <li
  onClick={() => {
    const el = document.getElementById('Explore-creative');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }}
  className="hover:text-white cursor-pointer text-[20px]"
>
  Showcases
</li>
          </ul>
         
        </div>

        {/* Support */}
        <div className="mb-8 md:mb-0 md:ml-32">
          <h3 className="text-white font-semibold mb-3 text-[25px]">Support</h3>
          <ul className="space-y-2 text-sm">
            <li onClick={() => router.push('/contact')}
            className="hover:text-white cursor-pointer text-[20px]">Contact Us</li>
            <li
  onClick={() => {
    const el = document.getElementById('freeai_girls');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }}
  className="hover:text-white cursor-pointer text-[20px]"
>
  FAQ
</li>

          </ul>
        </div>

        {/* Language */}
     <div className="flex items-center text-[#9ca3af]  rounded-md gap-1 h-20  mt-40">

      {/* Theme Switch */}
      <div className="flex items-center text-[#9ca3af] border border-[#4b5563] rounded-md px-2">
        {/* Light (with divider line) */}
        <div className="px-1 py-2 border-r border-[#4b5563] cursor-pointer hover:bg-[#374151] ">
          <WiDaySunny size={20} />
        </div>

        {/* Dark */}
        <div className="px-1 py-1 cursor-pointer hover:bg-[#374151]">
          <IoMoonOutline size={20} />
        </div>

        {/* System (active) */}
        <div className="px-2 py-2 bg-[#374151] cursor-pointer">
          <MdTv size={22} />
        </div>
      </div>

      {/* Language Dropdown */}
      <div className="relative inline-block w-32 text-white  ">
        {/* Button */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full bg-[#1e293b] border border-[#374151] rounded-md px-4 py-2 flex items-center justify-center hover:bg-[#374151] "
        >
          <div className="flex items-center gap-1 w-28 ">
            <TfiWorld style={{fontSize:"25px"}} />
            <span style={{marginRight:"3px",fontSize:"20px"}}>English</span>
          </div>
          <span >▼</span>
        </button>

        {/* Dropdown (opens upwards) */}
        {open && (
          <ul className="absolute left-0 bottom-full -mb-1 w-full bg-[#1e293b] border border-[#374151] rounded-md shadow-lg z-10">
            {languages.map((lang) => (
              <li
                key={lang}
                onClick={() => {
                 
                  setOpen(false);
                }}
                className="px-4 py-4 hover:bg-[#374151] cursor-pointer flex items-center gap-2"
              >
              
                <span>{lang}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>




         
        </div>
           {/* Divider */}
      <div className="border-t border-[#1f2937] my-6"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm gap-4 pb-8">
        <p>© 2026 <span style={{color:"#295beb",cursor:'pointer',fontSize:"20px"}}
        className="hover:text-[#965184]">AI Girl Image Generator.</span> All rights reserved</p>

        <div className="flex gap-4 text-xs">
          <span onClick={() => router.push('/privacypolicy')} className="text-[18px] hover:text-white cursor-pointer underline underline-offset-3 ">Privacy Policy</span>
          <span onClick={() => router.push('/termsofservice')} className=" text-[18px] hover:text-white cursor-pointer underline underline-offset-3">Terms of Service</span>
          <span onClick={() => router.push('/cookies')}className=" text-[18px] hover:text-white cursor-pointer underline underline-offset-3">Cookie Policy</span>
        </div>
        <div className="flex gap-8 mr-10 ">
         <SiDiscord className="text-[#9ca3af] hover:text-white cursor-pointer text-[25px]" />
      <HiOutlineMail className="text-[#9ca3af] hover:text-white cursor-pointer text-[25px]"/>


      </div>
      <div className="">
      <button
      onClick={scrollToTop}
      className="
        fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-full
        bg-gradient-to-r from-[#9f1def] to-[#df0081]
        flex items-center justify-center
        text-white
        shadow-lg
        hover:scale-110 transition-transform
      "
    >
      <FaArrowUpLong size={18} />
    </button></div>

</div>

    </footer>
  );
};

export default Footer;
