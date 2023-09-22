import React from "react";

import { secureContent } from "../../data";

import secureImg from "../../assets/illustrations/secure.svg";

function Secure() {
  return (
    <div className="bg-gradient-to-b from-indigo-500  to-blue-400 text-white w-full text-center py-12 px-4 flex flex-col md:flex-row  items-center justify-center gap-8">
      <img src={secureImg} alt="tech intrgation" className="h-64" />
      <div className=" text-white tracking-wide ">
        <div className="text-5xl font-bold pb-4">{secureContent.title}</div>
        <div className="text-lg py-4">{secureContent.description}</div>
        <div className="flex items-center gap-4 pt-4">
          {secureContent.features.map((feature) => {
            return (
              <div className="text-2xl text-white tracking-wide font-medium">
                {feature.title}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Secure;
