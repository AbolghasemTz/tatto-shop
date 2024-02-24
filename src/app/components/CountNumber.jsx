"use client";
import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function CountNumber() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".animate-text", {
      scrollTrigger: {
        trigger: ".animate-text",
       
      },

      opacity: 0,
      scale: 0,
      rotation: 720,
    });
  });
  return (
    <div className="relative w-full md:h-screen mb-10  overflow-hidden ">
      <Image
        className="absolute top-0 h-[100%] w-[100%] object-cover "
        src="/images/parallax.png"
        alt="image1"
        width={1800}
        height={400}
      />
      <Image
        className=" h-[100%] w-[100%] overflow-hidden object-fill  "
        src="/images/g-8.jpg"
        alt="image1"
        width={1800}
        height={400}
      />
      <h3 className="animate-text absolute left-1/2 top-1/2 transform -translate-x-1/2  md:text-5xl tracking-widest text-2xl text-white ">
        تتو های زیبا
      </h3>
    </div>
  );
}

export default CountNumber;
