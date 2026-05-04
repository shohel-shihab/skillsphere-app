"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FiSearch,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { authClient } from "@/lib/auth-client"
import { Avatar } from "@heroui/react";
import { useRouter } from "next/navigation";
export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const logOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  }



  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between px-4 py-4 lg:px-10">
        <div className="flex items-center gap-4">
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
          <h1 className="text-2xl font-bold text-teal-700 sm:text-3xl">
            SkillSphere
          </h1>

          {/* Desktop Menu */}

          <ul className="hidden lg:flex items-center gap-8 ml-10">
            <li>
              <Link href="/" className="relative font-semibold text-teal-700">
                Home
                <span className="absolute left-0 -bottom-2 h-[2px] w-full rounded-full bg-teal-700"></span>
              </Link>
            </li>

            <li>
              <Link
                href="/all-courses"
                className="text-gray-500 transition hover:text-teal-700"
              >
                All Courses
              </Link>
            </li>

            <li>
              <Link
                href="/profile"
                className="text-gray-500 transition hover:text-teal-700"
              >
                My Profile
              </Link>
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


          {!user && <div className="flex gap-2">
            <Link href="/registration">
              <button className="cursor-pointer font-semibold text-teal-700">
                Registration
              </button>
            </Link>
            <Link href="/login">
              <button className="cursor-pointer font-semibold text-teal-700">
                Login
              </button>
            </Link>
          </div>}
          {
            user && <div className="flex gap-2">
              <button onClick={logOut} className="cursor-pointer font-semibold text-teal-700">
                Logout
              </button>
              <Avatar>
                <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
              </Avatar>


            </div>
          }
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${menuOpen ? "max-h-60 border-t border-gray-200" : "max-h-0"
          }`}
      >
        <ul className="flex flex-col gap-5 px-6 py-5 bg-white">
          <li>
            <Link href="/" className="font-semibold text-teal-700">
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/all-courses"
              className="text-gray-500 transition hover:text-teal-700"
            >
              All Courses
            </Link>
          </li>

          <li>
            <Link
              href="/profile"
              className="text-gray-500 transition hover:text-teal-700"
            >
              My Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}