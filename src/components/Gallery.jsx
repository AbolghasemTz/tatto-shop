"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "@/common/Title";

function Gallery() {
  // animation
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const elements = [
      ".animate-six",
      ".animate-one",
      ".animate-two",
      ".animate-five",
      ".animate-three",
      ".animate-four",
    ];

    elements.forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "bottom bottom",
          end: "top top",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "slow(0.7,0.7,false)",
      });
    });
  });

  return (
    <div>
<Title className="my-8 text-center" title="گالری" />
      <div className=" grid md:grid-cols-4 md:grid-rows-2 gap-4 grid-cols-6 md:h-[400px] h-auto mb-16 px-10 ">
        <div
          className="animate-one md:row-span-2 md:col-auto  col-span-3 relative
       group duration-500 hover:duration-700 cursor-pointer group overflow-hidden
      "
        >
          <Image
            className="max-w-full h-full bg-center bg-cover bg-repeat"
            src="/images/g-1.jpg"
            width={319}
            height={415}
            alt="gallery"
          />
          <div className="absolute bg-black text-white -bottom-28 w-full md:h-28 h-16 flex justify-center md:pr-10 pr-5 flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
            <h3 className="font-semibold md:text-xl text-base">تتو دخترانه</h3>
            <p className="md:text-sm text-xs">طراحی تتو</p>
          </div>
        </div>
        <div
          className="animate-two md:col-auto  col-span-3 relative
       group duration-500 hover:duration-700 cursor-pointer group overflow-hidden "
        >
          <Image
            className="max-w-full h-full bg-center bg-cover bg-repeat"
            src="/images/g-5.jpg"
            width={319}
            height={415}
            alt="gallery"
          />
          <div className="absolute bg-black text-white -bottom-28 w-full md:h-20 h-12 flex justify-center md:pr-10 pr-5 flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
            <h3 className="font-semibold md:text-xl text-base">تتو دخترانه</h3>
            <p className="md:text-sm text-xs">طراحی تتو</p>
          </div>
        </div>
        <div
          className="animate-three md:col-start-2 md:row-start-2 md:col-auto  col-span-3 relative
       group duration-500 hover:duration-700 cursor-pointer group overflow-hidden"
        >
          <Image
            className="max-w-full h-full bg-center bg-cover bg-repeat"
            src="/images/g-4.jpg"
            width={319}
            height={415}
            alt="gallery"
          />
          <div className="absolute bg-black text-white -bottom-28 w-full md:h-20 h-12 flex justify-center md:pr-10 pr-5 flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
            <h3 className="font-semibold md:text-xl text-base">تتو دخترانه</h3>
            <p className="md:text-sm text-xs">طراحی تتو</p>
          </div>
        </div>
        <div
          className="animate-four md:row-span-2 md:col-start-3 md:row-start-1 md:col-auto  col-span-3 relative
       group duration-500 hover:duration-700 cursor-pointer group overflow-hidden"
        >
          <Image
            className="max-w-full h-full bg-center bg-cover bg-repeat"
            src="/images/g-3.jpg"
            width={319}
            height={415}
            alt="gallery"
          />
          <div className="absolute bg-black text-white -bottom-28 w-full md:h-28 h-16 flex justify-center md:pr-10 pr-5 flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
            <h3 className="font-semibold md:text-xl text-base">تتو دخترانه</h3>
            <p className="md:text-sm text-xs">طراحی تتو</p>
          </div>
        </div>
        <div
          className="animate-five md:col-start-4 md:row-start-1 md:col-auto  col-span-3 relative
       group duration-500 hover:duration-700 cursor-pointer group overflow-hidden"
        >
          <Image
            className="max-w-full h-full bg-center bg-cover bg-repeat"
            src="/images/g-2.jpg"
            width={319}
            height={415}
            alt="gallery"
          />
          <div className="absolute bg-black text-white -bottom-28 w-full md:h-20 h-12 flex justify-center md:pr-10 pr-5 flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
            <h3 className="font-semibold md:text-xl text-base">تتو دخترانه</h3>
            <p className="md:text-sm text-xs">طراحی تتو</p>
          </div>
        </div>
        <div
          className="animate-six md:col-start-4 md:col-auto col-span-3 relative
       group duration-500 hover:duration-700 cursor-pointer group overflow-hidden"
        >
          <Image
            className="max-w-full h-full bg-center bg-cover bg-repeat"
            src="/images/g-7.jpg"
            width={319}
            height={415}
            alt="gallery"
          />
          <div className="absolute bg-black text-white -bottom-28 w-full md:h-20 h-12 flex justify-center md:pr-10 pr-5 flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
            <h3 className="font-semibold md:text-xl text-base">تتو دخترانه</h3>
            <p className="md:text-sm text-xs">طراحی تتو</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
