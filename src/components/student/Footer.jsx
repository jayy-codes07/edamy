import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-200 w-full md:px-36 text-left mt-10">
      <div className="flex flex-col md:flex-row items-start justify-center gap-10   md:gap-32 py-10 border-b border-white/30 px-8 md:px-0">
        <div className="flex flex-col md:items-start items-center w-full gap-4">
          <img src={assets.logo_dark} alt="" />
          <p className="mt-6 text-center md:text-left text-sm text-white/80 ">
            Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text.
          </p>
        </div>
        <div className="flex flex-col md:items-start items-center w-full">
          <div className="font-semibold text-white mb-5">Company</div>
          <div className="mt-6 text-center md:text-left text-sm text-white/80 ">
            <a href="#">Home</a><br />
            <a href="#">About Us</a><br />
            <a href="#">Contect us</a><br />
            <a href="#">Privacy policy</a><br />
          </div>
        </div>
        <div className=" hidden md:flex flex-col md:items-start items-center w-full">
          <div  className="font-semibold text-white mb-5">Subscribe to our newsletter</div>
          <p className="mt-6 text-center md:text-left text-sm text-white/80 ">
            The latest news, articles, and resources, sent to your inbox
            weekly.
          </p>
          <div className="flex items-center gap-2 pt-4">
           <input type="email" className="border  outline-none w-64 h-9 px-2 border-gray-700/80 bg-gray-500/5 rounded text-xs" placeholder="Enter your email" />
            
            <button className="bg-blue-500 p-1.5 rounded text-sm text-white/80">Subscribe</button>
          </div>
        </div>
      </div>
      <div className=" flex items-center mb-5 text-xs justify-center">
        <p className="py-4  text-center text-xs md:text-sm text-white/60 ">
          Copyright 2025 © Jay Hadiya. All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
