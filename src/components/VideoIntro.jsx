import TextField from "@/common/TextField";
import Image from "next/image";
import React from "react";

function VideoIntro() {
  return (
    <div className="md:w-[90%] w-full mx-auto md:h-80 h-64 my-10 opacity-85 bg-[#1B6DC4]  md:rounded-md flex justify-center items-center flex-col">
      <h3 className="text-center md:font-bold font-semibold md:text-2xl text-xl text-white pb-10 md:px:0 px-10">
        ثبت نام کنید و تا 70 درصد تخفیف بگیرید
      </h3>
      <div className="flex items-center  ">
        <input type="email"  className="md:w-80 w-64 outline-none border-none rounded-full p-2 placeholder:text-sm placeholder:px-2" placeholder="ایمیل خود را وارد کنید.."/>
        <button className="mr-4 bg-[#00d0ff] py-2 px-6  text-white flex justify-center items-center rounded-full border-none">ارسال</button>
      </div>
    </div>
  );
}

export default VideoIntro;
