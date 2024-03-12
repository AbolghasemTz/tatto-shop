"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/testimonial.css"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { FaQuoteLeft } from "react-icons/fa";

function TestimonialSlider() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      loop={true}
      centeredSlides={true}
      pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
      navigation={true}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className=" md:h-screen flex items-center justify-center -mb-10">
          <div className="max-w-[900px] relative w-full py-10 overflow-hidden">
            <div className="flex items-center justify-center flex-col gap-y-6">
              <div className="md:w-36  md:h-36 w-24  h-24  rounded-full !impoertant">
                <Image className="rounded-full w-[100%] h-[100%] object-cover" src="/images/g-6.jpg" width={1000} height={1000} alt="" />
              </div>
              <p className="md:px-36 px-12 text-center md:text-sm text-xs text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio,
                doloribus assumenda nobis, vitae perferendis eos nemo cumque,
               
              </p>
              <FaQuoteLeft className="text-black" size={20} />

              <div className="flex flex-col items-center">
                <span className="font-semibold text-gray-700">
                  Marnie Lotter
                </span>
                <span className="text-gray-500">Client</span>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default TestimonialSlider;
