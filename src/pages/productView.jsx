import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductView() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  function getproduct() {
    axios
      .get("https://dummyjson.com/recipes/" + id)
      .then((response) => {
        setRecipe(response.data);
        console.log(response.data);
      })
      .catch(() => {
        setRecipe({});
      });
  }

  useEffect(() => {
    getproduct();
  }, []);

  return (
    <div className="min-h-screen  items-center justify-center my-auto p-6">
      <div className="  w-full grid md:grid-cols-2 items-center justify-center z-20 gap-8 my-10 p-8 rounded-2xl">

        <div>
          <img
            src={recipe.image}
            alt={recipe.name}
            className="rounded-2xl w-full h-[380px] object-cover"
          />
        </div>

    
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold">
              {recipe.name}
            </h1>
            <p className="text-black mt-3  text-sm">
              {recipe.instructions}
            </p>

            <div className="flex items-center mt-3 text-sm">
              <span className="ml-2 text-gray-300">
                ({recipe.reviewCount} reviews)
              </span>
            </div>

            <div className="mt-4 text-3xl font-bold text-green-400 ">
              ₹{recipe.caloriesPerServing}
            </div>

            <div className="mt-5 space-y-2 text-sm">
              <p>
                <span className="font-semibold text-white">Ingredients:</span>{" "}
                {
                 recipe.ingredients
                }
              </p>
              <p>
                <span className="font-semibold">Prep Time:</span>{" "}
                {recipe.prepTimeMinutes} min
              </p>
              <p>
              
                <span className="text-amber-400 font-semibold text-xl "> rating: {recipe.rating} </span>
              </p>
              <p className="font-semibold text-lg ">
                
               Servings: {recipe.servings}
              </p>
            </div>
          </div>

          <div className="mt-8 ">
            <button className="bg-amber-700 px-6 py-3 rounded-xl  font-semibold text-white ">
              Add to Cart
            </button>
          
          </div>
        </div>
      </div>
    </div>
  );
}
