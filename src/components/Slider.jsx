"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "../app/globals.css";


function Slider() {

  return (
    <div className=" h-[calc(100vh-6rem)]  flex justify-center  items-center z-10">
      <div className="flex md:flex-row flex-col-reverse justify-around items-center   w-full ">
        <div className="md:w-[40%] w-[90%] text-[#b8b6b6]">
          <div className="text-3xl font-bold title">
            <div className="flex items-center ">
              <h2 className="">تجهیزات تتو</h2>
              <Image
                src="/images/star.png"
                width={30}
                height={30}
                alt=""
                className="mr-2 z-50"
              />
            </div>
            <h3 className="mt-3 ">را درب منزل تحویل بگیرید</h3>
          </div>
          <div className="pt-6 b-6 leading-10 md:w-[100%] w-full">
            <p className="paragrap">
              تجهیزات تتو شامل دستگاه تتو، سوزن، رنگ، پدال، دستکش، ضدعفونی‌کننده
              و موارد دیگر است. این تجهیزات برای انجام تتو حرفه‌ای و بهداشتی
              بسیار اهمیت دارند.
            </p>
            <Link  className="button btn btn_primary bg-[#1B6DC4] block w-40 text-center" href="/products">فروشگاه</Link>
          </div>
        </div>
        <div className="md:mb-0 mb-6 flex self-center  ">
          <Image
            src="/images/tatt.png"
            width={300}
            height={300}
            alt="tattoo shop"
            className="bg-white  rounded-full   "
          />
        </div>
      </div>
  
    </div>
  );
}

export default Slider;
