import React from 'react'
import { MdOutlineDateRange } from "react-icons/md";
import { IoIosLink } from "react-icons/io";

const page = () => {
  return (
    <div className="w-full h-[auto]  bg-[#0f172a] text-white px-1  lg:px-14 py-12">
   
         
         <div className='flex justify-center items-center flex-col p-2 
                      sm:w-[100%]  
                    md:w-[100%]
                 lg:w-[100%] 
                   '>
                     <h1 className='text-[#e2e8f0] font-bold text-2xl p-6'>Privacy Policy</h1>
                     <p className='text-[#9ca3af] w-[66%] text-center p-2'>
                      Privacy policy for AI Girl Image Generator</p>
                   <p className="flex items-center gap-1 text-gray-400 mt-4">
               <MdOutlineDateRange />
               Nov 10, 2025
             </p>
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
               <h3 className="group text-2xl md:text-lg mb-4 pt-4 cursor-pointer flex items-center gap-2   mt-2">
                         Introduction
                           <IoIosLink
                   className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                 /></h3>
                  <p className=" text-md">
         Welcome to AI Girl Image Generator, a free online AI image generation service. At AI Girl Image Generator, your privacy is of utmost importance to us, and this privacy policy outlines how we collect, use, and protect your information when you use our services.
        </p>
    <h3 className="group text-2xl md:text-lg mb-4 pt-4 cursor-pointer flex items-center gap-2   mt-2">
                        Information Collection and Use
                           <IoIosLink
                   className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                 /></h3>
<p className=" text-md">
         We are committed to minimizing data collection. Here's what we collect and why:  
         </p>
<p className=" text-md pt-4">
         Prompt History (Local Storage Only)         
         </p>
 <div className=" pl-2 pt-4 rounded-xl text-gray-200 space-y-3">
  

  <ul className="list-disc  space-y-2">
    <li>
      <span className="font-semibold">What We Collect:</span> Your image generation prompts are saved locally in your browser.
    </li>
    <li>
      <span className="font-semibold">Purpose:</span> To provide quick access to your recent prompts for convenience.
    </li>
    <li>
      <span className="font-semibold">Important:</span> This data is stored only on your device and never sent to our servers.
    </li>
  </ul>
</div>

{/*usage */}
<p className=" text-md pt-4">
        Usage Analytics        
         </p>
 <div className=" pl-2 pt-4 rounded-xl text-gray-200 space-y-3">
  

  <ul className="list-disc  space-y-2">
    <li>  
        What We Collect: Anonymous usage statistics such as page views, feature usage, and general interaction patterns.
    </li>
    <li>
      Purpose: To improve our service and understand how users interact with our platform.
    </li>
    <li>
      Note: This data is anonymized and cannot be used to identify individual users.
    </li>
  </ul>
</div>
{/*Device Information */}
<p className=" text-md pt-4">
      Device Information        
         </p>
 <div className=" pl-2 pt-4 rounded-xl text-gray-200 space-y-3">
  

  <ul className="list-disc  space-y-2">
    <li>  
        What We Collect: Basic device and browser information such as device type, operating system, and browser type.    </li>
    <li>
     Purpose: To optimize our service for different devices and ensure compatibility.    </li>
    
  </ul>
</div>

<p className=" text-md pt-4">
   Cookies        
         </p>
 <div className=" pl-2 pt-4 rounded-xl text-gray-200 space-y-3">
  

  <ul className="list-disc  space-y-2">
    <li>  
       What We Collect: Essential cookies for website functionality and analytics cookies (with your consent).   </li>
    <li>
    Purpose: To enhance user experience and analyze service usage.   </li>
    
  </ul>
</div>
{/*what we dont collect */}
 <h3 className="group text-2xl md:text-lg mb-4 pt-4 cursor-pointer flex items-center gap-2   mt-2">
                      What We Don't Colloct
                           <IoIosLink
                   className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                 /></h3>
<div className=" pl-2 pt-4 rounded-xl text-gray-200 space-y-3">
  

  <ul className="list-disc  space-y-2">
    <li>  
      No Account Information: We do not require registration, so we don't collect names, email addresses, or passwords.   </li>
    <li>
No Generated Images: Your generated images are NOT stored on our servers. Images are displayed to you and then deleted.</li>
     <li>
No Payment Information: Our service is completely free, so we don't collect any payment or billing information.</li>
    <li>
No Personal Identification: We do not collect any personally identifiable information.</li>   
  </ul>
</div>
{/*data storage */}
<h3 className="group text-2xl md:text-lg mb-4 pt-4 cursor-pointer flex items-center gap-2   mt-2">
                     Data Storage and Security
                           <IoIosLink
                   className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                 /></h3>
<div className=" pl-2 pt-4 rounded-xl text-gray-200 space-y-3">
  

  <ul className="list-disc  space-y-2">
    <li>  
      Generated Images: Images are generated on-demand and are NOT stored on our servers. Please download any images you want to keep immediately. 
        </li>
    <li>
Prompts: Your prompt history is stored locally in your browser only. We have no access to this data.
</li>
     <li>
Security: We implement industry-standard security measures to protect the limited data we do collect.
</li>
      </ul>
</div>
{/*Third party */}
<h3 className="group text-2xl md:text-lg mb-4 pt-4 cursor-pointer flex items-center gap-2   mt-2">
                 Third-Party Services
                           <IoIosLink
                   className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                 /></h3>
<p className=" text-md">
We may use analytics services like Google Analytics to understand service usage. All analytics data is anonymized and cannot be used to identify individual users.      
         </p>
<h3 className="group text-2xl md:text-lg mb-4 pt-4 cursor-pointer flex items-center gap-2   mt-2">
             Your Rights and Choices
                           <IoIosLink
                   className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                 /></h3>
<p className=" text-md">
You have the following rights:         </p>

{/* uour right choice*/}
<div className=" pl-2 pt-4 rounded-xl text-gray-200 space-y-3">
  

  <ul className="list-disc  space-y-2">
    <li>  
      Clear Local Data: You can clear your prompt history at any time using the "Clear All" button in the history dialog.
        </li>
    <li>
Disable Cookies: You can disable cookies in your browser settings, though this may affect functionality.
</li>
     <li>
Opt-out of Analytics: You can use browser extensions to opt-out of analytics tracking.
</li>
      </ul>
</div>
{/*children's privacy */}
<h3 className="group text-2xl md:text-lg mb-4 pt-4 cursor-pointer flex items-center gap-2   mt-2">
           Children's Privacy
                           <IoIosLink
                   className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                 /></h3>
<p className=" text-md">
Our service is not directed to children under 13. We do not knowingly collect information from children under 13. If you believe a child has provided us with information, please contact us immediately.
       </p>
{/*changes to this policy*/ }
<h3 className="group text-2xl md:text-lg mb-4 pt-4 cursor-pointer flex items-center gap-2   mt-2">
        Changes to This Policy
                           <IoIosLink
                   className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                 /></h3>
<p className=" text-md">
We may update this privacy policy from time to time. We will notify you of any changes by:
       </p>
<div className=" pl-2 pt-4 rounded-xl text-gray-200 space-y-3">
  

  <ul className="list-disc  space-y-2">
    <li>  
     Posting the new policy on this page      
       </li>
    <li>
Updating the "effective date" at the top of this policy</li>
    
      </ul>
</div>
<p className=" text-md">
You are advised to review this privacy policy periodically for any changes.
     </p>
    <h3 className="group text-2xl md:text-lg mb-4 pt-4 cursor-pointer flex items-center gap-2   mt-2">
      Contact Us
                           <IoIosLink
                   className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                 /></h3>
<p className=" text-md">
If you have any questions or concerns about this privacy policy or our data practices, please contact us at:
    </p>
    <p className=" text-md">
Service Name: AI Girl Image Generator Website:    </p>
<p className="text-md text-gray-300 flex flex-wrap gap-4">
  <a
    href="https://girlgenerator.online"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:underline"
  >
    https://girlgenerator.online
  </a>

  <span>Email: </span>

  <a
    href="mailto:support@styleart.ai"
    className="text-blue-400 hover:underline"
  >
    Email: support@styleart.ai
  </a>

  <span>Discord: </span>

  <a
    href="https://discord.gg/hQ9QfMUP5H"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:underline"
  >
https://discord.gg/hQ9QfMUP5H
  </a>
</p>
<p className=" text-md">
By using AI Girl Image Generator, you consent to our privacy policy and agree to its terms. Thank you for trusting us with your privacy!    </p>
<div className="w-full h-px bg-[#9ba2ae] my-6 border border-gray-800"></div>
<p className=" text-md pb-6">
Last Updated: November 10, 2025  </p>


                 </div>
             </div></div>
  )
}

export default page