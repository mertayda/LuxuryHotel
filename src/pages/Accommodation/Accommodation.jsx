import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import {
  ArrowDown,
  ArrowRight,
  Star,
  Coffee,
  Wifi,
  Utensils,
} from "lucide-react";
import { motion } from "framer-motion";
import tropical from "../../assets/FirstPageImages/tropical.jpg";
import deluxeRoom from "../../assets/Rooms/deluxeRoom.jpg";
import deluxeRoom1 from "../../assets/Rooms/deluxeRoom1.jpg";
import deluxeRoom2 from "../../assets/Rooms/deluxeRoom2.jpg";
import NatureInspired from "./NatureInspired";


const RoomCard = ({ room }) => {
  return (
    <div className="bg-white shadow-2xl rounded-lg overflow-hidden mb-16 font-carmorat ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 space-y-6">
          <h3 className="text-4xl fmb-4 text-gold">{room.name}</h3>
          <p className="text-gray-600 leading-relaxed">{room.description}</p>
          <ul className="space-y-3">
            {room.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <Star className="text-gold mr-2" size={16} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <p className="text-2xl font-semibold text-gold">
            ${room.price} / night
          </p>
          <motion.button
            className="flex items-center bg-gold text-white rounded-full px-6 py-3 hover:bg-opacity-90 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reserve Now
            <ArrowRight className="ml-2" size={18} />
          </motion.button>
        </div>
        <div className="grid grid-cols-2 gap-2 p-2">
          <motion.img
            src={room.images[0]}
            alt={`${room.name} - Main View`}
            className="w-full h-64 object-cover rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <motion.img
            src={room.images[1]}
            alt={`${room.name} - Secondary View`}
            className="w-full h-64 object-cover rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <motion.img
            src={room.images[2]}
            alt={`${room.name} - Bathroom View`}
            className="w-full h-64 object-cover rounded-lg col-span-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </div>
      </div>
    </div>
  );
};

const Accommodation = () => {
  const rooms = [
    {
      name: "Deluxe Suite",
      description:
        "The cozy retreat is equipped with either a king-size or queen-size bed to ensure maximum comfort for our guests..",
      features: [
        "30 m²",
        "King-size bed",
        "Private balcony",
        "Marble en-suite bathroom",
        "24/7 concierge service",
      ],
      price: 350,
      images: [deluxeRoom, deluxeRoom1, deluxeRoom2],
    },
    {
      name: "Luxury Suite",
      description:
        "Indulge in the epitome of luxury with our Luxury Suite. This spacious retreat offers breathtaking views of the lush forest park, creating an ambiance of serenity and sophistication.",
      features: [
        "50 m²",
        "King-size bed",
        "Private balcony",
        "Marble en-suite bathroom",
        "24/7 concierge service",
      ],
      price: 450,
      images: [deluxeRoom, deluxeRoom1, deluxeRoom2],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="w-full">
        <div className="relative h-screen">
          <img
            src={tropical}
            alt="Luxurious tropical accommodation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
            <motion.h1
              className="text-7xl font-serif mb-6 text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Luxury Accommodations
            </motion.h1>
            <motion.p
              className="text-xl mb-8 text-center max-w-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Experience unparalleled comfort and elegance in our thoughtfully
              designed sanctuaries.
            </motion.p>
            <motion.button
              className="border-2 border-white rounded-full p-3 hover:bg-white hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowDown size={24} />
            </motion.button>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <span className="text-sm font-sans text-gold uppercase tracking-wider">
              Discover
            </span>
            <h2 className="text-5xl font-serif text-gray-800 mt-2 mb-4">
              Elegant Suites & Rooms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Step into a world of understated elegance and find yourself
              surrounded by serenity. Our meticulously crafted accommodations
              offer a perfect blend of comfort and sophistication.
            </p>
          </div>

          {rooms.map((room, index) => (
            <RoomCard key={index} room={room} />
          ))}
        </section>
        <NatureInspired></NatureInspired>
      </main>
    </div>
  );
};

export default Accommodation;
