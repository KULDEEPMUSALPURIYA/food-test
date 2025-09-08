import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/card";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  function getproduct() {
    axios
      .get("https://dummyjson.com/recipes")
      .then((response) => {
        setRecipes(response.data.recipes);
      })
      .catch((error) => {
        setRecipes([]);
      });
  }
  useEffect(() => {
    getproduct();
  }, []);

  return (
    <>
      <div className="bg-[url('/hero-bg.jpg')] bg-cover bg-center h-screen flex items-center">
        <div className="text-white max-w-2xl px-6 md:px-16 space-y-6">
          <h1 className="font-serif text-4xl md:text-6xl italic leading-tight">
            Fast Food Restaurant
          </h1>
          <p className="text-sm md:text-base leading-relaxed">
            Doloremque, itaque aperiam facilis rerum, commodi, temporibus
            sapiente ad mollitia laborum quam quisquam esse error unde. Tempora
            ex doloremque, labore, sunt repellat dolore, iste magni quos nihil
            ducimus libero ipsam.
          </p>
          <button className="bg-amber-400 hover:bg-amber-500 px-8 py-3 text-lg font-semibold rounded-full transition duration-300">
            Order Now
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-10">
        {/* Card 1 */}
        <div className="bg-[#222831] rounded-xl p-8 text-white flex items-center justify-between space-x-6">
          {/* Left Content */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold italic">Tasty Thursdays</h1>
            <h6 className="text-2xl font-semibold">
              20% <span className="text-amber-400">OFF</span>
            </h6>
            <button className="bg-amber-400 hover:bg-amber-500 px-6 py-2 text-lg font-semibold rounded-full transition duration-300">
              Order Now
            </button>
          </div>

          {/* Right Image */}
          <div className="border-2 border-yellow-500 rounded-full p-1">
            <img
              src="/o1.jpg"
              alt="Offer"
              className="rounded-full w-[165px] h-[165px] object-cover transition-transform duration-500 hover:scale-110 hover:rotate-3 "
            />
          </div>
        </div>

        {/* Card 2 (extra example) */}
        <div className="bg-[#222831] rounded-xl p-8 text-white flex items-center justify-between space-x-6">
          {/* Left Content */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold italic">Tasty Thursdays</h1>
            <h6 className="text-2xl font-semibold">
              20% <span className="text-amber-400">OFF</span>
            </h6>
            <button className="bg-amber-400 hover:bg-amber-500 px-6 py-2 text-lg font-semibold rounded-full transition duration-300">
              Order Now
            </button>
          </div>

          {/* Right Image */}
          <div className="border-2 border-yellow-500 rounded-full p-1">
            <img
              src="/o1.jpg"
              alt="Offer"
              className="rounded-full w-[165px] h-[165px] object-cover transition-transform duration-500 hover:scale-110 hover:rotate-3"
            />
          </div>
        </div>
      </div>

      <div className="text-center py-10">
        {/* Heading */}
        <h1 className="italic text-3xl md:text-4xl font-sans font-bold mb-6">
          Our Menu
        </h1>

        {/* Menu Tabs */}
        <div>
          <ul className="flex justify-center gap-6 md:gap-10 text-lg font-medium text-gray-700">
            <li className="cursor-pointer hover:text-amber-500 transition">
              All
            </li>
            <li className="cursor-pointer hover:text-amber-500 transition">
              Burger
            </li>
            <li className="cursor-pointer hover:text-amber-500 transition">
              Pizza
            </li>
            <li className="cursor-pointer hover:text-amber-500 transition">
              Pasta
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((data, index) => (
          <Card
            name={data.name}
            disc={data.ingredients}
            price={data.prepTimeMinutes}
            image={data.image}
            id={data.id}
          />
        ))}
      </div>
    </>
  );
}
