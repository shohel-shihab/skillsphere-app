import PopularCourseCard from '@/components/PopularCourseCard';
import React from 'react'

const AllCoursesPage = async () => {
    const res = await fetch("https://skillsphere-app-sooty.vercel.app/courses.json")
    const allCourses = await res.json();
    return (
        <div>
            <div  className="mt-14 grid md:grid-cols-3 gap-8 sm:grid-cols-2 xl:grid-cols-3 px-5 my-10">
                {
                    allCourses.map(course => <PopularCourseCard key={course.id} course={course}></PopularCourseCard>)
                }
            </div>
        </div>
    )
}

export default AllCoursesPage