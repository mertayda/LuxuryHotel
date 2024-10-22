import React, { useEffect } from "react";
import { ArrowRight, Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Oasis5 from "../../assets/FirstPageImages/Oasis5.jpg";
import Oasis6 from "../../assets/FirstPageImages/Oasis6.jpg";
import Oasis3 from "../../assets/FirstPageImages/Oasis3.jpg";
import Oasis1 from "../../assets/FirstPageImages/Oasis1.jpg";
import Serenity2 from "../../assets/FirstPageImages/serenity2.jpg";
import Zen1 from "../../assets/Zen/zen1.jpg";
import Zen4 from "../../assets/Zen/zen4.jpg";
import Zen5 from "../../assets/Zen/zen5.jpg";
import Tropical4 from "../../assets/FirstPageImages/Tropical4.jpg";
import Tropical3 from "../../assets/FirstPageImages/Tropical3.jpg";
import Tropical5 from "../../assets/FirstPageImages/Tropical5.jpg";
import Nature3 from "../../assets/FirstPageImages/Nature3.jpg";

const RoomCard = ({ room }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      className="bg-white/90 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl overflow-hidden mb-24 hover:shadow-[0_8px_40px_rgb(0,0,0,0.16)] transition-all duration-500"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-12 space-y-8">
          <div className="space-y-4">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex items-center gap-2"
            >
              <span className="text-sm font-serif text-emerald-800 uppercase tracking-[0.2em]">
                {room.category}
              </span>
            </div>

            <h3
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-4xl font-serif text-emerald-950 font-light leading-tight"
            >
              {room.name}
            </h3>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="h-0.5 w-16 bg-emerald-800 opacity-50"
            />
          </div>

          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-gray-600 leading-relaxed font-light text-lg"
          >
            {room.description}
          </p>

          <ul className="space-y-4">
            {room.features.map((feature, index) => (
              <li
                key={index}
                data-aos="fade-right"
                data-aos-delay={500 + index * 100}
                className="flex items-center"
              >
                <Star className="text-emerald-700 mr-3" size={16} />
                <span className="text-gray-700 font-light">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="space-y-6 pt-4">
            <div
              data-aos="fade-up"
              data-aos-delay="800"
              className="flex flex-col gap-1"
            >
              <p className="text-2xl font-serif text-emerald-950">
                <span className="font-light">from </span>
                <span className="font-medium">${room.price}</span>
                <span className="text-lg font-light text-gray-600">
                  {" "}
                  per night
                </span>
              </p>
              <p className="text-sm text-gray-500 italic">
                {room.availability}
              </p>
            </div>

            <button
              data-aos="fade-up"
              data-aos-delay="900"
              className="flex items-center bg-emerald-800 text-white rounded-full px-8 py-4 hover:bg-emerald-900 transition-all duration-300 hover:scale-105 active:scale-95 group"
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
          <div data-aos="zoom-in" data-aos-delay="200" className="col-span-2">
            <img
              src={room.Images[0]}
              alt={`${room.name} - Main view`}
              className="w-full h-80 object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.03]"
            />
          </div>

          {[1, 2].map((index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={400 + index * 200}
            >
              <img
                src={room.Images[index]}
                alt={`${room.name} - View ${index + 1}`}
                className="w-full h-64 object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const NatureInspired = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  const rooms = [
    {
      category: "Premium Suite",
      name: "Mountain Vista Suite",
      description:
        "Experience elevated living in our premium suite offering breathtaking mountain views. This sophisticated space combines contemporary design with panoramic natural beauty.",
      features: [
        "Generous 40 m² layout",
        "California king bed with organic linens",
        "Wraparound viewing terrace",
        "Luxury soaking tub with mountain views",
        "Personal mountain guide service",
      ],
      price: 450,
      availability: "Limited availability for summer season",
      Images: [Oasis1, Serenity2, Oasis5],
    },
    {
      category: "Signature Collection",
      name: "Zen Garden Suite",
      description:
        "Find perfect harmony in our Japanese-inspired suite, where minimalist design meets natural elements. A private zen garden and traditional features create an atmosphere of complete tranquility.",
      features: [
        "35 m² of mindful space",
        "Traditional tatami room option",
        "Private zen garden with meditation area",
        "Japanese soaking tub (Ofuro)",
        "Daily traditional tea ceremony",
      ],
      price: 520,
      availability: "Book 30 days in advance recommended",
      Images: [Tropical4, Zen4, Zen5],
    },
    {
      category: "Luxury Collection",
      name: "Tropical Canopy Villa",
      description:
        "Elevate your stay in our treetop-inspired villa, where luxury meets natural wonder. Suspended in serenity, this unique space offers an immersive forest experience with all modern comforts.",
      features: [
        "55 m² elevated sanctuary",
        "Premium king bed with canopy",
        "Floor-to-ceiling forest views",
        "Private outdoor rainfall shower",
        "Exclusive canopy walk access",
      ],
      price: 680,
      availability: "Limited to 3 villas - Reserve early",
      Images: [Tropical5, Nature3, Tropical3],
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-emerald-50/50 to-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <section className="max-w-7xl mx-auto px-4 py-20">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-center mb-24 space-y-6"
          >
            <span
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-sm font-serif text-emerald-800 uppercase tracking-[0.2em]"
            >
              Experience Nature's Luxury
            </span>

            <h2
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-5xl font-serif text-emerald-950 font-light leading-tight"
            >
              Nature-Inspired Sanctuaries
            </h2>

            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="flex justify-center"
            >
              <div className="h-0.5 w-24 bg-emerald-800 opacity-50"></div>
            </div>

            <p
              data-aos="fade-up"
              data-aos-delay="800"
              className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Where refined elegance meets the raw beauty of nature, creating an
              unforgettable retreat for the discerning traveler.
            </p>
          </div>

          {rooms.map((room, index) => (
            <RoomCard key={index} room={room} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default NatureInspired;
