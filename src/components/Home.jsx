"use client";


import { useEffect } from "react";
import { Link } from "react-router";
import { renderCanvas } from "@/components/ui/canvas";

import { Button } from "@/components/ui/button";

const Home = () => {
  useEffect(() => {
    renderCanvas();
  }, []);
  return (
    <section id="home">
      <div className="animation-delay-8 animate-fadeIn mt-20 flex  flex-col items-center justify-center px-4 text-center md:mt-20">
        <div className="z-10 mb-6 mt-10 sm:justify-center md:mb-4 md:mt-20">
          
        </div>

        <div className="mb-10 mt-4  md:mt-6">
          <div className="px-2">
            <div className="border-ali relative mx-auto h-full max-w-7xl border p-6 [mask-image:radial-gradient(800rem_96rem_at_center,white,transparent)] md:px-12 md:py-20">
              <h1 className="flex  select-none flex-col  px-3 py-2 text-center text-5xl font-semibold leading-none tracking-tight md:flex-col md:text-8xl lg:flex-row lg:text-8xl">
                A Heave For Your Desired Books and Resources
              </h1>
              <div className="flex items-center justify-center gap-1">
                <span className="relative flex h-3 w-3 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                <p className="text-xs text-green-500">Available Now</p>
              </div>
            </div>
          </div>

          <h1 className="mt-8 text-2xl md:text-2xl">
            Welcome to my Book Store! I&#39;m{" "}
            <span className="text-ali font-bold"> Muhammad Shahadath </span>
          </h1>

          <p className="md:text-md mx-auto mb-16 mt-2 max-w-2xl px-6 text-sm text-primary/60 sm:px-6 md:max-w-4xl md:px-20 lg:text-lg">
            I collect and share enchanting books for readers, and conjure design
            resources to empower book lovers.
          </p>
          <div className="flex justify-center gap-2">
            <Link href={"/dashboard"}>
              <Button variant="default" size="lg">
                Publish Your Book
              </Button>
            </Link>
            <Link href={"https://cal.com/aliimam/designali"} target="_blank">
              <Button variant="outline" size="lg">
                Book a Meeting
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <canvas
        className="bg-skin-base pointer-events-none absolute inset-0 mx-auto"
        id="canvas"
      ></canvas>
    </section>
  );
};

export default Home;

// this is a client component
