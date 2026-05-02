
import {
  FaStar,
  FaShoppingBasket,
  FaArrowRight,
} from "react-icons/fa";
import PopularCourseCard from "./PopularCourseCard";



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
          {
            courses.map((course)=> <PopularCourseCard key={course.id} course={course}></PopularCourseCard>)
          }
        </div>
      </div>
    </section>
  );
}

export default PopularCourses;