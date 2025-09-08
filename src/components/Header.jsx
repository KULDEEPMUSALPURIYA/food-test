import React, { useContext, useState } from "react";
import { FaUser,  FaSearch } from "react-icons/fa";
import { IoMdMenu, IoMdClose } from "react-icons/io"; 
import { Link } from "react-router-dom";
import { context } from "../store";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const {cart} = useContext(context)

  return (
    <header className="w-full bg-gradient-to-r fixed z-10 from-black to-gray-900 text-white shadow-md  ">
      <div className="flex justify-between items-center py-4 px-6 md:px-20">
        
        {/* Logo */}
        <a href="/" className="font-serif text-3xl font-bold italic">
          Food & Test
        </a>

        {/* Nav Links (Desktop) */}
        <nav className="hidden lg:flex gap-10 font-semibold text-base">
          <Link to="/" className="text-yellow-500">HOME</Link>
          <Link to="#" className="hover:text-yellow-500">MENU</Link>
          <Link to="#" className="hover:text-yellow-500">ABOUT</Link>
           <Link to="/cart-page" className="hover:text-yellow-500">  CART ({cart.length})</Link>
        </nav>

        {/* Icons + Button (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          <FaUser className="cursor-pointer hover:text-yellow-500" />
         
          <FaSearch className="cursor-pointer hover:text-yellow-500" />
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-5 py-2 rounded-full">
            Order Online
          </button>
        </div>


        <i
          className="lg:hidden text-3xl cursor-pointer"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <IoMdClose /> : <IoMdMenu />}
        </i>
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-black flex flex-col items-center gap-6 py-6 font-semibold text-lg z-50">
          <a href="#" className="text-yellow-500">HOME</a>
          <a href="#" className="hover:text-yellow-500">MENU</a>
          <a href="#" className="hover:text-yellow-500">ABOUT</a>
          <Link to="/cart-page" className="hover:text-yellow-500"> Cart</Link>

          {/* Icons + Button (Mobile) */}
          <div className="flex items-center gap-6 mt-4">
            <FaUser className="cursor-pointer hover:text-yellow-500" />
            
            <FaSearch className="cursor-pointer hover:text-yellow-500" />
          </div>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-full">
            Order Online
          </button>
        </div>
      )}
    </header>
  );
}
