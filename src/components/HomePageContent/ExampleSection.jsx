"use client";

import { motion } from "framer-motion";
import React from "react";
import { Button } from "../ui/button";

function ExampleSection() {
  return (
    <section className="py-10 sm:py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-12 items-center">
          <motion.div
            className="bg-slate-800 p-6 md:p-6 shadow-4xl backdrop-blur bg-transparent bg-slate-200 mt-8 md:mt-0 hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src="/examplesection.png" width="300" height="300" />
          </motion.div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#333333] text-center mb-4 md:mb-6">
              Build whatever you want, seriously.
            </h2>
            <p className="text-base sm:text-lg text-slate-500 mb-6 md:mb-8">
              Because Tailwind is so low-level, it never encourages you to
              design the same site twice. Even with the same color palette and
              sizing scale, it's easy to build the same component with a
              completely different look in the next project.
            </p>
            <Button className="bg-[#b82025] hover:bg-red-400 text-white font-semibold h-10 md:h-12 px-4 md:px-6 rounded-lg transition-colors">
              Browse components
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExampleSection;
