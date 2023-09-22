import React from "react";
import { oneLineContent } from "../../data";
function OneLiner() {
  return (
    <div className="bg-gradient-to-b from-indigo-500  to-blue-400 text-white w-full text-center p-4 text-4xl font-medium">
      {oneLineContent.text}
    </div>
  );
}

export default OneLiner;
