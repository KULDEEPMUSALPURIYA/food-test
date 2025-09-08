import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { data, Link } from "react-router-dom";
import { context } from "../store";

export default function Card({name, price, disc, image, id}) {
  const {addToCart} = useContext(context)
  return (
  
    <div className="w-80 bg-white mx-auto mb-10 rounded-xl shadow-lg overflow-hidden">
  <Link to={`/product-view/${id}`} className="flex justify-center items-center bg-gray-100 p-6">
        <img
          src={image}
          alt="Delicious Pizza"
          className="w-40 h-40 object-contain drop-shadow-md rounded-full transition-transform duration-500 hover:scale-110 hover:rotate-3 "
        />
      </Link>
      <div className="bg-[#1E232B] h-full text-white p-6 relative">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-sm text-gray-300 mb-4">
          {disc}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">${price}</span>
          <button onClick={()=>addToCart(id)} className="bg-amber-400 hover:bg-amber-500 cursor-pointer text-white p-3 rounded-full transition">
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
}
