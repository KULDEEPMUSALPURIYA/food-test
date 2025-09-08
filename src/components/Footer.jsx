import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdCall } from "react-icons/md"; 
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className="bg-black text-white px-6 py-10">
      <div className="flex flex-col md:flex-row justify-around items-start md:items-center gap-10">
        
        {/* Contact Us */}
        <div className="space-y-3">
          <h2 className="font-serif text-3xl italic">Contact Us</h2>
          <div className="text-[#dbdbdb] font-medium space-y-1">
            <p> <span><MdCall /></span> +91 9772272826</p>
            <p> <span><MdEmail /></span> musalpuriya123@gmail.com</p>
          </div>
        </div>

        {/* Brand / About */}
        <div className="space-y-3 max-w-sm">
          <h2 className="font-serif text-3xl italic">Feane</h2>
          <p className="text-[#dbdbdb] font-medium">
            Necessary, making this the first true generator on the Internet.
            <br /> It uses a dictionary of over 200 Latin words, combined with.
          </p>
          <div className="flex gap-5 text-2xl">
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
            <FaFacebook className="cursor-pointer hover:text-blue-500" />
            <FaLinkedin className="cursor-pointer hover:text-blue-400" />
            <FaTwitter className="cursor-pointer hover:text-sky-400" />
          </div>
        </div>

        {/* Opening Hours */}
        <div className="space-y-3">
          <h2 className="font-serif text-3xl italic">Opening Hours</h2>
          <div className="text-[#dbdbdb] font-medium space-y-1">
            <p>Every Day</p>
            <p>10.00 AM - 10.00 PM</p>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-sm text-[#aaaaaa] mt-10">
        © 2025 Feane | All Rights Reserved
      </div>
    </div>
  );
}
