import React from "react";

import { pricingContent } from "../../data";

function Pricing() {
  const complete = pricingContent.plans[0];
  const essential = pricingContent.plans[1];
  const enterprise = pricingContent.plans[2];

  return (
    <div className="min-h-screen flex justify-center items-center bg-white pt-12 py-24">
      <div className="">
        <div className="text-center font-semibold">
          <p className="py-6 text-xl text-blue-700 font-normal w-full px-8 md:w-full">
            {pricingContent.title}
          </p>
          <h1 className="text-5xl">
            <span className="text-blue-900 tracking-wide font-bold">
              {pricingContent.largeText}{" "}
            </span>
            {/* <span>Plans</span> */}
          </h1>
        </div>
        <div className="pt-24 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0">
          <div className="w-96 p-8 bg-white text-center rounded-md md:pr-16 shadow-xl md:shadow-indigo-500/40">
            <h1 className="text-black font-semibold text-2xl">
              {complete.title}
            </h1>
            <p className="pt-2 tracking-wide">
              <span className="text-gray-400 align-top">INR </span>
              <span className="text-3xl font-semibold">{complete.price}</span>
              <span className="text-gray-400 font-medium">
                / {complete.duration}
              </span>
            </p>
            <hr className="mt-4 border-1" />
            <div className="pt-8">
              <p className="py-2  text-gray-600 italic font-normal w-full md:w-full">
                {complete.description}
              </p>
              {complete.features.map((feature) => {
                return (
                  <p className="font-semibold text-gray-400 text-left pt-5 flex items-center ">
                    <feature.icon className="h-6 w-6 text-indigo-500 border-2 border-indigo-500 rounded-full p-1" />
                    <span className="pl-2">{feature.text}</span>
                  </p>
                );
              })}

              <a href={complete.buttonLink} className="">
                <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-lg text-white">
                  <span className="font-medium">{complete.buttonText}</span>
                </p>
              </a>
              <span className="pl-2 material-icons align-middle text-sm text-gray-600">
                {complete.bottomText}
              </span>
            </div>
          </div>

          <div className="w-96 md:w-80  p-8 bg-white text-center rounded-md text-gray-900 border-2 shadow-xl border-indigo-500/90 hover:shadow-indigo-500/20 transform scale-110">
            <h1 className="text-gray-900 font-semibold text-2xl">
              {essential.title}
            </h1>
            <p className="pt-2 tracking-wide">
              <span className="text-gray-400 align-top">INR </span>
              <span className="text-3xl font-semibold">{essential.price}</span>
              <span className="text-gray-400 font-medium">
                / {essential.duration}
              </span>
            </p>
            <hr className="mt-4 border-1 border-gray-600" />
            <div className="pt-8">
              <p className="py-2  text-gray-600 italic font-normal w-full md:w-full">
                {complete.description}
              </p>
              {essential.features.map((feature) => {
                return (
                  <p className=" text-gray-800 text-left pt-5 flex items-center w-full">
                    <feature.icon className="h-6 w-6 text-indigo-500 border-2 border-indigo-500 rounded-full p-1" />
                    <span className="pl-2 whitespace-pre-wrap">
                      {feature.text}
                    </span>
                  </p>
                );
              })}

              <a href={essential.buttonLink} className="">
                <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-lg text-white">
                  <span className="font-medium">{essential.buttonText}</span>
                </p>
              </a>
              <span className="pl-2 material-icons align-middle text-sm text-gray-600">
                {essential.bottomText}
              </span>
            </div>
            <div className="absolute -top-2 right-2">
              <p className="bg-blue-500 text-white font-semibold px-4 py-1 rounded-full uppercase text-xs">
                Popular
              </p>
            </div>
          </div>
          <div className="w-96 p-8 bg-white text-center rounded-md md:pl-16 shadow-xl md:shadow-indigo-500/40">
            <h1 className="text-black font-semibold text-2xl">
              {enterprise.title}
            </h1>
            <p className="pt-2 tracking-wide">
              <span className="text-gray-400 align-top">INR </span>
              <span className="text-3xl font-semibold">{enterprise.price}</span>
              <span className="text-gray-400 font-medium">
                / {enterprise.duration}
              </span>
            </p>
            <hr className="mt-4 border-1" />
            <div className="pt-8">
              <p className="py-2  text-gray-600 italic font-normal w-full md:w-full">
                {complete.description}
              </p>
              {enterprise.features.map((feature) => {
                return (
                  <p className="font-semibold text-gray-400 text-left pt-5 flex items-center ">
                    <feature.icon className="h-6 w-6 text-indigo-500 border-2 border-indigo-500 rounded-full p-1" />
                    <span className="pl-2">{feature.text}</span>
                  </p>
                );
              })}

              <a href={enterprise.buttonLink} className="">
                <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-lg text-white">
                  <span className="font-medium">{enterprise.buttonText}</span>
                </p>
              </a>
              <span className="pl-2 material-icons align-middle text-sm text-gray-600">
                {enterprise.bottomText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
