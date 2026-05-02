"use client";

import {
  FaStar,
  FaShoppingBasket,
  FaArrowRight,
} from "react-icons/fa";

const courses = [
  {
    id: 1,
    category: "DEVELOPMENT",
    title: "Mastering Advanced React & Web Architecture",
    instructor: "Dr. Emily Watson",
    rating: "4.9",
    reviews: "2.4k reviews",
    price: "$89.99",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "DESIGN",
    title: "UI/UX Strategy: Building Better Digital Products",
    instructor: "Marcus Sterling",
    rating: "4.8",
    reviews: "1.8k reviews",
    price: "$74.50",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "BUSINESS",
    title: "Data-Driven Management & Decision Making",
    instructor: "Prof. Alex Rivera",
    rating: "4.7",
    reviews: "3.1k reviews",
    price: "$99.00",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "SCIENCE",
    title: "Sustainable Engineering & Global Innovation",
    instructor: "Dr. Sarah Jenkins",
    rating: "4.9",
    reviews: "950 reviews",
    price: "$112.00",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function PopularCourses() {
  return (
    <section className="bg-[#f8fafc] py-16">
      <div className="px-5 lg:px-10">
        
        {/* TOP */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          
          {/* Left */}
          <div>
            <h2 className="text-4xl font-bold text-teal-900 sm:text-5xl">
              Popular Courses
            </h2>

            <p className="mt-4 text-lg text-gray-500">
              Learn from the community's highest-rated educational
              content.
            </p>
          </div>

          {/* Right */}
          <button className="flex items-center gap-3 text-lg font-semibold text-teal-700 transition hover:text-teal-900">
            See all categories
            <FaArrowRight />
          </button>
        </div>

        {/* CARDS */}
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
          
          {courses.map((course) => (
            <div
              key={course.id}
              className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              
              {/* IMAGE */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-110"
                />

                {/* CATEGORY */}
                <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-bold tracking-wide text-teal-700 shadow">
                  {course.category}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                
                {/* Rating */}
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <FaStar className="text-purple-500" />

                  <span className="font-semibold text-gray-700">
                    {course.rating}
                  </span>

                  <span>({course.reviews})</span>
                </div>

                {/* Title */}
                <h3 className="mt-5 text-2xl font-bold leading-snug text-gray-800">
                  {course.title}
                </h3>

                {/* Instructor */}
                <p className="mt-4 text-base text-gray-500">
                  by {course.instructor}
                </p>

                {/* Divider */}
                <div className="my-6 border-t border-gray-200"></div>

                {/* Bottom */}
                <div className="flex items-center justify-between">
                  
                  <span className="text-3xl font-bold text-teal-700">
                    {course.price}
                  </span>

                  <button className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 text-2xl text-gray-700 transition hover:bg-indigo-200">
                    <FaShoppingBasket />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}