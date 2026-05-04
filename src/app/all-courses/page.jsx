import PopularCourseCard from "@/components/PopularCourseCard";

const AllCoursesPage = async ({ searchParams }) => {

  const res = await fetch(
    "https://skillsphere-app-sooty.vercel.app/courses.json",
    { cache: "no-store" }
  );

  const allCourses = await res.json();

  const search = searchParams?.search || "";

  const filteredCourses = allCourses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-5 py-10">

      {/* Search Form */}
      <form method="GET" className="flex justify-center my-10">
        <div className="flex w-full max-w-md">

          <input
            type="text"
            name="search"
            defaultValue={search}
            placeholder="Search courses by title..."
            className="flex-1 rounded-l-xl border border-gray-300 px-5 py-3 outline-none focus:border-teal-600"
          />

          <button
            type="submit"
            className="rounded-r-xl px-6 py-3 text-white font-semibold bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 transition"
          >
            Search
          </button>

        </div>
      </form>

      {/* Courses */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <PopularCourseCard key={course.id} course={course} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-xl">
            No courses found 😢
          </p>
        )}
      </div>
    </div>
  );
};

export default AllCoursesPage;