"use client";

import { Button, Card, Chip, ProgressBar } from "@heroui/react";


export default function HeroBanner() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-teal-900/75" />

      {/* Main Content */}
      <div className="relative z-10  flex min-h-screen justify-between items-center flex-col   gap-16 px-5 py-14 lg:flex-row lg:px-10">
        
        {/* LEFT */}
        <div className="max-w-2xl text-center lg:text-left">
          
          <Chip
            radius="full"
            className="bg-purple-600 text-white"
          >
            NEW LEARNING PATHS
          </Chip>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Upgrade Your Skills
            <br />
            Today 🚀
          </h1>

          <p className="mt-6 text-base leading-7 text-gray-200 sm:text-lg">
            Master the most in-demand technologies and creative
            skills with expert-led courses designed for your
            career growth.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            
            <Button
              size="lg"
              radius="lg"
              className="bg-orange-700 text-white"
            >
              Explore All Courses
            </Button>

            <Button
              size="lg"
              radius="lg"
              variant="bordered"
              className="border-white/40 bg-white/10 text-white"
            >
              View Pricing
            </Button>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="w-full max-w-2xl">
          
          <Card className="rotate-2 border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
            
            {/* Course Card */}
            <div className="rounded-2xl bg-white p-5">
              
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                
                {/* Left */}
                <div className="flex items-center gap-4">
                  
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-100 text-2xl">
                    🧠
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 sm:text-xl">
                      AI Fundamentals
                    </h3>

                    <p className="text-sm text-gray-500">
                      Instructor: Sarah Chen
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="w-fit rounded-lg bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-700">
                  4.9 ⭐
                </div>
              </div>
            </div>

            {/* Progress */}
            <div className="mt-6">
              <ProgressBar
                aria-label="Loading..."
                value={75}
                classNames={{
                  indicator: "bg-purple-600",
                  track: "bg-white/30",
                }}
              />

              <p className="mt-3 text-right text-sm font-medium text-white">
                75% Complete
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}