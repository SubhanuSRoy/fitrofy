import React from "react";

import { techIntegrationContent } from "../../data";

import integrationIllus from "../../assets/illustrations/techIntegration.svg";

function TechIntegration() {
  return (
    <div className="bg-white w-full sm:grid sm:grid-cols-2  md:px-24 py-12">
      <img src={integrationIllus} alt="tech intrgation" />
      <div className="flex flex-col items-center w-full gap-4">
        <h1 className="text-5xl mb-4">
          <span className="text-blue-900 tracking-wide font-bold">
            Tech Integration
          </span>
        </h1>
        {techIntegrationContent.map((item) => {
          return (
            <div className="w-4/5 flex gap-4 bg-white rounded-md  border border-indigo-800 p-8 shadow-xl transition hover:border-indigo-500/90 hover:shadow-indigo-500/20">
              <item.icon className="h-10 w-10 text-white bg-indigo-500 rounded-full p-2" />
              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-bold text-gray-900 md:text-xl">
                  {item.title}
                </h2>
                <p className=" text-gray-700 mt-4 md:block md:w-96">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TechIntegration;
