"use client";

import Link from "next/link";
import { useState } from "react";

import {
  FiSearch,
  FiBell,
  FiHelpCircle,
  FiMenu,
  FiX,
} from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between px-4 py-4 lg:px-10">

        {/* LEFT */}
        <div className="flex items-center gap-4">

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden"
          >
            {menuOpen ? (
              <FiX className="text-2xl text-gray-700" />
            ) : (
              <FiMenu className="text-2xl text-gray-700" />
            )}
          </button>

          {/* Logo */}
          <h1 className="text-2xl font-bold text-teal-700 sm:text-3xl">
            SkillSphere
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 ml-10">
            <li>
              <Link
                href="/"
                className="relative font-semibold text-teal-700"
              >
                Home
                <span className="absolute left-0 -bottom-2 h-[2px] w-full rounded-full bg-teal-700"></span>
              </Link>
            </li>

            <li>
              <Link className="text-gray-500 transition hover:text-teal-700" href="/all-courses">All Courses</Link>
            </li>

            <li>
              <a
                href="#"
                className="text-gray-500 transition hover:text-teal-700"
              >
                My Profile
              </a>
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Search */}
          <div className="relative hidden md:block">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              placeholder="Search for courses..."
              className="w-[220px] rounded-full border border-gray-200 bg-gray-100 py-2 pl-11 pr-4 outline-none focus:border-teal-500 lg:w-[320px]"
            />
          </div>

          {/* Notification */}
          <button className="relative rounded-full p-2 hover:bg-gray-100">
            <FiBell className="text-xl text-gray-600" />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          {/* Help */}
          <button className="hidden rounded-full p-2 hover:bg-gray-100 sm:block">
            <FiHelpCircle className="text-xl text-gray-600" />
          </button>

          {/* Avatar */}
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="profile"
            className="h-10 w-10 rounded-full border-2 border-cyan-200 object-cover sm:h-11 sm:w-11"
          />
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${menuOpen ? "max-h-60 border-t border-gray-200" : "max-h-0"
          }`}
      >
        <ul className="flex flex-col gap-5 px-6 py-5 bg-white">
          <li>
            <a
              href="#"
              className="font-semibold text-teal-700"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-gray-600"
            >
              Courses
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-gray-600"
            >
              My Profile
            </a>
          </li>

          {/* Mobile Search */}
          <div className="relative mt-2 md:hidden">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-full border border-gray-200 bg-gray-100 py-2 pl-11 pr-4 outline-none focus:border-teal-500"
            />
          </div>
        </ul>
      </div>
    </nav>
  );
}