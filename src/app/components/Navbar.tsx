import React from "react";
import { SiCodefresh } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div>
      <div className="grid xl:grid-cols-1 grid-cols-1 ">
        <div className="p-5">
          <div className="py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-black to-gray-700 ">
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-2">
                <SiCodefresh className="w-6 h-6 text-green-600 hover:text-cyan-400" />
                <div style={{ position: "relative" }}>
                  <input
                    className="rounded-3xl py-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block"
                    placeholder="  search from your skin tone product"
                  />
                  <FaSearch className="w-5 h-5 text-lime-300 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block" />
                </div>
                <FaCartShopping className="inline-block w-8 h-8 rounded-full ring-1 relative ring-sky-500 hover:ring-amber-500 text-lime-400" />
                <img
                  className="inline-block w-8 h-8 rounded-full ring-2 ring-sky-400 hover:text-amber-400"
                  src=" https://arabianorganics.com/cdn/shop/products/6346-2689_600x.png?v=1665583096
                "
                  alt="user avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
