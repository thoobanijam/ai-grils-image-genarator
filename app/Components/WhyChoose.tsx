import React from "react";
import { FaInfinity } from "react-icons/fa6";
import { BsLightningCharge } from "react-icons/bs";
import { LuBatteryFull } from "react-icons/lu";
import { IoColorPaletteOutline, IoLockClosedOutline } from "react-icons/io5";
import { TbCapture } from "react-icons/tb";
import { FiHardDrive } from "react-icons/fi";

const Free = [
  { icon: "🆓", title: "100% Free AI Image Generator", content: "Our free AI girl image generator requires no registration and has no hidden fees. Start creating AI-generated girl images instantly without any cost." },
  { icon: <FaInfinity />, title: "Unlimited Free Generations", content: "Generate unlimited AI girl images for free with no limits. Our free AI image generator lets you create as many images as you want, anytime." },
  { icon: <BsLightningCharge />, title: "Unlimited Free Generations", content: "Generate unlimited AI girl images for free with no limits. Our free AI image generator lets you create as many images as you want, anytime." },
  { icon: <LuBatteryFull />, title: "Advanced AI Technology", content: "Powered by state-of-the-art AI image generation models. Our free AI girl generator uses authentic AI technology, not fake filters or templates." },
  { icon: <IoColorPaletteOutline />, title: "Versatile Image Generator", content: "While optimized for AI girl images, our free generator can create any type of image you imagine with advanced AI technology." },
  { icon: <TbCapture />, title: "Multiple Image Formats", content: "Our free AI girl image generator offers various sizes: square, landscape, and portrait formats to meet your specific creative needs." },
  { icon: <IoLockClosedOutline />, title: "Privacy-First Generator", content: "Your AI-generated images are not saved on our servers. Our free generator prioritizes your privacy - download and keep your creations." },
  { icon: <FiHardDrive />, title: "Smart Local History", content: "Your AI image prompts are saved locally in your browser. Easily reuse successful prompts in our free generator for consistent results." },
];

const WhyChoose = () => {
  return (
    <div id="why-choose"
    className="w-full min-h-[800px] flex flex-col items-center px-4 sm:px-6 lg:px-8 bg-[#14172f]">
      <h1 className="mt-12 text-4xl font-bold text-center">
        Why Choose Our Free AI Girl Image Generator
      </h1>
      <p className="text-center text-gray-400 mt-12 mb-12 text-2xl max-w-[690px]">
        Discover the best features of our free AI girl image generator - unlimited, fast, and completely free forever
      </p>

      {/* Responsive Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-2  md:grid-cols-2 gap-8 p-4 mb-8">
  {Free.map((item, index) => (
    <div
      key={index}
      className="flex flex-col border-2 border-[#2c3543] p-4 bg-[#1e293b]"
    >
      {/* Icon */}
      <div className="mb-3 mt-8">
        <div className="bg-[#28334e] text-[#818cf8] 
        rounded-sm w-12 h-12 flex items-center justify-center text-5xl">
          {item.icon}
        </div>
      </div>

      {/* Title & Content */}
      <h3 className="text-white font-semibold text-2xl">{item.title}</h3>
      <p className="text-gray-400 mt-2 text-xl">{item.content}</p>
    </div>
  ))}
</div>

    </div>
  );
};

export default WhyChoose;
