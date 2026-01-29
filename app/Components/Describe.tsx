'use client'
import React from 'react';
import { MdAccessTime } from "react-icons/md";
import { Wand2 } from "lucide-react";
import { useState } from "react";
import { Check } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import { LuSparkles } from "react-icons/lu";

import { useTheme } from "./ThemeContext";

const ratiosData = [
  { label: "1:1", name: "Square" },
  { label: "16:9", name: "Landscape" },
  { label: "9:16", name: "Portrait" },
  { label: "4:3", name: "Standard" },
  { label: "3:4", name: "Vertical" },
  { label: "21:9", name: "Ultra-wide" },
  { label: "9:21", name: "Ultra Tall" },
  { label: "3:2", name: "Classic" },
  { label: "2:3", name: "Classic Tall" },
];

interface DescribeProps {
  setImages: (images: string[]) => void; 
}



const Describe: React.FC<DescribeProps> = ({ setImages }) => {
const [prompt, setPrompt] = useState('');

  const [loading, setLoading] = useState(false);
  
 
  const generateImage = async () => {
    if (!prompt) return;
    setLoading(true);

    try {
      const res = await fetch("/api/generate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();

      if (!data.images || data.images.length === 0) {
        alert("Image generation failed. Try a longer prompt.");
        setLoading(false);
        return;
      }

      // Send images to RightSide
      setImages(data.images);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };
  const { isLightMode } = useTheme();
const [ratios, setRatios] = useState(
    ratiosData.map(r => ({ ...r, active: r.label === "3:4" }))
  );

  
  return (
   <div className="w-full flex flex-col lg:flex-row justify-center px-4 gap-8 mt-4">

      {/* Left side */}
      <div className="  
                bg-[#1e293b] rounded-lg  border-[#2c3543] ">
       <div className="flex justify-between items-center w-full px-2 sm:px-4 py-4">     
         <h1 className="text-lg font-bold">
        Describe Your Dream Girl 💝
      </h1>
      <button className="flex items-center gap-2 border-1 border-[#4b5563] px-4 py-2 bg-[#2b3747] text-[#e2e8d4] rounded-lg hover:bg-[#374151] transition-colors duration-200">
        <MdAccessTime /> History
      </button>
    </div>
    
    {/*E.g content  */}
    <textarea  value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
          
          placeholder="E.g., A beautiful Asian girl..."
          className="h-[180px] w-full px-4 py-2 bg-[#0f162a] text-[#9da4b0] border border-[#4b5563] rounded-lg resize-none"
        />


{/*ai optimize  */}

<div className='flex justify-between items-center'>
<button className="flex items-center gap-2 mt-2 bg-[#243041] border-1 border-[#4b5563 px-3 py-1  text-[#77808d] rounded-lg hover:bg-[#374151] transition-colors duration-200">
      <Wand2 size={18} />
             AI Optimize
      </button>
      <h1 style={{color:"#9ca3a5"}}>0 / 1000</h1>

</div>

<h1 style={{color:'#e2e8f0',marginTop:"20px",paddingBottom:"15px",fontWeight: 600,fontSize:"17px",}}>Image Size</h1>

{/*div aspect ratio */}
<div className="flex gap-2 p-2   rounded-xl">
      {ratios.map((item, index) => (
        <div
          key={index}
           
          className={`relative w-[88px] h-[110px] rounded-xl border-2 border-[#4b5563]
          flex flex-col items-center justify-center gap-2 cursor-pointer transform transition-transform duration-200
    hover:scale-110
           ${item.active ? "border-[#6366f1]" : "border-[#1f2937]"}`}
        >
          {/* Check icon */}
          {item.active && (
            <div className="absolute -top-2 -right-2 bg-[#6366f1] rounded-full p-1">
              <Check size={17} className="text-white" />
            </div>
          )}

          {/* Inner icon shape */}
          <div
  className={`border-3 rounded-sm ${
    item.label === "1:1"
      ? "w-5 h-5"
      : item.label === "16:9"
      ? "w-7 h-4"
      : item.label === "9:16"
      ? "w-4 h-7"
      : item.label === "4:3"
      ? "w-5 h-5"
      : item.label === "3:4"
      ? "w-5 h-7"
      : item.label === "21:9"
      ? "w-9 h-4"
      : item.label === "9:21"
      ? "w-3 h-8"
      : item.label === "3:2"
      ? "w-7 h-4"
      : item.label === "2:3"
      ? "w-5 h-7"
      : ""
  } ${
    item.active ? "border-[#6366f1]" : "border-[#9ca3af]"
  }`}
/>


          {/* Text */}
          <div className="text-center">
            <p
              className={`text-xs font-semibold ${
                item.active ? "text-[#6366f1]" : "text-[#cbd5f5]"
              }`}
            >
              {item.label}
            </p>
            <p className="text-[11px] text-[#94a3b8] ">{item.name}</p>
          </div>
        </div>
      ))}
    </div>
  
{/*success */}

<div className='flex justify-center items-center mt-4'>
<div className='border-1 border-[#797979] bg-[#4a494e] w-90 h-18 p-4 flex justify-between items-center'>
<h1 className="flex items-center gap-2">
  <div className="w-8 h-8 rounded-full bg-green-400 flex justify-center items-center">
    <Check className="text-white" size={24} strokeWidth={2.5} />

  </div>
  Success!
</h1>


<h1 className="flex items-center gap-2">
  <img src="/img/cloud.avif" alt="Cloudflare Logo" 
  className="w-28 h-12 " />

</h1>

</div></div>

{/* AI generate image*/}
<button onClick={generateImage}

        
className='flex items-center justify-center gap-2 mt-8 rounded-lg p-4 w-full h-14 bg-[#505a99]
text-[#162032] font-semibold cursor-pointer'>
  <LuSparkles style={{ color: "#162032" }} />
 {loading ? 'Generating...' : 'Generate Image'}
      </button>


      {/*free & unlimited */}
    <div className='flex items-center justify-center gap-2 mt-8 rounded-lg p-4 w-full h-14 bg-[#2c1f35]
text-[white] font-semibold'>
  ✨
  Generate Image</div>
      </div>

  
    

     
    </div>

 

  );
};
 export default Describe;  

