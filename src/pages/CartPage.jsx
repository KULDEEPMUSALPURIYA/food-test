import React, { useContext, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { context } from "../store";

export default function CartPage() {
  const { cart, qtyHendler, removeFromCart } = useContext(context);

  return (  
    <div className="min-h-screen bg-gray-100 flex  items-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6">
     
        <h2 className="text-2xl font-bold mb-6">Your Basket</h2>

        {cart.map((item, index) => {
          return (
            <div key={index} className="flex items-center border rounded-lg p-4 shadow-sm mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 object-contain rounded-md"
              />

              <div className="flex-1 ml-4">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-500">Ref: {item.id}</p>

                <div className="flex gap-4 mt-2 text-sm">
                  <span className="text-green-600 font-medium"> Click & Collect</span>
                  <span className="text-green-600 font-medium"> Home Delivery</span>
                </div>

                <div className="flex items-center justify-between mt-4">
                  {/* Quantity */}
                  <div className="flex items-center border rounded-lg">
                    <button
                     onClick={() => qtyHendler(item.id, 0)}  
                      className="px-3 py-2 text-gray-600 hover:text-black"
                    >
                      <FaMinus size={14} />
                    </button>
                    <span className="px-4">{item.qty}</span>
                    <button
                       onClick={() => qtyHendler(item.id, 1)} 
                      className="px-3 py-2 text-gray-600 hover:text-black"
                    >
                      <FaPlus size={14} />
                    </button>
                  </div>
                  <button onClick={()=>{removeFromCart(item.id)}} className="text-red-600">Remove</button>
                </div>

             
                 
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
