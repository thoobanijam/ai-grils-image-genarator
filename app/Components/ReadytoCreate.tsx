import React from "react";
import { HiOutlineSparkles } from "react-icons/hi";
import { IoHeartOutline } from "react-icons/io5";
import { BsLightningCharge } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoIosArrowRoundUp } from "react-icons/io";

const btn =[
    {icon:<CiHeart/>,
        title: "100% Free AI Generator Forever",
    style: { backgroundColor: "#260a48", color: "#dab2ff" ,border:"1px solid #6410a3" },
    },

    {icon:<HiOutlineSparkles/>,
        title: "Unlimited AI Image Generator",
   style: { backgroundColor: "#2f102c", color: "#fda5d5",border:"1px solid #a3004c" },
    },

    {icon:< BsLightningCharge/>,
        title: "Instant AI-Generator Result",
   style: { backgroundColor: "#12244b", color: "#87bbf5",border:"1px solid #183bb5" },
    },
]

const ReadytoCreate = () => {
  return (
   <div
  className="relative w-full flex flex-col items-center min-h-[1000px]  px-4 sm:px-6 lg:px-8 mb-12 pt-10 overflow-hidden"
  style={{
    backgroundImage: `
      radial-gradient(circle at top center, #2a1c40 0%, transparent 60%),
      radial-gradient(circle at bottom right, #0c2e4a 0%, transparent 55%),
      linear-gradient(to right, #04081c, #04091c)
    `,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }}
>
  {/* Sparkles */}
  <HiOutlineSparkles className="sparkle sparkle-1" />
  <HiOutlineSparkles className="sparkle sparkle-2" />
  <HiOutlineSparkles className="sparkle sparkle-3" />

  {/* Heart – bottom center */}
  <IoHeartOutline className="heart-blink" />

  {/* Lightning icon in gradient circle */}
  <div
    className="mt-5 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#bb4af2] to-[#e341b7]"
    style={{ width: "70px", height: "70px" }}
  >
    <BsLightningCharge style={{ fontSize: "30px", color: "white" }} />
  </div>

  {/* Text in column */}
  <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 pt-8 tracking-tighter
                text-[55px] font-bold w-[69%] leading-none">

      
      <h1 className="flex whitespace-nowrap">
        <span style={{ color: "#ad28d6" }}>R</span>
        <span style={{ color: "#b52bc9" }}>e</span>
        <span style={{ color: "#b429ba" }}>a</span>
        <span style={{ color: "#be2ab9" }}>d</span>
        <span style={{ color: "#c527ae" }}>y</span>
      </h1>

<h1 className="flex whitespace-nowrap">

        <span style={{ color: "#b72ac4" }}>t</span>
        <span style={{ color: "#bc2abc" }}>o</span>
      </h1>

      <h1 className="flex whitespace-nowrap">
        <span style={{ color: "#d31d98" }}>C</span>
        <span style={{ color: "#cc23a2" }}>r</span>
        <span style={{ color: "#d01f9b" }}>e</span>
        <span style={{ color: "#d61891" }}>a</span>
        <span style={{ color: "#db0c88" }}>t</span>
        <span style={{ color: "#df0083" }}>e</span>
      </h1>

     <h1 className="flex whitespace-nowrap">
        <span style={{ color: "#dc1780" }}>Y</span>
        <span style={{ color: "#d22986" }}>o</span>
        <span style={{ color: "#c73993" }}>u</span>
        <span style={{ color: "#bb439d" }}>r</span>
              </h1>

      <h1 className="flex whitespace-nowrap">
        <span style={{ color: "#8f4597" }}>P</span>
        <span style={{ color: "#9e52b5" }}>e</span>
        <span style={{ color: "#9556bc" }}>r</span>
        <span style={{ color: "#8859c5" }}>f</span>
        <span style={{ color: "#795acd" }}>e</span>
        <span style={{ color: "#6956c5" }}>c</span>
        <span style={{ color: "#605ee0" }}>t</span>
              </h1>

        <h1 className="flex whitespace-nowrap">

        <span style={{ color: "#d71690" }}>A</span>
        <span style={{ color: "#dd0786" }}>I</span>
      </h1>

      <h1 className="flex whitespace-nowrap">
        <span style={{ color: "#c71978" }}>G</span>
        <span style={{ color: "#d32b88" }}>i</span>
        <span style={{ color: "#c63b94" }}>r</span>
        <span style={{ color: "#bf419a" }}>l</span>
      </h1>

     <h1 className="flex whitespace-nowrap">
        <span style={{ color: "#a74fae" }}>I</span>
        <span style={{ color: "#9656bc" }}>m</span>
        <span style={{ color: "#8e58c2" }}>a</span>
        <span style={{ color: "#7e5bcd" }}>g</span>
        <span style={{ color: "#705dd7" }}>e</span>
        <span style={{ color: "#605ee0" }}>?</span>

      </h1>
 
    </div>
    <p className="max-w-[53%] text-center text-[#9ca3af] mt-6 text-2xl">
    Start generating stunning AI girl images right now with our free AI image generator - completely free, no signup required!
  </p>
  <div className="flex justify-center mt-5">
   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 max-w-[1100px] mx-auto">
  {btn.map((item, index) => (
    <div
      key={index}
      style={item.style}
      className={`
        flex items-center gap-4 px-12 py-3 rounded-3xl
        justify-center whitespace-nowrap 
        transition-transform hover:scale-105
        ${index === btn.length - 1 ? "sm:col-span-2 sm:mx-auto" : ""}
      `}
    >
      <span className="text-xl">{item.icon}</span>
      <span className="text-sm font-medium">{item.title}</span>
    </div>
  ))}
</div>

  </div>
  <div className="bg-gradient-to-r from-[#0a1225] via-[#0d1f38] to-[#10314e]"
  style={{width:"400px",height:"25px",marginTop:"30px",padding:"30px 25px",
  borderRadius:"25px",backgroundColor:"#11314e",color:"white",boxShadow: "0 6px 12px #5939a3",
    display:"flex",justifyContent:"center",alignItems:"center"}}>Start Create AI Images Now
    <IoIosArrowRoundUp /> </div>
    <p className="max-w-[53%] text-center text-[#9ca3af] mt-6 text-lg mt-12">
   ✨ Join thousands of users creating amazing AI girl images every day with our free generator
  </p>
  <div className="w-[80%] text-center mt-10 mx-auto ">
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "16px",
      
    }}
  >
    {/* Circles */}
    <div className="flex items-center">
      <span className="w-8 h-8 rounded-full bg-[#e571d7]"></span>
      <span className="w-8 h-8 rounded-full bg-[#e571d7] -ml-4 border-2 border-[#1f2a3f]"></span>
      <span className="w-8 h-8 rounded-full bg-[#e571d7] -ml-3 border-2 border-[#1f2a3f]"></span>
      <span className="w-8 h-8 rounded-full bg-[#e571d7] -ml-3 border-2 border-[#1f2a3f]"></span>
    </div>

    {/* Text */}
    <div className="text-[#9ca3af] text-lg leading-tight">
      <span className="font-semibold text-white">
        10,000+ Happy AI Image Generator Users
      </span>
      
      ⭐⭐⭐⭐⭐ Loved by AI Art Creators
    </div></div>
  </div>
</div>


  );
};

export default ReadytoCreate;
