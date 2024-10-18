import React, { useState } from "react";
import hotel1 from "../../assets/FirstPageImages/hotel1.jpg";
import hotel2 from "../../assets/FirstPageImages/hotel2.jpg";
import hotel3 from "../../assets/FirstPageImages/hotel3.jpg";
import nature1 from "../../assets/FirstPageImages/nature1.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="text-black font-helvetica">
      <div className="flex justify-between items-center py-4 md:py-6 px-4 md:px-8">
        <button
          onClick={toggleMenu}
          className="text-base md:text-lg flex flex-row space-x-2 items-center"
        >
          {isMenuOpen ? (
            <span className="text-2xl md:text-3xl">×</span>
          ) : (
            <div className="flex flex-col space-y-1 mb-1 mx-2 md:mx-3">
              <div className="w-5 md:w-6 h-0.5 bg-black"></div>
              <div className="w-5 md:w-6 h-0.5 bg-black"></div>
              <div className="w-5 md:w-6 h-0.5 bg-black"></div>
            </div>
          )}
          {!isMenuOpen && "MENU"}
        </button>
        <h1 className="text-lg md:text-xl italic">QELLI</h1>
        {!isMenuOpen && <button className="text-xs md:text-sm">BOOK NOW</button>}
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#292929] text-white text-center z-50">
          <div className="flex justify-between items-center py-4 md:py-6 px-4 md:px-8">
            <button onClick={toggleMenu} className="text-2xl md:text-3xl">
              ×
            </button>
            <h1 className="text-lg md:text-xl text-center mx-auto font-thin">QELLI</h1>
          </div>
          <div className="relative h-[calc(100vh-64px)] md:h-[calc(100vh-80px)]">
            <ul className="absolute inset-0 flex flex-col justify-center items-center space-y-3 md:space-y-4 text-xl md:text-3xl font-thin">
              <li><a href="#" className="hover:underline">Accommodation</a></li>
              <li><a href="#" className="hover:underline">Relaxation Services</a></li>
              <li><a href="#" className="hover:underline">Tour packages</a></li>
              <li><a href="#" className="hover:underline">Discover Qelli</a></li>
              <li><a href="#" className="hover:underline">Online check-in</a></li>
              <li><a href="#" className="hover:underline">Book now</a></li>
              <li><a href="#" className="hover:underline">Connect with us</a></li>
            </ul>
            <img src={hotel1} alt="Hotel 1" className="absolute top-4 left-4 md:top-10 md:left-10 w-24 h-24 md:w-48 md:h-48 object-contain" />
            <img src={hotel2} alt="Hotel 2" className="absolute top-4 right-4 md:top-10 md:right-10 w-24 h-24 md:w-48 md:h-48 object-contain" />
            <img src={hotel3} alt="Hotel 3" className="absolute bottom-4 left-4 md:bottom-10 md:left-20 w-24 h-24 md:w-48 md:h-48 object-contain" />
            <img src={nature1} alt="Nature 1" className="absolute bottom-4 right-4 md:bottom-10 md:right-20 w-24 h-24 md:w-48 md:h-48 object-contain" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;