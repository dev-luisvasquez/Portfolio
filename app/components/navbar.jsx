"use client";

import Link from "next/link";
import React from "react";


function handleSmoothScroll(e, id) {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className=" text-[#16f2b3] text-3xl font-bold">
            LVDEV
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
              href="#about"
              onClick={e => handleSmoothScroll(e, "about")}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SOBRE MÍ</div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
              href="#experience"
              onClick={e => handleSmoothScroll(e, "experience")}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCIA</div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
              href="#skills"
              onClick={e => handleSmoothScroll(e, "skills")}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
              href="#projects"
              onClick={e => handleSmoothScroll(e, "projects")}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROYECTOS</div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;