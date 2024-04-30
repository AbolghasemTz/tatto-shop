"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../app/globals.css";


function Slider() {

  return (
    <div className=" h-[90vh]  flex justify-center  items-center z-10 mb-6">
      <div className="flex md:flex-row flex-col-reverse justify-around items-center w-full max-h-screen ">
        <div className="md:w-[35%] w-[100%] px-5 text-[#b8b6b6]">
          <div className="md:text-3xl text-2xl font-bold title">
            <div className="flex items-center ">
              <h2 className="">تجهیزات تتو</h2>
              <Image
                src="/images/star.png"
                width={30}
                height={30}
                alt=""
                className="mr-2 "
              />
            </div>
            <h3 className="mt-3 md:text-2xl text-xl">را درب منزل تحویل بگیرید</h3>
          </div>
          <div className="pt-6 pb-6 leading-10 md:w-[100%] w-full">
            <p className="paragrap">
              تجهیزات تتو شامل دستگاه تتو، سوزن، رنگ، پدال، دستکش، ضدعفونی‌کننده
              و موارد دیگر است. این تجهیزات برای انجام تتو حرفه‌ای و بهداشتی
              بسیار اهمیت دارند.
            </p>
            <Link className="button btn btn_primary bg-[#1B6DC4] block md:w-40  text-center" href="/products">فروشگاه</Link>
          </div>
        </div>
        <div className="md:mb-0 mb-12 md:mt-0 mt-5 flex md:h-80 md:w-80 h-60 w-60 ">
          <Image
            src="/images/tatt.png"
            alt="tattoo shop"
            width={300}
            height={300}
            className="bg-white rounded-full"
          />
        </div>
      </div>

    </div>
  );
}

export default Slider;
