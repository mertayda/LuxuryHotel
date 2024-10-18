import React from "react";
import nature2 from "../../assets/FirstPageImages/nature2.jpg";
import serenity from "../../assets/FirstPageImages/serenity.jpg";
import serenity2 from "../../assets/FirstPageImages/serenity2.jpg";

const HeroSection2 = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-serif mb-4">
        Island Tours and Surfing Lessons
      </h1>
      <p className="mb-6 text-gray-600">
        Beyond relaxation, we offer guided tours to explore the hidden gems of
        the island. For the adventurous souls, we have surfing lessons suitable
        for all levels.
      </p>
      <div className="flex items-center mb-8">
        <h2 className="text-xl font-semibold mr-2">TOUR PACKAGES</h2>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full ">
        <div className="col-span-2 relative overflow-hidden group">
          <img
            src={serenity}
            alt="Yoga pose"
            className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-700 group-hover:bg-opacity-40" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h3 className="font-light text-2xl mb-2 tracking-wide">
              NATURE'S SERENITY TREK
            </h3>
            <p className="text-sm leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              A guided journey through lush traits and hiddens gems
            </p>
          </div>
        </div>
        <div className="col-span-1 relative overflow-hidden group">
          <img
            className="w-hull h-96 object-cover transition-transform duration-700 group-hover:scale-10"
            src={serenity2}
            alt="Yoga pose"
          ></img>
          <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-700 group-hover:bg-opacity-40" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h3 className="font-light text-2xl mb-2">
              EXPEDITION OF CULTURAL DISCOVERIES
            </h3>
            <p className="text-sm leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              The rich heritage of local communities and living traditions that
              adorn tapestry of the island{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
