import React from "react";
import { footerContent, navLinks, subscribeContent } from "../../data";

function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <strong className="block text-center text-xl font-bold text-gray-900 sm:text-3xl">
            {subscribeContent.title}
          </strong>

          <form className="mt-6">
            <div className="relative max-w-lg">
              <label className="sr-only" htmlFor="email">
                {" "}
                Email{" "}
              </label>

              <input
                className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder={subscribeContent.inputPlaceholder}
              />

              <button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-indigo-500  to-blue-400  px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                {subscribeContent.btnText}
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32 border-t-2 border-indigo-500 pt-12">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <h1 className="text-center lg:text-left text-xl font-bold text-gray-900 sm:text-3xl">
              {footerContent.name}
            </h1>
            <p className="mt-4 text-center text-gray-500 lg:text-left lg:text-lg">
              {footerContent.description}
            </p>

            <div className="mt-6 flex justify-center gap-4 lg:justify-start">
              {footerContent.socialLinks.map((socialMedia) => {
                return (
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href={socialMedia.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only"> {socialMedia.name} </span>

                    <socialMedia.icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
            <p className="mt-4 text-center text-gray-400 lg:text-left text-sm">
              {footerContent.copyrightText}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 text-center lg:text-right">
            <div>
      
              <strong className="font-medium text-gray-900">
      
                {footerContent.navLinkTitle}{" "}
              </strong>
              <ul className="mt-4 space-y-1">
                {footerContent.navLinks.map((navLink) => {
                  return (
                    <li>
                      <a
                        className="text-gray-700 transition hover:text-gray-700/75"
                        rel="noreferrer"
                        target="_blank"
                        href={navLink.href}
                      >
                        {navLink.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
