import React from "react";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="mb-8 md:mb-0">
          <h2 className="text-3xl font-serif">QELLI</h2>
        </div>

        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">
            Subscribe to our newsletter
          </h3>
          <div className="flex">
            <input
              type="email"
              placeholder="E-mail adress"
              className="bg-transparent border-b border-white px-2 py-1 mr-2 focus:outline-none"
            />
            <button className="focus:outline-none">
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Accommodation
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Relaxation Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tour packages
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Connect with us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
