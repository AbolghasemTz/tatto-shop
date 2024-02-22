"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FaLongArrowAltLeft } from "react-icons/fa";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export default function Slider() {
  useGSAP(() => {
    gsap.from(".animate-down", {
      opacity: 0.4,
      y: -8,
      duration: 1,
      repeat: -1,
      yoyo: true,
    });

    gsap.from(".product-img", {
      delay: 4,
      opacity: 0,
      y: -800,
      ease: "expo.inOut",
    });

    const tl = gsap.timeline({ defaults: { opacity: 0, stagger: 0.4 } });
  
    tl.from(".animate-text-one", {
      delay: 2.2,

      y: 50,
      ease: "expo.inOut",
    });
    tl.from(".animate-text-four", {
      opacity: 0,
      y: 100,
      delay:1
    });
  
  }, {});


  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full ">
            <div className="w-full">
              <Image
                className="object-cover"
                src="/images/slide2.jpg"
                width={1000}
                height={500}
                alt="slider"
              />
            </div>
            <div className="w-[70%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <p className="animate-text-one text-white tracking-[10px]  font-bold  md:text-[240px] text-[50px] font-[poppins] ">
                Tattoo
              </p>
            </div>
            <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 translate-y-16">
              <div className="animate-text-four bg-white py-1 px-3 rounded-md cursor-pointer text-black flex items-center gap-4 ">
                <Link href="/">تتو ها</Link>
                <FaLongArrowAltLeft />
              </div>
            </div>
            <div className="  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/images/tattoo-matchiin.png"
                width={900}
                height={900}
                alt="tatto-matchin"
                className=" product-img"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full ">
            <div className="w-full">
              <Image
                className="object-cover"
                src="/images/slide1.jpg"
                width={1000}
                height={500}
                alt="slider"
              />
            </div>
            <div className="w-[70%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <p className="animate-text-one text-white  md:text-2xl text-sm ">
                مطمئناً. این قطب علاقه‌ای می‌تواند باشد. تتوها داستان‌های خودشان
                را دارند. تتوها می‌توانند یک اظهارنامه شخصی باشند..
              </p>
            </div>
            <div className="  absolute bottom-1/3 left-1/2 transform -translate-x-1/2 translate-y-20">
              <div className= "animate-text-four bg-white py-1 px-3 rounded-md cursor-pointer text-black flex items-center gap-4">
                <Link className="" href="/">
                  تتو ها
                </Link>
                <FaLongArrowAltLeft />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
     
    </div>
  );
}
