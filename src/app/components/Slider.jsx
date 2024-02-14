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

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import Link from "next/link";
export default function App() {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 2500,
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
            <div className="w-[200px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <p className="text-white text-2xl ">
                <span>با کیفیت</span>
                <br />
                <span className="py-5 inline-block"> ترین</span>
                <br />
                <span>جوهرها</span>
              </p>
            </div>
            <div className=" bg-white py-1 px-3 rounded-md cursor-pointer text-black flex items-center gap-4 absolute bottom-1/3 left-1/2 transform -translate-x-1/2 translate-y-16">
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
            <div className="w-[200px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <p className="text-white text-2xl ">
                <span>با کیفیت</span>
                <br />
                <span className="py-5 inline-block"> ترین</span>
                <br />
                <span>جوهرها</span>
              </p>
            </div>
            <div className=" bg-white py-1 px-3 rounded-md cursor-pointer text-black flex items-center gap-4 absolute bottom-1/3 left-1/2 transform -translate-x-1/2 translate-y-16">
              <Link href="/">تتو ها</Link>
              <FaLongArrowAltLeft />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute cursor-pointer bottom-0 left-1/2  transform -translate-x-1/2 -translate-y-1/2 md:block hidden  z-[99]">
        <Image src="/images/down-page.png" width={20} height={20} alt="down" />
      </div>
    </div>
  );
}
