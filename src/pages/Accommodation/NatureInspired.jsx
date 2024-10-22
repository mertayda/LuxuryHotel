import React from "react";
import { ArrowRight, Star } from "lucide-react";
import Oasis5 from "../../assets/FirstPageImages/Oasis5.jpg";
import Oasis6 from "../../assets/FirstPageImages/Oasis6.jpg";
import Oasis3 from "../../assets/FirstPageImages/Oasis3.jpg";

const RoomCard = ({ room }) => {
  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden mb-16 hover:shadow-2xl transition-shadow duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-10 space-y-8">
          <div className="space-y-2">
            <h3 className="text-4xl font-serif text-emerald-950 mb-4 font-light">
              {room.name}
            </h3>
            <div className="h-0.5 w-16 bg-emerald-800 opacity-50"></div>
          </div>

          <p className="text-gray-600 leading-relaxed font-light text-lg">
            {room.description}
          </p>

          <ul className="space-y-4">
            {room.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <Star className="text-emerald-700 mr-3" size={16} />
                <span className="text-gray-700 font-light">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="space-y-6 pt-4">
            <p className="text-2xl font-serif text-emerald-950">
              <span className="font-light">from </span>
              <span className="font-medium">${room.price}</span>
              <span className="text-lg font-light text-gray-600">
                {" "}
                per night
              </span>
            </p>

            <button className="flex items-center bg-emerald-800 text-white rounded-full px-8 py-4 hover:bg-emerald-900 transition-all duration-300 group">
              <span className="font-light text-lg">Reserve Your Stay</span>
              <ArrowRight
                className="ml-3 group-hover:translate-x-1 transition-transform duration-300"
                size={20}
              />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 p-4">
          <div className="col-span-2 transform hover:scale-[1.02] transition-transform duration-300">
            <img
              src={Oasis5}
              alt={`${room.name} - Main view`}
              className="w-full h-72 object-cover rounded-xl"
            />
          </div>
          <div className="transform hover:scale-[1.02] transition-transform duration-300">
            <img
              src={Oasis3}
              alt={`${room.name} - Secondary view`}
              className="w-full h-64 object-cover rounded-xl"
            />
          </div>
          <div className="transform hover:scale-[1.02] transition-transform duration-300">
            <img
              src={Oasis6}
              alt={`${room.name} - Third view`}
              className="w-full h-64 object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const NatureInspired = () => {
  const rooms = [
    {
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
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-emerald-50/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-20 space-y-4">
            <span className="text-sm font-serif text-emerald-800 uppercase tracking-widest">
              Experience Nature's Luxury
            </span>
            <h2 className="text-5xl font-serif text-emerald-950 mt-2 mb-4 font-light">
              Nature-Inspired Sanctuaries
            </h2>
            <div className="flex justify-center">
              <div className="h-0.5 w-24 bg-emerald-800 opacity-50"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
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
