'use client'
import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";
import { LuSparkles, LuBox, LuLanguages } from "react-icons/lu";
import { SiDiscord } from "react-icons/si";
import { FiMoon } from "react-icons/fi";
import { HiOutlineBars3, HiXMark } from "react-icons/hi2";
import { WiDaySunny } from "react-icons/wi";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  const languages = ["English", "Deutsch", "Francais", "Espanol", "Chinees", "Arabic"];

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    if (!isLightMode) {
      document.body.classList.add("bg-white");
      document.body.classList.remove("bg-[#11192c]");
    } else {
      document.body.classList.add("bg-[#11192c]");
      document.body.classList.remove("bg-white");
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-25 py-6 
      ${isLightMode ? "bg-white/90 text-black" : "bg-[#0f162a]/90"} text-[#EBEBEB] text-sm font-monoNoto`}>

      {/* Left side: Logo + App name + nav */}
      <div className="flex items-center gap-4">
        <img src="/img/logo.png" alt="Logo" 
        className="h-10 w-10" />
        <h1 className="font-semibold text-[30px] whitespace-nowrap">AI Girls Images Generator</h1>
        <div className="hidden md:flex items-center gap-6 text-[20px] ml-8">
         <h2
  className="flex items-center gap-2 px-4 py-2 rounded hover:bg-[#1e293b] cursor-pointer"
  onClick={() => {
    const element = document.getElementById("why-choose");
    element?.scrollIntoView({ behavior: "smooth" });
  }}
>
  <LuSparkles /> Highlights
</h2>

          <h2 className="flex items-center gap-2 px-4 py-2 rounded hover:bg-[#1e293b] cursor-pointer"
          onClick={() => {
    const element = document.getElementById("Explore-creative");
    element?.scrollIntoView({ behavior: "smooth" });
  }}>
            
            <LuBox />
           Showcases</h2>
        </div>
      </div>

      {/* Right side: Icons + User Info */}
      <div className="flex items-center gap-4">
        {/* Icons */}
        <SiDiscord onClick={()=>router.push('login')}
        className="hidden md:flex text-[#9ca3af] hover:text-white cursor-pointer text-[18px]" />
        <div onClick={toggleTheme} className="hidden md:flex cursor-pointer text-[25px]">
          {isLightMode ? <WiDaySunny /> : <FiMoon />}
        </div>

        <div className="relative hidden md:flex">
          <div
            className="rounded-full hover:bg-[#1e293b] cursor-pointer p-2"
            onClick={() => setLangOpen(!langOpen)}
          >
            <LuLanguages className="text-[#ebebeb] text-[20px]" />
          </div>
          {langOpen && (
            <ul className="absolute right-0 mt-2 w-48 bg-[#1b2437] border border-[#374151] rounded-md shadow-lg z-50">
              {languages.map((lang) => (
                <li
                  key={lang}
                  onClick={() => setLangOpen(false)}
                  className="px-4 py-2 hover:bg-[#374151] cursor-pointer flex items-center gap-2"
                >
                  {lang}
                </li>
              ))}
            </ul>
          )}
          {langOpen && <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)}></div>}
        </div>

        {/* User Info */}
        {session?.user && (
          <div className="flex items-center gap-3 ml-4">
            <span>{session.user.name}</span>
            <span className="text-gray-400">{session.user.email}</span>
            <span className="text-gray-400 text-sm">ID: {session.user.id}</span>
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="bg-[#5865f2] py-1 px-3 rounded hover:bg-[#4752c4]"
            >
              Logout
            </button>
          </div>
              )}

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          {menuOpen ? (
            <HiXMark className="text-2xl cursor-pointer" onClick={() => setMenuOpen(false)} />
          ) : (
            <HiOutlineBars3 className="text-2xl cursor-pointer" onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full right-0 w-full h-[1200px]  bg-[#151732]/85 text-[#EBEBEB] p-4 flex flex-col gap-3 rounded-b-lg shadow-lg md:hidden">
          <h2
  className="flex items-center gap-2 px-4 py-2 text-[20px] rounded hover:bg-[#1e293b] cursor-pointer"
  onClick={() => {
    const element = document.getElementById("why-choose");
    element?.scrollIntoView({ behavior: "smooth" });
  }}
>
   Highlights
</h2>
         <h2 className="flex items-center gap-2 px-4 py-2 text-[20px] rounded hover:bg-[#1e293b] cursor-pointer"
          onClick={() => {
    const element = document.getElementById("Explore-creative");
    element?.scrollIntoView({ behavior: "smooth" });
  }}>
            
          
           Showcases</h2>
          
            <div className="flex items-center gap-4 h-[100px] border pl-6">
        {/* Icons */}
        <SiDiscord onClick={()=>router.push('login')}
        className=" md:flex text-[#9ca3af] hover:text-white cursor-pointer text-[28px] " />
        <div onClick={toggleTheme} className=" md:flex cursor-pointer text-[28px]">
          {isLightMode ? <WiDaySunny /> : <FiMoon />}
        </div>

        <div className="relative md:flex">
          <div
            className="rounded-full hover:bg-[#1e293b] cursor-pointer p-2"
            onClick={() => setLangOpen(!langOpen)}
          >
            <LuLanguages className="text-[#ebebeb] text-[28px]" />
          </div>
          {langOpen && (
            <ul className="absolute left-1 right-0 mt-2 text-[20px] w-40 bg-[#1b2437] border border-[#374151] rounded-lg shadow-lg z-50">
              {languages.map((lang) => (
                <li
                  key={lang}
                  onClick={() => setLangOpen(false)}
                  className="px-4 py-2 hover:bg-[#374151] cursor-pointer flex items-center gap-2 "
                >
                  {lang}
                </li>
              ))}
            </ul>
          )}
         
        </div>

        {/* User Info */}
        {session?.user && (
          <div className="flex items-center gap-3 ml-4">
            <span>{session.user.name}</span>
            <span className="text-gray-400">{session.user.email}</span>
            <span className="text-gray-400 text-sm">ID: {session.user.id}</span>
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="bg-[#5865f2] py-1 px-3 rounded hover:bg-[#4752c4]"
            >
              Logout
            </button>
          </div>
              )}

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          {menuOpen ? (
            <HiXMark className="text-2xl cursor-pointer" onClick={() => setMenuOpen(false)} />
          ) : (
            <HiOutlineBars3 className="text-2xl cursor-pointer" onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>
          {session?.user && (
            <div className="flex flex-col gap-2 px-4 py-2">
              <span>{session.user.name}</span>
              <span className="text-gray-400">{session.user.email}</span>
              <span className="text-gray-400 text-sm">ID: {session.user.id}</span>
              <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="bg-[#5865f2] py-1 px-3 rounded hover:bg-[#4752c4] w-full"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
