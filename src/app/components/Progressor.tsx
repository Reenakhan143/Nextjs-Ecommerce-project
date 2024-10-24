import React from "react";

export default function Progressor() {
  return (
    <div>
      <div className="flex item-start max-w-screen lg w-full mx-auto mt-10">

        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-lime-400 p-1.5 flex items-center justify-center rounded-full ">
              <span className="text bas text-black font-bold">1</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-cyan-500"></div>
          </div>
          <div className="mt-2 mr-4">
            <h6 className="text-base text-bold text-lime-700">
              step 1: choose your product
            </h6>
            <p className="text-xs text-black">
              Explore our organic products select your favourite moistrizer.
            </p>
          </div>
        </div>


        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-amber-400 p-1.5 flex items-center justify-center rounded-full ">
              <span className="text bas text-black font-bold">2</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-cyan-500"></div>
          </div>
          <div className="mt-2 mr-4">
            <h6 className="text-base text-bold text-lime-900">
              step 2: select your skin tone.
            </h6>
            <p className="text-xs text-black">
              Explore our organic products select your favourite moistrizer for
              skin tone.
            </p>


          </div>
        </div>

        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-amber-400 p-1.5 flex items-center justify-center rounded-full ">
              <span className="text bas text-black font-bold">3</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-cyan-500"></div>
          </div>
          <div className="mt-2 mr-4">
            <h6 className="text-base text-bold text-lime-900">
              step 3: select your skin tone.
            </h6>
            <p className="text-xs text-black">
              Place Your Order.
            </p>

            
          </div>
        </div>



      </div>
    </div>
  );
}
