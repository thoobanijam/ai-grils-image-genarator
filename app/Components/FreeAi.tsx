'use client'
import React from "react";
import { useTheme } from "./ThemeContext"; 

const FreeAi = () => {
  const { isLightMode } = useTheme();
    const btn = [
  {
    icon: "✅",
    title: "Free Forever",
    style: { backgroundColor: "#0e292b", color: "#5bdc9c" },
  },
  {
    icon: "🚀",
    title: "Fast Generation",
    style: { backgroundColor: "#132149", color: "#77c5ff" },
  },
  {
    icon: "⚡",
    title: "AI-Powered",
    style: { backgroundColor: "#261748", color: "#dab2ff" },
  },
  {
    icon: "🎨",
    title: "High Quality",
    style: { backgroundColor: "#331532", color: "#eb99c6" },
  },
];
  return (
    <>
    
   <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-2 tracking-tighter
                text-3xl sm:text-2xl md:text-2xl lg:text-5xl font-bold ">

      
      <h1 className="flex whitespace-nowrap ">
        <span style={{ color: "#b52bca" }}>F</span>
        <span style={{ color: "#b82bc4" }}>r</span>
        <span style={{ color: "#bd29ba" }}>e</span>
        <span style={{ color: "#c029b6" }}>e</span>
      </h1>

<h1 className="flex whitespace-nowrap">

        <span style={{ color: "#c328b1" }}>A</span>
        <span style={{ color: "#c727ab" }}>I</span>
      </h1>

      <h1 className="flex whitespace-nowrap">
        <span style={{ color: "#d31d98" }}>G</span>
        <span style={{ color: "#d41a94" }}>i</span>
        <span style={{ color: "#da118c" }}>r</span>
        <span style={{ color: "#dd0987" }}>l</span>
      </h1>

     <h1 className="flex whitespace-nowrap">
        <span style={{ color: "#e50078" }}>I</span>
        <span style={{ color: "#e3007a" }}>m</span>
        <span style={{ color: "#dd127e" }}>a</span>
        <span style={{ color: "#d22b88" }}>g</span>
        <span style={{ color: "#cb358f" }}>e</span>
      </h1>

      <h1 className="flex whitespace-nowrap">
        <span style={{ color: "#c03f99" }}>G</span>
        <span style={{ color: "#ba449e" }}>e</span>
        <span style={{ color: "#ab49a4" }}>n</span>
        <span style={{ color: "#a151b3" }}>e</span>
        <span style={{ color: "#9a54b9" }}>r</span>
        <span style={{ color: "#8d58c2" }}>a</span>
        <span style={{ color: "#8859c6" }}>t</span>
        <span style={{ color: "#735cd3" }}>o</span>
        <span style={{ color: "#715cd5" }}>r</span>
      </h1>

    </div>
    <div className="flex justify-center mt-5">
  <p className="max-w-[55%] text-center text-[#9ca3af] sm:w-[85%] sm:text-[20px] text-[25px]">
    Create stunning AI-generated images instantly. No login required, completely free, unlimited generations. All languages supported!
  </p>
</div>
{/*map button  */}
<div className="flex flex-wrap justify-center gap-6 mt-6 ">
  {btn.map((item, index) => (
    <div
      key={index}
      style={item.style} 
      className="flex items-center  gap-2 px-6 py-4 rounded-3xl justify-center whitespace-nowrap flex-1 min-w-[200px] max-w-[230px] transition transform hover:scale-105"

    >
      <span className="text-xl">{item.icon}</span>
      <span className="text-lg font-medium">{item.title}</span>
    </div>
  ))}
</div>

    </>
  );
};

export default FreeAi;
