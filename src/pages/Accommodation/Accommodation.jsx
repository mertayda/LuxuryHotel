import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { ArrowDown, ArrowRight, Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import tropical from "../../assets/FirstPageImages/tropical.jpg";
import deluxeRoom from "../../assets/Rooms/deluxeRoom.jpg";
import deluxeRoom1 from "../../assets/Rooms/deluxeRoom1.jpg";
import deluxeRoom2 from "../../assets/Rooms/deluxeRoom2.jpg";
import LuxurySuite from "../../assets/Rooms/LuxurySuite.jpg";
import LuxurySuite2 from "../../assets/Rooms/LuxurySuite2.jpg";
import LuxurySuite3 from "../../assets/Rooms/LuxurySuite3.jpg";
import NatureInspired from "./NatureInspired";
import Footer from "../../components/Footer/Footer";

const RoomCard = ({ room, index }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-offset="200"
      className="bg-white/90 backdrop-blur-sm shadow-lg rounded-2xl overflow-hidden mb-24 font-carmorat hover:shadow-xl transition-shadow duration-300"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-12 space-y-8">
          <div className="space-y-4">
            <div data-aos="fade-right" data-aos-delay="100">
              <h3 className="text-5xl font-serif mb-6 text-gold leading-tight">
                {room.name}
              </h3>
              <div className="h-0.5 w-16 bg-gold/50"></div>
            </div>
          </div>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-600 leading-relaxed text-lg font-light"
          >
            {room.description}
          </p>

          <ul className="space-y-4">
            {room.features.map((feature, idx) => (
              <li
                key={idx}
                data-aos="fade-right"
                data-aos-delay={150 + idx * 50}
                className="flex items-center"
              >
                <Star className="text-gold mr-3" size={16} />
                <span className="text-gray-700 font-light">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="space-y-6 pt-4">
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-3xl font-serif text-gold"
            >
              <span className="font-light">from </span>
              <span className="font-medium">${room.price}</span>
              <span className="text-xl font-light text-gray-600">
                {" "}
                per night
              </span>
            </div>

            <button
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex items-center bg-gold text-white rounded-full px-8 py-4 transition-all duration-300 hover:bg-[#8B7355] hover:scale-105 active:scale-95 group"
            >
              <span className="font-light text-lg">Reserve Your Stay</span>
              <ArrowRight
                className="ml-3 group-hover:translate-x-1 transition-transform duration-300"
                size={20}
              />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 p-6">
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="col-span-2 overflow-hidden rounded-xl"
          >
            <img
              src={room.images[0]}
              alt={`${room.name} - Main View`}
              className="w-full h-80 object-cover rounded-xl transition-transform duration-300 hover:scale-105"
            />
          </div>

          {[1, 2].map((imgIndex) => (
            <div
              key={imgIndex}
              data-aos="zoom-in"
              data-aos-delay={300 + imgIndex * 100}
              className="overflow-hidden rounded-xl"
            >
              <img
                src={room.images[imgIndex]}
                alt={`${room.name} - View ${imgIndex + 1}`}
                className="w-full h-64 object-cover rounded-xl transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Accommodation = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

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
      images: [deluxeRoom2, deluxeRoom1, deluxeRoom],
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
      images: [LuxurySuite3, LuxurySuite2, LuxurySuite],
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      <main className="w-full">
        <div className="relative h-screen overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={tropical}
              alt="Luxurious tropical accommodation"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]">
            <div className="h-full flex flex-col justify-center items-center text-white ">
              <div className=" text-center mx-auto space-y-8">
                <h1
                  data-aos="fade-down"
                  className="text-7xl font-serif mb-6 text-center"
                >
                  Luxury Accommodations
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="text-xl mb-8 text-center max-w-2xl font-light leading-relaxed mx-auto"
                >
                  Experience unparalleled comfort and elegance in our
                  thoughtfully designed sanctuaries.
                </p>
                <button
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className="border-2 border-white rounded-full p-4 hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <ArrowDown size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-4 py-24">
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-center mb-24 space-y-6"
          >
            <span className="text-sm font-serif text-gold uppercase tracking-[0.2em]">
              Discover
            </span>
            <h2 className="text-5xl font-serif text-gray-800 mt-2 mb-4 font-light">
              Elegant Suites & Rooms
            </h2>
            <div className="flex justify-center">
              <div className="h-0.5 w-24 bg-gold/50"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Step into a world of understated elegance and find yourself
              surrounded by serenity. Our meticulously crafted accommodations
              offer a perfect blend of comfort and sophistication.
            </p>
          </div>

          {rooms.map((room, index) => (
            <RoomCard key={index} room={room} index={index} />
          ))}
        </section>
        <NatureInspired />
      </main>
      <Footer />
    </div>
  );
};

export default Accommodation;
