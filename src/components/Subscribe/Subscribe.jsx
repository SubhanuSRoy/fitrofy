import React from "react";
import { subscribeContent } from "../../data";

function Subscribe() {
  return (
    <div class="w-1/2 mx-auto  flex flex-col items-center gap-4 rounded-lg bg-indigo-600 p-6 shadow-lg sm:flex-row sm:justify-between">
      <strong class="text-xl text-white sm:text-xl">
        {subscribeContent.title}
      </strong>

      <a
        class="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-indigo-600 hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
        href="/"
      >
        <span class="text-sm font-medium"> {subscribeContent.btnText} </span>

        <svg
          class="h-5 w-5 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  );
}

export default Subscribe;
