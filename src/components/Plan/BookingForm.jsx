import React from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

const SelectField = ({ label, value, onChange }) => (
  <div className="relative">
    <label className="text-gray-400 text-sm">{label}</label>
    <div className="mt-1 relative">
      <select
        value={value}
        onChange={onChange}
        className="block w-full bg-transparent border-b border-gray-600 text-white py-2 pr-8 appearance-none focus:outline-none focus:border-white"
      >
        <option>{value}</option>
        {/* Add more options as needed */}
      </select>
      <ChevronDown
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400"
        size={20}
      />
    </div>
  </div>
);

const BookingForm = () => {
  return (
    <div className="bg-[#292929] text-white py-20 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-serif text-center mb-12">
          Plan Your Getaway Today
        </h2>
        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SelectField
              label="Check-in"
              value="Tue, Jun 25"
              onChange={() => {}}
            />
            <SelectField
              label="Check-out"
              value="Mon, Jun 31"
              onChange={() => {}}
            />
            <SelectField
              label="Number of guests"
              value="2 Guests"
              onChange={() => {}}
            />
          </div>
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="group inline-flex items-center bg-transparent hover:bg-white text-white hover:text-gray-900 py-2 px-4 border border-white hover:border-transparent rounded-full transition-colors duration-300"
            >
              BOOK NOW
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                size={20}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
