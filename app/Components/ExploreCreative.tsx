import React from 'react';
import { LuSparkles } from "react-icons/lu";
import { TbBoxMultiple } from "react-icons/tb";

const Photorealistic = [
  { 
    image: "/img/chinesgirl.webp",
    content:"A stunning Asian woman with long flowing black hair, perfect facial features, flawless skin, elegant white",
    btn:<TbBoxMultiple/>,
    title:"Use This AI Prompt"
  },
  { 
    image: "/img/red.webp",
    content:"Gorgeous fashion model with perfect body proportions, confident pose, wearing elegant red evening gown, studio",
    btn:<TbBoxMultiple/>,
    title:"Use This AI Prompt"
  },
  { 
    image: "/img/laughgirl.jpeg",
    content:"Beautiful young woman with radiant smile, clear skin, sparkling eyes, casual summer outfit, beach sunset",
    btn:<TbBoxMultiple/>,
    title:"Use This AI Prompt"
  },
  { 
    image: "/img/workinggirl.webp",
    content:"Elegant businesswoman with perfect makeup, sophisticated style, navy blue suit, modern office, confident and graceful",
    btn:<TbBoxMultiple/>,
    title:"Use This AI Prompt"
  },
];

const Anime = [
  { 
    image: "/img/animi.jpg",
    content:"Cute anime girl with big sparkling eyes, sweet smile, pink hair with ribbons, magical girl outfit, surrounded by",
    btn:<TbBoxMultiple/>,
    title:"Use This AI Prompt"
  },
  { 
    image: "/img/playfulanimi.jpg",
    content:"Playful anime schoolgirl with energetic pose, bright smile, colorful twin tails, school uniform, cherry blossom petals",
    btn:<TbBoxMultiple/>,
    title:"Use This AI Prompt"
  },
  { 
    image: "/img/animiprincess.webp",
    content:"Beautiful anime princess with elegant long hair, gorgeous dress with intricate details, tiara, castle background with",
    btn:<TbBoxMultiple/>,
    title:"Use This AI Prompt"
  },
  { 
    image: "/img/modernanimigirl.jpg",
    content:"Elegant businesswoman with perfect makeup, sophisticated style, navy blue suit, modern office, confident and graceful",
    btn:<TbBoxMultiple/>,
    title:"Use This AI Prompt"
  },
];
const Artistic = [
  { 
    image: "/img/love-you-forever-quotes.png",
    content:"Elegant woman portrait in classical oil painting style, Renaissance dress, delicate facial features, graceful pose,",
    btn:<TbBoxMultiple/>,
    title:"Use This AI Prompt"
  },
  { 
    image: "/img/butterfly.jpg",
    content:"Beautiful girl surrounded by butterflies and flowers, watercolor illustration, dreamy soft colors",
    btn:<TbBoxMultiple/>,
    title:"Use This AI Prompt"
  },
  { 
    image: "/img/celebrate.webp",
    content:"Art nouveau poster of graceful woman with flowing hair and dress, decorative floral elements, gold accents,",
    btn:<TbBoxMultiple/>,
    title:"Use This AI Prompt"
  },
  { 
    image: "/img/bonwebp.webp",
    content:"Cute pet dog with birthday party hat, colorful balloons and confetti,  bold festive text, cartoon style, cheerful and fun",
    btn:<TbBoxMultiple/>,
    title:"Use This AI Prompt"
  },
]

const ThreeD = [
  { 
    image: "/img/3d.webp",
    content:"Cute cartoon 3D bunny rabbit, Pixar animation style, big expressive eyes, fluffy soft fur texture, adorable features,",
    btn:<TbBoxMultiple/>,
    title:"Use This AI Prompt"
  },
  { 
    image: "/img/panda.webp",
    content:"Adorable cartoon 3D panda bear, round chubby body, big innocent eyes, black and white fur with",
    btn:<TbBoxMultiple/>,
    title:"Use This AI Prompt"
  },
  { 
    image: "/img/kitten.webp",
    content:"Cute 3D cartoon kitten, oversized head, big sparkling eyes, soft fluffy fur, colorful",
    btn:<TbBoxMultiple/>,
    title:"Use This AI Prompt"
  },
  { 
    image: "/img/puppy.avif",
    content:"Sweet cartoon 3D puppy dog, golden retriever style, adorable floppy ears, big friendly eyes, wagging tail,",
    btn:<TbBoxMultiple/>,
    title:"Use This AI Prompt"
  },
];

const Vintage = [
  { 
    image: "/img/fashiongirl.jpg",
    content:"1980s fashion photography, retro aesthetic, film grain texture, vintage color grading, big hair and bold makeup,",
    btn:<TbBoxMultiple/>,
    title:"Use This AI Prompt"
  },
  { 
    image: "/img/1950s.jpg",
    content:"Vintage pin-up style poster, 1950s aesthetic, classic beauty in retro dress, victory rolls hairstyle, bold red lips, aged",
    btn:<TbBoxMultiple/>,
    title:"Use This AI Prompt"
  },
  { 
    image: "/img/90sflim.webp",
    content:"90s film photography, disposable camera aesthetic, candid street style, grunge fashion, natural lighting,",
    btn:<TbBoxMultiple/>,
    title:"Use This AI Prompt"
  },
  { 
    image: "/img/1920sgirl.png",
    content:"Art deco vintage portrait, 1920s flapper girl, elegant beaded dress, finger wave hairstyle, jazz age glamour,",
    btn:<TbBoxMultiple/>,
    title:"Use This AI Prompt"
  },
]

