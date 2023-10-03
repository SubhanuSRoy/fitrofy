import React from "react";
import { oneLineContent } from "../../data";
function OneLiner() {
  return (
    <div className="bg-gradient-to-b from-indigo-500  to-blue-400 text-white w-full text-center p-2 sm:p-4 text-lg md:text-xl lg:text-4xl font-medium">
      {oneLineContent.text}
    </div>
  );
}

export default OneLiner;
