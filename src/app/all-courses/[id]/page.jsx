
import Image from "next/image";
import {
    FaPlay,
    FaCheckCircle,
    FaClock,
    FaMobileAlt,
    FaInfinity,
    FaCertificate,
    FaShareAlt,
    FaGift,
    FaTag,
    FaChevronDown,
    FaChevronRight,
    FaStar,
    FaUsers,
} from "react-icons/fa";

const CourseDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch("https://skillsphere-app-sooty.vercel.app/courses.json")
    const courseDetails = await res.json();
    const details = courseDetails.find(detail => detail.id == id);
    console.log(details)

    return (
        <section className="bg-[#f5f7fb] py-10">
            <div className="grid grid-cols-1 gap-8 px-4 lg:grid-cols-3 lg:px-8">

                {/* LEFT CONTENT */}
                <div className="space-y-8 lg:col-span-2">

                    {/* Course Overview */}
                    <div className="rounded-2xl bg-white p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-gray-800">
                            Course Overview
                        </h2>

                        <p className="mt-5 leading-8 text-gray-500">
                            {details.description}
                        </p>

                        {/* Feature Cards */}
                        <div className="mt-6 grid gap-4 md:grid-cols-2">

                            <div className="rounded-xl bg-gray-100 p-5">
                                <div className="flex items-start gap-4">
                                    <FaCheckCircle className="mt-1 text-purple-600" />

                                    <div>
                                        <h3 className="font-semibold text-gray-800">
                                            Industry Validated
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-500">
                                            Content verified by PMs at Google, Meta,
                                            and Netflix.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl bg-gray-100 p-5">
                                <div className="flex items-start gap-4">
                                    <FaTag className="mt-1 text-gray-700" />

                                    <div>
                                        <h3 className="font-semibold text-gray-800">
                                            Hands-on Projects
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-500">
                                            Build a real product portfolio with 5
                                            capstone projects.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* What You'll Learn */}
                    <div className="rounded-2xl bg-white p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-gray-800">
                            What you'll learn
                        </h2>

                        <div className="mt-6 grid gap-5 md:grid-cols-2">

                            {[
                                "Master the art of competitive market analysis and positioning.",
                                "Execute data-driven decision making using A/B testing and analytics.",
                                "Prioritize features using RICE, MoSCoW, and Kano frameworks.",
                                "Write high-impact PRDs and user stories that engineers love.",
                                "Lead cross-functional teams across Design, Engineering, and Marketing.",
                                "Understand the technical foundations of modern software architecture.",
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3"
                                >
                                    <FaCheckCircle className="mt-1 text-purple-600" />

                                    <p className="text-gray-600 leading-7">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Course Content */}
                    <div className="rounded-2xl bg-white shadow-sm">

                        {/* Header */}
                        <div className="flex flex-col gap-4 border-b border-gray-200 p-6 md:flex-row md:items-center md:justify-between">

                            <h2 className="text-lg font-semibold text-gray-800">
                                Course Content
                            </h2>

                            <p className="text-sm text-gray-500">
                                12 sections • 145 lectures • 24h 45m total length
                            </p>
                        </div>

                        {/* Sections */}
                        <div className="divide-y divide-gray-200">

                            {/* Section */}
                            <div className="p-6">
                                <div className="flex items-center justify-between">

                                    <div className="flex items-center gap-3">
                                        <FaChevronDown className="text-gray-500" />

                                        <h3 className="font-medium text-gray-700">
                                            Section 1: Foundations of Product Management
                                        </h3>
                                    </div>

                                    <p className="text-sm text-gray-500">
                                        4 lectures • 45 min
                                    </p>
                                </div>

                                <div className="mt-5 space-y-4 pl-8">

                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-500">
                                            Introduction to the PM Role
                                        </p>

                                        <span className="text-sm font-medium text-purple-600">
                                            Preview
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-500">
                                            The Product Lifecycle Breakdown
                                        </p>

                                        <span className="text-sm text-gray-400">
                                            12:30
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Section */}
                            <div className="flex items-center justify-between p-6">

                                <div className="flex items-center gap-3">
                                    <FaChevronRight className="text-gray-500" />

                                    <h3 className="font-medium text-gray-700">
                                        Section 2: Market Research & Opportunity
                                        Mapping
                                    </h3>
                                </div>

                                <p className="text-sm text-gray-500">
                                    8 lectures • 2h 15m
                                </p>
                            </div>

                            {/* Section */}
                            <div className="flex items-center justify-between p-6">

                                <div className="flex items-center gap-3">
                                    <FaChevronRight className="text-gray-500" />

                                    <h3 className="font-medium text-gray-700">
                                        Section 3: Product Strategy & Visioning
                                    </h3>
                                </div>

                                <p className="text-sm text-gray-500">
                                    12 lectures • 3h 10m
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* View More */}
                    <button className="w-full rounded-xl border border-teal-800 py-4 font-medium text-teal-800 transition hover:bg-teal-50">
                        View 9 more sections
                    </button>

                    {/* Instructor */}
                    <div className="rounded-2xl bg-white p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-gray-800">
                            About the Instructor
                        </h2>

                        <div className="mt-8 flex flex-col gap-8 lg:flex-row">

                            {/* Left */}


                            {/* Right */}
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800">
                                    {details.instructor}
                                </h3>

                                <p className="mt-2 font-medium text-purple-600">
                                    Senior Director of Product at VelocityTech
                                </p>

                                <p className="mt-5 leading-8 text-gray-500">
                                    Marcus Thorne is a veteran product leader with
                                    over 15 years of experience building scalable
                                    SaaS products for Fortune 500 companies.
                                    Having led product teams at both hyper-growth
                                    startups and established tech giants, Marcus
                                    brings a pragmatic, results-oriented approach
                                    to product education.
                                </p>

                                <p className="mt-5 leading-8 text-gray-500">
                                    He has mentored hundreds of PMs who have gone
                                    on to land roles at Google, Amazon, and Airbnb.
                                    His teaching style is focused on real-world
                                    application, stripping the fluff to give you
                                    the exact tools used by elite product
                                    organizations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDEBAR */}
                <div>
                    <div className="sticky top-10 space-y-6">

                        {/* Purchase Card */}
                        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">

                            {/* Preview */}
                            <div className="relative left-0">
                               
                                <Image
                                    src={details.image}
                                    width="600"
                                    height="300"
                                    alt="Course image"
                                />

                                <button className="absolute inset-0 flex items-center justify-center">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                                        <FaPlay className="text-xl text-white" />
                                    </div>
                                </button>

                                <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm font-semibold tracking-wide text-white">
                                    PREVIEW THIS COURSE
                                </p>
                            </div>

                           
                            <div className="p-6">

                                <div className="flex items-center gap-3">
                                    <span className="text-4xl font-bold text-gray-800">
                                       <h2>{details.title}</h2>
                                    </span>
                                  
                                </div>

                                {/* Buttons */}
                                <div className="mt-6 space-y-4">

                                    <button className="w-full rounded-lg bg-orange-700 py-4 font-semibold text-white transition hover:bg-orange-800">
                                        Add to Cart
                                    </button>

                                    <button className="w-full rounded-lg border border-gray-400 py-4 font-semibold text-gray-700 transition hover:bg-gray-50">
                                        Buy Now
                                    </button>
                                </div>

                                <p className="mt-4 text-center text-sm italic text-gray-400">
                                    30-Day Money-Back Guarantee
                                </p>

                                {/* Includes */}
                                <div className="mt-8">
                                    <h3 className="font-semibold text-gray-800">
                                        This course includes:
                                    </h3>

                                    <div className="mt-5 space-y-4 text-sm text-gray-600">

                                        <div className="flex items-center gap-3">
                                            <FaClock />
                                            <span>24.5 hours on-demand video</span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <FaTag />
                                            <span>15 downloadable resources</span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <FaInfinity />
                                            <span>Full lifetime access</span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <FaMobileAlt />
                                            <span>Access on mobile and TV</span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <FaCertificate />
                                            <span>Certificate of completion</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="mt-8 flex items-center justify-between text-sm font-medium text-gray-600">

                                    <button className="flex items-center gap-2 hover:text-teal-700">
                                        <FaShareAlt />
                                        Share
                                    </button>

                                    <button className="flex items-center gap-2 hover:text-teal-700">
                                        <FaGift />
                                        Gift this course
                                    </button>

                                    <button className="flex items-center gap-2 hover:text-teal-700">
                                        <FaTag />
                                        Apply Coupon
                                    </button>
                                </div>
                            </div>
                        </div>

                       
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CourseDetailsPage