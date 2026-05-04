"use client";

import { Button, Card, Chip, ProgressBar } from "@heroui/react";
import { motion } from "framer-motion";

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
      <div className="relative z-10 flex min-h-screen justify-between items-center flex-col gap-16 px-5 py-14 lg:flex-row lg:px-10">
        
        {/* LEFT */}
        <div className="max-w-2xl text-center lg:text-left">
          
          <Chip
            radius="full"
            className="bg-purple-600 text-white"
          >
            NEW LEARNING PATHS
          </Chip>

          {/* 🔥 Animated Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
          >
            <motion.span
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-block"
            >
              Upgrade Your Skills
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Today 🚀
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-base leading-7 text-gray-200 sm:text-lg"
          >
            Master the most in-demand technologies and creative
            skills with expert-led courses designed for your
            career growth.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
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
          </motion.div>
        </div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl"
        >
          <Card className="rotate-2 border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
            
            <div className="rounded-2xl bg-white p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                
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

                <div className="w-fit rounded-lg bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-700">
                  4.9 ⭐
                </div>
              </div>
            </div>

            <div className="mt-6">
              <ProgressBar
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
        </motion.div>
      </div>
    </section>
  );
}