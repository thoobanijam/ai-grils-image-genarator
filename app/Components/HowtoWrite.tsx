import React from "react";
import { LuSparkles, LuLightbulb } from "react-icons/lu";
import { SlPencil } from "react-icons/sl";
import { IoColorPaletteOutline, IoReload } from "react-icons/io5";
import { CiCircleCheck } from "react-icons/ci";
import { GoQuestion } from "react-icons/go";

const Tips = [
  {
    icon: (
      <LuLightbulb
        style={{
          color: "white",
          backgroundColor: "#f99800",
          border: "1px solid #f99800",
          padding: "6px",
          borderRadius: "10px",
        }}
      />
    ),
    Tip: "Tip 1",
    title: "What is a Prompt in AI Image Generation?",
    content:
      "A prompt is your creative description that tells our free AI girl image generator what image to create.Think of it as painting with words - the more vivid and detailed your prompt, the more stunning your AI-generated girl image will be with our AI generator.",
    EgIcon: <CiCircleCheck />,
    Eg: "Example",
    para:
      "A beautiful Asian girl with flowing black hair, wearing an elegant white dress in a cherry blossom garden",
  },
  {
    icon: (
      <SlPencil
        style={{
          color: "white",
          backgroundColor: "#0e91fa",
          border: "1px solid #0e91fa",
          padding: "6px",
          borderRadius: "10px",
        }}
      />
    ),
    Tip: "Tip 2",
    title: "Be Clear and Specific with Your AI Generator",
    content:
      "Clarity is key when using our free AI girl image generator.Instead of vague descriptions, provide specific details about the girl image you want to create. Include characteristics like appearance, clothing, environment, and mood to get the best AI-generated results.",
    EgIcon: <CiCircleCheck />,
    Eg: "Example",
    para:
      "A confident businesswoman in her 30s, short brown hair, wearing a navy blue suit, standing in a modern office with glass walls",
  },
  {
    icon: (
      <IoColorPaletteOutline
        style={{
          color: "white",
          backgroundColor: "#c14ae8",
          border: "1px solid #c14ae8",
          padding: "6px",
          borderRadius: "10px",
        }}
      />
    ),
    Tip: "Tip 3",
    title: "Describe Visual Style for AI Image Generation",
    content:
      "Our free AI girl image generator supports various artistic styles. Specify whether you want photorealistic portraits, anime-style illustrations, oil paintings, or any other artistic approach. Don't forget to mention lighting, colors, and atmosphere for enhanced AI-generated images.",
    EgIcon: <CiCircleCheck />,
    Eg: "Example",
    para:
      "Photorealistic portrait, soft natural lighting, warm tones, cinematic composition",
  },
  {
    icon: (
      <IoReload
        style={{
          color: "white",
          backgroundColor: "#00c070",
          border: "1px solid #00c070",
          padding: "6px",
          borderRadius: "10px",
        }}
      />
    ),
    Tip: "Tip 4",
    title: "Experiment with Our Free AI Generator",
    content:
      "The beauty of our free AI girl image generator is unlimited generations! Try different variations of your prompt - add details, change styles, or adjust descriptions. Each iteration helps you discover what works best with our AI image generator and refine your creative vision.",
    EgIcon: <CiCircleCheck />,
    Eg: "Example",
    para:
      "Girl in garden → Anime girl in magical garden → Purple-haired anime girl with glowing flowers",
  },
];

const HowtoWrite = () => {
  return (
    <div className="w-full min-h-[800px] flex flex-col items-center px-4 sm:px-6 lg:px-8 bg-[#191434] mb-12">
      <h1 className="mt-12 text-4xl font-bold text-center flex items-center gap-3 text-white">
        <LuSparkles className="text-indigo-400" />
        How to Write Perfect Prompts for Our Free AI Girl Image Generator
      </h1>

      <p className="text-center text-gray-400 mt-3 text-lg max-w-[690px]">
        Master the art of creating stunning AI girl images with expert tips and examples.
      </p>

      {/* Tips Grid */}
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-2 w-full max-w-[1095px] mx-auto justify-center">

  {Tips.map((item, index) => (
    <div
      key={index}
      className="bg-[#1e293b] rounded-xl p-10 h-auto w-full max-w-[500px] mx-auto"
    >
      {/* Icon + Tip */}
      <div className="flex gap-3 items-start">
        <div className="text-[49px] hover:scale-115 transition-transform">
          {item.icon}
        </div>

        <div className="flex flex-col">
          <span className="text-gray-400 text-sm font-medium text-[15px]">
            {item.Tip}
          </span>
          <h2 className="text-white font-semibold text-xl mt-2">
            {item.title}
          </h2>
        </div>
      </div>

      {/* Content aligned under Tip (not icon) */}
      <div className="mt-3 flex flex-col gap-2 w-full">
        <p className="text-gray-400 text-md">
          {item.content}
        </p>

        <div className="flex items-center gap-2 text-indigo-400 text-sm mt-4">
          <span className="text-[18px] font-bold">{item.EgIcon}</span>
          <span>{item.Eg}</span>
        </div>

        <p className="text-gray-400 text-sm max-w-full">
          {item.para}
        </p>
      </div>
    </div>
  ))}
</div>

<div className="flex flex-col items-center pt-10 mt-8
                w-full sm:w-[90%] md:w-[95%] lg:w-[72%] 
                h-auto lg:h-[350px] 
                bg-gradient-to-r from-[#291b45] via-[#2e193b] to-[#1d2045] 
                rounded-2xl px-4 sm:px-8 py-6 lg:px-8 py-6">
  
  {/* Icon */}
 <div className="rounded-full p-3"
     style={{ background: "linear-gradient(to right, #b84af6, #e641b4)" }}>
  <LuSparkles className="text-white w-[50px] h-[50px]" />
</div>


  {/* Heading */}
  <h1 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-bold text-center text-white">
    Ready to Create Magic with Our Free AI Girl Image Generator?
  </h1>

  {/* Paragraph */}
  <p className="text-center text-gray-400 mt-3 text-sm sm:text-base lg:text-lg max-w-full sm:max-w-[600px] lg:max-w-[690px]">
    Put these tips into practice with our free AI image generator! Experiment with different prompts and discover the endless creative possibilities of AI girl image generation. Remember - it's completely free and unlimited!
  </p>
</div>

    </div>
  );
};

export default HowtoWrite;
