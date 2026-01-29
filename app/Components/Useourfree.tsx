import React from 'react'

const Describe =[
{title:"Describe Your AI Girl Image",content:"Write a detailed description for our free AI girl image generator. Be creative and specific with your prompt - the more details you provide to our AI generator, the better your AI-generated girl image will be."},
{title:"Choose Your Image Size",content:"Select your preferred image dimensions from multiple size options in our free generator. Pick the format that best fits your creative needs for your AI girl image."},
{title:"Generate & Download Your AI Image",content:"Click generate and our free AI girl image generator will create your image in about 30 seconds. Download your AI-generated girl image instantly and use it however you like!"},

]
const Useourfree = () => {
  return (
   <div
  className="
    w-full
    min-h-[800px]
    flex flex-col
    items-center
    px-2 sm:px-6 lg:px-2
    mt-6 sm:mt-8
    bg-[#131c30]
  "
>


      
      <h1 className="
        text-[#ebebeb]
        font-bold
        text-center
        mt-2 sm:mt-10 lg:mt-[50px]
       text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-[40px]
      ">
        How to Use Our Free AI Girl Image Generator
      </h1>

      <p style={{color:"#9ca397",width:'520px',textAlign:"center",
        marginTop:'20px'
      }}>Create stunning AI girl images in three simple steps - completely free with our AI image generator</p>
<img src="/img/d.png" style={{width:"1000px"}}/>

{/*map */}
<div className="flex flex-col lg:flex-row gap-8 justify-center  px-4 ">
  {Describe.map((item, index) => (
    <div
      key={index}
      className="flex-1 text-center w-[380px] mt-4"
    >
      <h2 className="text-lg font-semibold text-white">{item.title}</h2>
      <p className="text-gray-400 mt-2">{item.content}</p>
    </div>
  ))}
</div>

 <p
 className='text-center text-gray-400 mt-12 mb-12 text-sm'>Ready to create your first AI girl image? Scroll up to try our free generator now! 👆</p>
    </div>
  )
}

export default Useourfree
