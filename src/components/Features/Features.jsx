import React from "react";

import { featuresSection } from "../../data";


function Features() {
  return (
    <section className="bg-white text-gray-900 min-h-screen"  id="features">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-center text-4xl font-bold tracking-tight text-indigo-800 sm:text-5xl">
            {featuresSection.title}
          </h2>

          <p className="mt-4 text-gray-800">{featuresSection.description}</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuresSection.features.map((feature) => {
            return (
              <a
                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-indigo-500/90 hover:shadow-indigo-500/20"
                href="/services/digital-campaigns"
              >
                <feature.icon className="h-10 w-10 text-white bg-indigo-500 rounded-full p-2"/>
                

                <h2 className="mt-4 text-xl font-bold text-black">
                  {feature.title}
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                  {feature.description}
                </p>
              </a>
            );
          })}
        </div>

        {/* <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Get Started Today
          </a>
        </div> */}
      </div>
    </section>
  );
}

export default Features;
