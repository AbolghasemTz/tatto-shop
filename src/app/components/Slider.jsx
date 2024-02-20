"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

import { FaLongArrowAltLeft } from "react-icons/fa";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import Link from "next/link";
export default function Slider() {
  useGSAP(() => {
    gsap.from(".animate-down", {
      opacity: 0.4,
      y: -8,
      duration: 1,
      repeat: -1,
      yoyo: true,
    });
    const tl = gsap.timeline({ defaults: { opacity: 0, stagger: 0.4 } });
    tl.from(".animate-text-one", {
      y: -100,
      
    });
    tl.from(".animate-text-four", {
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
          delay: 5500,
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
              <p className="animate-text-one text-white  md:text-2xl text-sm ">
              تتوها می‌توانند برای همیشه در ذهن ما
                ماندگار شوند تتوها می‌توانند نشانگر ارتباط عمیق با مفهوم یا
                ایده‌ای ویژه باشند.
              </p>
            </div>
            <div className="animate-text-four bg-white py-1 px-3 rounded-md cursor-pointer text-black flex items-center gap-4 absolute bottom-1/3 left-1/2 transform -translate-x-1/2 translate-y-16">
              <Link href="/">تتو ها</Link>
              <FaLongArrowAltLeft />
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
                مطمئناً. این قطب علاقه‌ای می‌تواند باشد. تتوها داستان‌های
                خودشان را دارند. تتوها می‌توانند یک اظهارنامه شخصی
                باشند..
              </p>
            </div>
            <div className=" animate-text-four absolute bottom-1/3 left-1/2 transform -translate-x-1/2 translate-y-14">
              <div className="bg-white py-1 px-3 rounded-md cursor-pointer text-black flex items-center gap-4">
                <Link className="" href="/">
                  تتو ها
                </Link>
                <FaLongArrowAltLeft />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="  absolute cursor-pointer bottom-0 left-1/2  transform -translate-x-1/2 -translate-y-1/2 md:block hidden  z-[99]">
        <Image
          className="animate-down"
          src="/images/down-page.png"
          width={20}
          height={20}
          alt="down"
        />
      </div>
    </div>
  );
}
