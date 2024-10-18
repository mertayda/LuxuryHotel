import React from "react";
import { MoveDown, ArrowRight } from "lucide-react";

import hotel1 from "../../assets/FirstPageImages/hotel1.jpg";
import nature2 from "../../assets/FirstPageImages/nature2.jpg";
import hotel3 from "../../assets/FirstPageImages/hotel3.jpg";
import deluxeroom from "../../assets/Rooms/deluxeRoom.jpg";
import executiveroom from "../../assets/Rooms/executiveroom.jpg";
import LuxurySuite from "../../assets/Rooms/LuxurySuite.jpg";

const accommodations = [
  {
    type: "DELUXE ROOM",
    price: "$350",
    size: "30 m²",
    guests: "up to 2 guests",
    image: deluxeroom,
  },
  {
    type: "LUXURY SUITE",
    price: "$450",
    size: "50 m²",
    guests: "up to 3 guests",
    image: LuxurySuite,
  },
  {
    type: "EXECUTIVE ROOM",
    price: "$380",
    size: "35 m²",
    guests: "up to 2 guests",
    image: executiveroom,
  },
];

const HeroSection = () => (
  <div className="font-helvetica">
    <IntroSection />
    <ImageGallery />
    <QuoteSection />
    <ImmerseSection />
    <AccommodationSection />
  </div>
);

const IntroSection = () => (
  <div className="text-center py-12 px-4">
    <div className="max-w-6xl mx-auto">
      <p className="text-xl md:text-3xl mb-4 font-carmorat animate-fade-in">
        Discover a Serene Escape
      </p>
      <h1 className="text-4xl md:text-6xl font-thin mb-8 leading-tight animate-fade-in-up">
        Where Nature
        <br />
        Embraces Luxury
      </h1>
      <div className="mb-12 animate-fade-in">
        <p className="text-sm mb-2 font-thin">SELECT YOUR STAY</p>
        <button className="w-10 h-10 mx-auto rounded-full border border-black flex items-center justify-center transition-transform hover:scale-110">
          <MoveDown className="animate-bounce" />
        </button>
      </div>
    </div>
  </div>
);

const ImageGallery = () => (
  <div className="flex flex-col md:flex-row gap-4 w-full mx-auto overflow-hidden mb-20">
    <img
      src={hotel1}
      alt="Luxury pool"
      className="w-full md:w-1/4 object-cover h-64 md:h-96 transition-transform hover:scale-105"
    />
    <img
      src={nature2}
      alt="Mountain view"
      className="w-full md:w-2/4 object-cover h-64 md:h-96 transition-transform hover:scale-105"
    />
    <img
      src={hotel3}
      alt="Infinity pool"
      className="w-full md:w-1/4 object-cover h-64 md:h-96 transition-transform hover:scale-105"
    />
  </div>
);

const QuoteSection = () => (
  <div className="text-center max-w-2xl mx-auto p-20">
    <p className="text-lg md:text-3xl font-light leading-relaxed font-carmorat">
      "Queli is a tranquil hotel nestled in a lush, verdant valley, surrounded
      by rolling hills and serene landscapes. The hotel provides a soothing
      oasis for travelers seeking respite from the stresses of the modern world,
      with its elegant accommodations, spa facilities, and gourmet dining
      options."
    </p>
  </div>
);

const ImmerseSection = () => (
  <div className="max-w-6xl w-full mx-auto px-4 py-20 font-carmorat">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-thin mb-12 max-w-3xl font-helvetica leading-tight">
      Immerse Yourself
      <br />
      in the Embrace of Nature
    </h1>

    <div className="flex flex-col lg:flex-row gap-8 mb-12">
      <div className="flex flex-col md:flex-row lg:w-2/3 gap-4">
        <img
          src={hotel1}
          alt="Luxurious infinity pool overlooking nature"
          className="w-full md:w-2/3 h-64 md:h-auto object-cover"
        />
        <img
          src={nature2}
          alt="Indoor pool with a view"
          className="w-full md:w-1/3 h-64 md:h-auto object-cover"
        />
      </div>
      <div className="lg:w-1/3 flex flex-col justify-end">
        <p className="text-base mb-6 font-normal leading-relaxed">
          At Qelli, we believe in the power of simplicity. Our hotel is
          thoughtfully designed to provide you with a peaceful getaway from the
          hustle and bustle of daily life.
        </p>
        <button className="flex items-center text-sm font-semibold hover:opacity-80 transition-opacity">
          ABOUT US
          <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
);

const AccommodationSection = () => (
  <div className="max-w-6xl mx-auto px-4 py-8 ">
    <h2 className="text-4xl lg:text-6xl font-thin mb-4 font-carmorat">
      Comfort and Space Combined
    </h2>
    <div className="flex lg:flex-row flex-col">
      <p className="md:w-2/3 text-lg py-6 text-gray-600 font-carmorat ">
        Relish the charm of our spacious rooms and separate houses, blending
        modern elegance with the tranquility of the surrounding forest park and
        natural oasis.
      </p>
      <div className="flex md:w-1/3 justify-end mb-8 font-carmorat">
        <button className="flex items-center text-black">
          SELECT ACCOMMODATION
          <ArrowRight className="ml-2" size={20} />
        </button>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {accommodations.map((room, index) => (
        <RoomCard key={index} {...room} />
      ))}
    </div>
  </div>
);

const RoomCard = ({ type, price, size, guests, image }) => (
  <div className="flex flex-col">
    <img src={image} alt={type} className="w-full h-full object-cover" />

    <div className="flex flex-wrap justify-between p-4">
      <h3 className="text-xl font-semibold font-carmorat">{type}</h3>
      <p className="text-gray-600 mb-2 font-helvetica">{price} / night</p>

      <p className="text-sm text-gray-500 font-helvetica">
        {size}, {guests}
      </p>
    </div>
  </div>
);

export default HeroSection;
