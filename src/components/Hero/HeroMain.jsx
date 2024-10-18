import React from "react";
import { ArrowRight } from "lucide-react";
import zen1 from "../../assets/Zen/zen1.jpg";
import zen2 from "../../assets/Zen/zen2.jpg";
import zen3 from "../../assets/Zen/zen3.jpg";

const HeroMain = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-48  text-gray-800 font-helvetica">
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-thin mb-12 leading-tight font-carmorat">
        Relaxation and
        <br />
        <span className="text-gold">Adventure Await</span>
      </h2>

      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3 space-y-8">
          <p className="text-gray-600 text-lg leading-relaxed font-helvetica font-light">
            Indulge in rejuvenating spa treatments, stay active in our
            state-of-the-art fitness center with stunning forest views, or take
            a refreshing dip in the infinity pool overlooking the picturesque
            landscape.
          </p>
          <button className="group flex items-center text-gold hover:text-gold-dark transition-colors">
            <span className="mr-2 text-sm uppercase tracking-widest font-light">
              Explore Services
            </span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="lg:w-2/3 grid grid-cols-2 gap-6">
          <div className="col-span-2 relative overflow-hidden group">
            <img
              src={zen2}
              alt="Yoga pose"
              className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-700 group-hover:bg-opacity-40" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="font-light text-2xl mb-2 tracking-wide">
                Forest Zen Fitness
              </h3>
              <p className="text-sm leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                State-of-the-art center offering invigorating workouts and
                peaceful yoga sessions.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img
              src={zen3}
              alt="Essential oils"
              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-700 group-hover:bg-opacity-40" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="font-light text-xl mb-1 tracking-wide">
                Mountain Bliss
              </h3>
              <p className="text-xs leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                Harmonizing massage with mountain-inspired essential oils.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img
              src={zen1}
              alt="Forest view"
              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-700 group-hover:bg-opacity-40" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="font-light text-xl mb-1 tracking-wide">
                Forest Aromatherapy
              </h3>
              <p className="text-xs leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                Revitalizing journey with natural essential oils.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
