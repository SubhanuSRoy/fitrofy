import React from "react";
import { homeContent } from "../../data";
import homeImg from "../../assets/illustrations/homeImg.svg"

function HeroSection() {
  return (
    <section className="overflow-hidden h-screen items-center sm:grid sm:grid-cols-2  md:px-24 py-8">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            {homeContent.title}
          </h2>

          <p className=" text-gray-700 text-lg mt-4 md:block md:w-96">
            {homeContent.description}
          </p>

          <div className="flex items-center gap-4">
            <div className="mt-4 md:mt-8">
              <a
                href={homeContent.cta[0].href}
                className="inline-block rounded bg-transparent px-12 py-3 text-sm font-medium text-indigo-700 transition border-2 border-indigo-600 hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
              >
                {homeContent.cta[0].name}
              </a>
            </div>
            <div className="mt-4 md:mt-8">
              <a
                href={homeContent.cta[1].href}
                className="inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                {homeContent.cta[1].name}
              </a>
            </div>
          </div>
        </div>
      </div>

      <img
        alt="Fitrofy"
        src={homeImg}
        className=""
      />
    </section>
  );
}

export default HeroSection;
