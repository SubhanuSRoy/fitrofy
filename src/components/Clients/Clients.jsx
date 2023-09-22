import React from "react";
import { clientsContent } from "../../data";

function Clients() {
  return (
    <div className="flex flex-col items-center justify-center px-16 bg-white py-8">
      <h1 className="text-4xl font-bold text-gray-900 text-center">
        Our Clients
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
        {clientsContent.listOfClients.map((item) => {
          return <img src={item.logoURL} className="w-24"/>;
        })}
      </div>
    </div>
  );
}

export default Clients;
