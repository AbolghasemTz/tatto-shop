"use client";
import React from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { TextPlugin } from "gsap/TextPlugin";

// animation
function Slider() {
  useGSAP(() => {
    gsap.from(".animate-gsap", { duration: 1, y: -200, opacity: 0 });
    gsap.from(".animate-gsap-desc", { delay: 0.8, duration: 1, y: -200, opacity: 0 });
    gsap.from(".animate-gsap-image", { delay: 1, duration: 1, y: -200, opacity: 0 });
    gsap.registerPlugin(TextPlugin);
     gsap.from("#text-container", {
      delay: 1.4,
      duration: 1,
      opacity: 0,
      y: -100,
      stagger: 0.5,
      
      ease: "power2.inOut",
    });
  });


  return (
    <div className="bg-[#272B35] h-screen animate-gsap  flex justify-center items-center  z-[20]">
      <div className="w-[80%] flex justify-around items-center md:flex-row flex-col-reverse  z-[20]">
        <div className="relative">
          <h1
            id="text-container"
            className="absolute -right-72  top-10  text-[#32AB8E] opacity-50 -rotate-90 text-[50px]  font-extrabold font-mono"
          >
            تـــتـــو
          </h1>
          <div className="animate-gsap-desc flex flex-col justify-center">
            <p className="text-white md:text-4xl text-2xl font-semibold tracking-wider md:leading-10">
              با کیفیت ترین تجهیزات تتو,
              <br />
              <br />
              شروع کن
            </p>
            <Link href="/products" className="mt-10 block btn btn_primary w-36 text-center">
              فروشگاه
            </Link>
          </div>
        </div>
        <div className="animate-gsap-image bg-white rounded-full md:w-[350px] w-[250px] mt-0 mb-10 md:mt-0">
          <Image className="object-cover" src="/images/tatt.png" width={400} height={400} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Slider;