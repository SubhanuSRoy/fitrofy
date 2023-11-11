import React, { useState } from "react";

import { navLinks } from "../../data";

// logo import
import logo from "../../assets/images/logo.png";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const scrollTo = (componentID) => {
    const section = document.querySelector(componentID);
    section.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <header className="">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a className="flex-1 flex items-center gap-2" href="/">
            <img src={logo} className="h-10 w-10 rounded-full" alt={logo} />
            <span className="text-indigo-500 text-2xl font-bold">FITROFY</span>
          </a>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {navLinks.map((link) => (
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href={link.href}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="/"
                >
                  Get Free Demo
                </a>
              </div>

              <div className="block md:hidden">
                <button
                  className="rounded  p-2 text-gray-600 transition hover:text-gray-600/75"
                  onClick={toggleNavbar}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {navbarOpen && (
          <div className="w-full bg-white px-8 py-4">
            <nav aria-label="Global" className="md:hidden block">
              <ul className="flex flex-col items-center gap-6 text-sm">
                {navLinks.map((link) => (
                  <li className="hover:bg-gray-50 rounded-md w-full py-2 px-4 text-center">
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      onClick={() => scrollTo(link.href)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
