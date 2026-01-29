"use client";
import Image from "next/image";
import { useState } from "react";
import FreeAi from "./Components/FreeAi";
import Describe from "./Components/Describe";
import RightSide from "./Components/RightSide"; 
import Useourfree from "./Components/Useourfree";
import WhyChoose from "./Components/WhyChoose";
import ExploreCreative from "./Components/ExploreCreative";
import HowtoWrite from "./Components/HowtoWrite";
import FreeAi_Girl from "./Components/FreeAi_Girl";
import ReadytoCreate from "./Components/ReadytoCreate";



export default function Home() {
  const [images, setImages] = useState<string[]>([]);
  return (
    <div className="bg-[#0f162a] min-h-screen">
      <div className="pt-20 ">
        <FreeAi />
        <div className="w-full flex flex-col lg:flex-row justify-center px-4 gap-8 mt-4">
          {/* left side */}
          <div className="w-full lg:w-1/2 h-auto lg:h-[800px] md:w-full sm:w-full 
                bg-[#1e293b] rounded-lg border-[#2c3543] ">
               <Describe setImages={setImages} />
          </div>

          {/* right side */}
          <div className="w-full lg:w-1/2 h-auto lg:h-[800px] md:w-full sm:w-full 
                bg-[#1e293b] rounded-lg border-3 border-[#2c3543] ">
             <RightSide images={images} />
          </div>
        </div>

        <Useourfree />
        <WhyChoose />
        <ExploreCreative />
        <HowtoWrite />
        <FreeAi_Girl />
        <ReadytoCreate />
      
      </div>
    </div>
  );
}
