
import {
  FaStar,
  FaShoppingBasket,
  FaArrowRight,
} from "react-icons/fa";



const PopularCourses = async() => {
  const res=await fetch("https://skillsphere-app-sooty.vercel.app/courses.json")
  const popular=await res.json();
  const courses = [...popular]
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 3);

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
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">

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
                <div>
                  <button className="cursor-pointer flex justify-center items-center rounded-full bg-indigo-200 text-md text-gray-700 px-4 py-2 font-semibold transition hover:bg-indigo-200">
                    View Details
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

export default PopularCourses;