const Fantasy = [
  { 
    image: "/img/fantasyjpeg.jpeg",
    content:"Ethereal elf princess with pointed ears, flowing silver hair, glowing magical powers, enchanted forest background,",
    btn:<TbBoxMultiple/>,
    title:"Use This AI Prompt"
  },
  { 
    image: "/img/fariy.webp",
    content:"Beautiful fairy with translucent iridescent wings, surrounded by glowing fireflies, magical forest",
    btn:<TbBoxMultiple/>,
    title:"Use This AI Prompt"
  },
  { 
    image: "/img/magicalwebp.webp",
    content:"Magical girl transformation sequence, sparkles and light ribbons swirling around, pastel magical effects, starry",
    btn:<TbBoxMultiple/>,
    title:"Use This AI Prompt"
  },
  { 
    image: "/img/icequeen.jpg",
    content:"Ice queen in crystalline palace, frost powers emanating from hands, elegant frozen gown with ice crystals, snowflakes",
    btn:<TbBoxMultiple/>,
    title:"Use This AI Prompt"
  },
];

const ExploreCreative = () => {
  return (
    <div id="Explore-creative"
    className="w-full min-h-[800px] flex flex-col items-center px-4 sm:px-2 lg:px-8 bg-[#161b33]">
      
      {/* Heading */}
      <h1 className="mt-12 text-4xl font-bold text-center flex items-center justify-center gap-3">
        <LuSparkles style={{ color: "#818cf8" }} />
        Explore Creative Possibilities with Our Free AI Girl Image Generator
      </h1>

      <p className="text-center text-gray-400 mt-12 mb-12 text-2xl max-w-[730px]">
        Discover amazing AI-generated girl images created with our free AI generator. Get inspired and try these AI image prompts yourself!
      </p>

      {/* Subheading */}
      <div className="w-full px-4 sm:px-6 lg:px-8 mt-8">
        <p className="text-[#ebebeb] font-bold text-[25px] flex justify-start items-center gap-2">
          📸 Photorealistic AI Girl Images
        </p>
      </div>

      {/* Responsive image Cards with hover overlay */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-4 mb-8 w-full">
        {Photorealistic.map((item, index) => (
          <div key={index} className="relative group h-[350px] rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-3 hover:shadow-lg">
            
            {/* Image */}
            <img
              src={item.image}
              alt={`AI Girl ${index + 1}`}
              className="w-full h-full object-cover rounded-lg transition-opacity duration-300 group-hover:opacity-50"
            />

            {/* Overlay on hover */}
            <div className="
              absolute bottom-0 left-0 w-full h-0
              
              text-white
              flex flex-col items-center justify-center
              overflow-hidden
              transition-all duration-300
              group-hover:h-32
              px-4
            ">
              <p className="text-sm mb-2 text-center">{item.content}</p>
              <button className="flex items-center gap-2 bg-gradient-to-r from-[#a524e4] via-[#e3608d] to-[#2089ff] text-white px-8 py-2 mb-2 rounded">
                {item.btn} {item.title}
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Subheading animi */}
      <div className="w-full px-4 sm:px-6 lg:px-8 mt-8">
        <p className="text-[#ebebeb] font-bold text-[25px] flex justify-start items-center gap-2">
         🎨 Anime Style AI Images
        </p>
      </div>
      {/* Responsive image Cards with hover overlay */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-4 mb-8 w-full">
        {Anime.map((item, index) => (
          <div key={index} className="relative group h-[450px] rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-3 hover:shadow-lg">
            
            {/* Image */}
            <img
              src={item.image}
              alt={`AI Girl ${index + 1}`}
              className="w-full h-full object-cover rounded-lg transition-opacity duration-300 group-hover:opacity-50"
            />

            {/* Overlay on hover */}
            <div className="
              absolute bottom-0 left-0 w-full h-0
              
              text-white
              flex flex-col items-center justify-center
              overflow-hidden
              transition-all duration-300
              group-hover:h-32
              px-4
            ">
              <p className="text-sm mb-2 text-center">{item.content}</p>
              <button className="flex items-center gap-2 bg-gradient-to-r from-[#a524e4] via-[#e3608d] to-[#2089ff] text-white px-8 py-2 mb-2 rounded">
                {item.btn} {item.title}
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Subheading artistic */}
      <div className="w-full px-4 sm:px-6 lg:px-8 mt-8">
        <p className="text-[#ebebeb] font-bold text-[25px] flex justify-start items-center gap-2">
          🖼️ Artistic AI-Generated Images
        </p>
      </div>
      {/* Responsive artistic with hover overlay */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-4 mb-8 w-full">
        {Artistic.map((item, index) => (
          <div key={index} className="relative group h-[250px] rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-3 hover:shadow-lg">
            
            {/* Image */}
            <img
              src={item.image}
              alt={`AI Girl ${index + 1}`}
              className="w-full h-full object-cover rounded-lg transition-opacity duration-300 group-hover:opacity-50"
            />

            {/* Overlay on hover */}
            <div className="
              absolute bottom-0 left-0 w-full h-0
              
              text-white
              flex flex-col items-center justify-center
              overflow-hidden
              transition-all duration-300
              group-hover:h-32
              px-4
            ">
              <p className="text-sm mb-2 text-center">{item.content}</p>
              <button className="flex items-center gap-2 bg-gradient-to-r from-[#a524e4] via-[#e3608d] to-[#2089ff] text-white px-8 py-2 mb-2 rounded">
                {item.btn} {item.title}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Subheading  3D Render*/}
      <div className="w-full px-4 sm:px-6 lg:px-8 mt-8">
        <p className="text-[#ebebeb] font-bold text-[25px] flex justify-start items-center gap-2">
          🎮
3D Render AI Girl Images
        </p>
      </div>

       {/* Responsive 3D Render  with hover overlay */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-4 mb-8 w-full">
        {ThreeD.map((item, index) => (
          <div key={index} className="relative group h-[250px] rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-3 hover:shadow-lg">
            
            {/* Image */}
            <img
              src={item.image}
              alt={`AI Girl ${index + 1}`}
              className="w-full h-full object-cover rounded-lg transition-opacity duration-300 group-hover:opacity-50"
            />

            {/* Overlay on hover */}
            <div className="
              absolute bottom-0 left-0 w-full h-0
              
              text-white
              flex flex-col items-center justify-center
              overflow-hidden
              transition-all duration-300
              group-hover:h-32
              px-4
            ">
              <p className="text-sm mb-2 text-center">{item.content}</p>
              <button className="flex items-center gap-2 bg-gradient-to-r from-[#a524e4] via-[#e3608d] to-[#2089ff] text-white px-8 py-2 mb-2 rounded">
                {item.btn} {item.title}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Subheading vintage */}
      <div className="w-full px-4 sm:px-6 lg:px-8 mt-8">
        <p className="text-[#ebebeb] font-bold text-[25px] flex justify-start items-center gap-2">
         📼
Vintage/Retro AI Images
        </p>
      </div>

       {/* Responsive 3D Render  with hover overlay */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-4 mb-8 w-full">
        {Vintage.map((item, index) => (
          <div key={index} className="relative group h-[450px] rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-3 hover:shadow-lg">
            
            {/* Image */}
            <img
              src={item.image}
              alt={`AI Girl ${index + 1}`}
              className="w-full h-full object-cover rounded-lg transition-opacity duration-300 group-hover:opacity-50"
            />

            {/* Overlay on hover */}
            <div className="
              absolute bottom-0 left-0 w-full h-0
              
              text-white
              flex flex-col items-center justify-center
              overflow-hidden
              transition-all duration-300
              group-hover:h-32
              px-4
            ">
              <p className="text-sm mb-2 text-center">{item.content}</p>
              <button className="flex items-center gap-2 bg-gradient-to-r from-[#a524e4] via-[#e3608d] to-[#2089ff] text-white px-8 py-2 mb-2 rounded">
                {item.btn} {item.title}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Subheading fantasy */}
      <div className="w-full px-4 sm:px-6 lg:px-8 mt-8">
        <p className="text-[#ebebeb] font-bold text-[25px] flex justify-start items-center gap-2">
✨
Fantasy AI Girl Images
        </p>
      </div>

       {/* Responsive 3D Render  with hover overlay */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-4 mb-8 w-full">
        {Fantasy.map((item, index) => (
          <div key={index} className="relative group h-[350px] rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-3 hover:shadow-lg">
            
            {/* Image */}
            <img
              src={item.image}
              alt={`AI Girl ${index + 1}`}
              className="w-full h-full object-cover rounded-lg transition-opacity duration-300 group-hover:opacity-50"
            />

            {/* Overlay on hover */}
            <div className="
              absolute bottom-0 left-0 w-full h-0
              
              text-white
              flex flex-col items-center justify-center
              overflow-hidden
              transition-all duration-300
              group-hover:h-32
              px-4
            ">
              <p className="text-sm mb-2 text-center">{item.content}</p>
              <button className="flex items-center gap-2 bg-gradient-to-r from-[#a524e4] via-[#e3608d] to-[#2089ff] text-white px-8 py-2 mb-2 rounded">
                {item.btn} {item.title}
              </button>
            </div>
          </div>
        ))}
      </div>
       <p className="text-center text-gray-400 mt-12 mb-12 text-lg max-w-full">
       💡 Click on any AI-generated image to use its prompt and create your own version with our free generator!
      </p>
    </div>
  );
};

export default ExploreCreative;
