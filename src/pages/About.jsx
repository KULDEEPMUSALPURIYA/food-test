import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const slides = [
  {
    id: 1,
    img: "o3.jpg",
    title: "Delicious Meals",
    desc: "We serve fresh, flavorful dishes crafted with love and passion.",
  },
  {
    id: 2,
    img: "o4.jpg",
    title: "Fine Dining",
    desc: "Experience the perfect blend of taste, ambiance, and comfort.",
  },
  {
    id: 3,
    img: "hero-bg.jpg",
    title: "Friendly Atmosphere",
    desc: "Enjoy your meals in a cozy and welcoming environment.",
  },
];

export default function AboutRestaurant() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Header */}
      <header className="p-6 text-center">
        <h1 className="text-4xl mt-2 text-yellow-400 font-extrabold tracking-wide">
          About Our Restaurant
        </h1>
        <p className="mt-2 text-gray-300 max-w-xl mx-auto">
          Serving love on every plate, bringing flavors from around the world to
          your table.
        </p>
      </header>

      {/* Slider Section */}
      <section className="relative my-10 px-6 lg:px-20">
        <div className="relative w-full h-[450px] overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={slides[current].img}
            alt={slides[current].title}
            className="w-full h-full object-cover transition-all duration-700"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
            <h2 className="text-3xl font-bold text-yellow-400">
              {slides[current].title}
            </h2>
            <p className="mt-2 max-w-lg text-white">{slides[current].desc}</p>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-10 transform -translate-y-1/2 bg-yellow-500/70 hover:bg-yellow-500 text-white px-4 py-2 rounded-full"
        >
          <GrFormPrevious size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-yellow-500/70 hover:bg-yellow-500 text-white px-4 py-2 rounded-full"
        >
          <MdNavigateNext size={28} />
        </button>
      </section>


      <section className="px-6 lg:px-40 text-center lg:text-left space-y-10">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-yellow-400">
            Our Story
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Founded with the dream of sharing authentic flavors, our restaurant
            has been serving guests with delicious meals made from the freshest
            ingredients since day one.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4 text-yellow-400">
            Our Mission
          </h2>
          <p className="text-gray-300 leading-relaxed">
            To bring people together over food, creating unforgettable
            experiences through taste, hospitality, and ambiance.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4 text-yellow-400">
            Our Vision
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We envision becoming a place where every guest feels like family and
            every meal becomes a cherished memory.
          </p>
        </div>
      </section>
    </div>
  );
}
