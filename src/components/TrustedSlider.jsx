"use client";

const logos = [
    "https://i.ibb.co.com/B5zfzmjc/zoom.png",
    "https://i.ibb.co.com/xqR26bNs/logo-2.png",
    "https://i.ibb.co.com/PGSHbcqL/microsoft.png",
    "https://i.ibb.co.com/60xk1dtR/apple.png",
    "https://i.ibb.co.com/prj9HMj9/pinterest.png",
    "https://i.ibb.co.com/6JWXXWgg/tiktok.png",
    "https://i.ibb.co.com/mr7mTbCp/huawei.png",
];

export default function TrustedSlider() {
    return (
        <section className="bg-[#f8fafc] py-14">

            {/* Title */}
            <div className="flex items-center justify-center gap-4 mb-10 px-4 text-center">
                <div className="hidden sm:block h-[1px] w-20 bg-gray-300"></div>
                <h2 className="text-4xl font-bold text-teal-900 sm:text-5xl">
                    Trusted by <span className="font-semibold">1600+</span> businesses worldwide
                </h2>
                <div className="hidden sm:block h-[1px] w-20 bg-gray-300"></div>
            </div>

            {/* Slider */}
            <div className="relative overflow-hidden w-full slider-container">

                {/* Fade effect (optional premium look) */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#f8fafc] to-transparent z-10"></div>
                <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#f8fafc] to-transparent z-10"></div>

                {/* Track */}
                <div className="animate-slide flex items-center gap-10 w-max">

                    {[...logos, ...logos].map((logo, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 flex items-center justify-center w-[100px] sm:w-[140px] md:w-[180px] lg:w-[220px]"
                        >
                            <img
                                src={logo}
                                alt="company"
                                className="w-full h-10 sm:h-12 md:h-14 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
                            />
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}