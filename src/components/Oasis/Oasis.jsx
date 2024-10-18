import React, { useState } from "react";
import { ArrowRight, X } from "lucide-react";

import oasis1 from "../../assets/FirstPageImages/Oasis1.jpg";
import oasis2 from "../../assets/FirstPageImages/Oasis2.jpg";
import oasis3 from "../../assets/FirstPageImages/Oasis3.jpg";
import oasis4 from "../../assets/FirstPageImages/Oasis4.jpg";
import oasis5 from "../../assets/FirstPageImages/Oasis5.jpg";
import oasis6 from "../../assets/FirstPageImages/Oasis6.jpg";

const Oasis = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: oasis1, alt: " Mountain cliff view" },
    { src: oasis2, alt: "Pool with mountain view" },
    { src: oasis3, alt: "Relaxing indoors" },
    { src: oasis4, alt: "Be one with Nature" },
    { src: oasis5, alt: "Outdoor seating area " },
    { src: oasis6, alt: "Luxurious bathroom" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 font-carmorat">
      <h1 className="text-4xl font-serif mb-4 text-center">
        Your Mountain Oasis Awaits
      </h1>
      <p className="text-center text-lg mb-6 max-w-2xl mx-auto">
        At Qelli, we invite you to experience the harmonious blend of luxury and
        nature. Book your escape today and embark on a journey to rejuvenate
        your senses amidst Indonesia's picturesque mountains.
      </p>
      <div className="flex justify-center mb-12">
        <a
          href="#"
          className="inline-flex items-center text-black hover:underline"
        >
          SEE MORE ON INSTAGRAM
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="aspect-square relative group cursor-pointer "
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Oasis;
