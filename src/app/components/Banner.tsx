import React from "react";

export default function Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-tr from-white to-gray-700 font-sans px-6 py-12 mb-7">
      <div className="absolute inset-0 opacity-20">
        <img
          src="/aloevera.PNG "
          alt="my image "
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 container mx auto flex flex-col justify-center text-center item-center">
          <h2 className="text-black sm:text-5xl font-bold mb-4">
          Discover Our Deal
          </h2>
          <p className="text-black text-lg text-center">
          Outlet Now For Exculisve Offer Discount!
          </p>

         <button 
          type="button"
          className="bg-sky-500 text-black text-sm font-semibold py-2 px-5 rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
          Exiting Launch at 3pm!

          </button>

      </div>
    </div>
  );
}
