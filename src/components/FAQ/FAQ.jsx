import React from "react";

import { faqs } from "../../data";

function FAQ() {
  return (
    <div className="space-y-4 px-16 py-12 bg-gradient-to-b from-indigo-500  to-blue-400"  id="faqs">
      <h1 className="text-5xl pb-4 font-bold text-white text-center">FAQs</h1>
      {faqs.map((faq) => {
        return (
          <details className="group rounded-lg bg-blue-50 p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-indigo-500">
              <h2 className="font-medium text-xl">{faq.question}</h2>

              <span className="relative h-10 w-10 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 h-10 w-10 opacity-100 group-open:opacity-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 h-10 w-10 opacity-0 group-open:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">{faq.answer}</p>
          </details>
        );
      })}
    </div>
  );
}

export default FAQ;
