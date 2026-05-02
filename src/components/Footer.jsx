"use client";

import {
  FaGlobe,
  FaAt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#f8fafc]">
      
      {/* Top Section */}
      <div className=" grid grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        
        {/* LEFT */}
        <div className="lg:col-span-1">
          <h2 className="text-4xl font-bold text-gray-800">
            SkillSphere
          </h2>

          <p className="mt-6 max-w-sm text-lg leading-8 text-gray-500">
            Empowering learners worldwide through high-quality,
            accessible, and expert-led digital education.
          </p>

          {/* Social Icons */}
          <div className="mt-8 flex items-center gap-4">
            
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-gray-700 transition hover:bg-gray-300">
              <FaGlobe className="text-lg" />
            </button>

            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-gray-700 transition hover:bg-gray-300">
              <FaAt className="text-lg" />
            </button>
          </div>
        </div>

        {/* Platform */}
        <div>
          <h3 className="text-2xl font-semibold text-teal-800">
            Platform
          </h3>

          <ul className="mt-6 space-y-4">
            <li>
              <a
                href="#"
                className="text-lg text-gray-500 transition hover:text-teal-700"
              >
                All Courses
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-lg text-gray-500 transition hover:text-teal-700"
              >
                Learning Paths
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-lg text-gray-500 transition hover:text-teal-700"
              >
                Mentorship
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-2xl font-semibold text-teal-800">
            Resources
          </h3>

          <ul className="mt-6 space-y-4">
            <li>
              <a
                href="#"
                className="text-lg text-gray-500 transition hover:text-teal-700"
              >
                Contact Info
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-lg text-gray-500 transition hover:text-teal-700"
              >
                Accessibility
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-lg text-gray-500 transition hover:text-teal-700"
              >
                Social Links
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-2xl font-semibold text-teal-800">
            Legal
          </h3>

          <ul className="mt-6 space-y-4">
            <li>
              <a
                href="#"
                className="text-lg text-gray-500 transition hover:text-teal-700"
              >
                Terms of Service
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-lg text-gray-500 transition hover:text-teal-700"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 py-8">
        <p className="text-center text-base font-medium text-gray-400">
          © {new Date().getFullYear()} SkillSphere. Empowering learners worldwide.
        </p>
      </div>
    </footer>
  );
}