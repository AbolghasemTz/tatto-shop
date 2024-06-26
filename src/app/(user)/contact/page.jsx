"use client";
import Image from "next/image";
import React from "react";

import TextField from "@/common/TextField";

function Contact() {

  return (
    <div className="md:px-24 px-10 py-24 bg-gray-50 z-10">
      <div className="grid grid-cols-2 gap-2">
        <div className="md:col-span-1 col-span-2 ">
          <Image
            src="/images/studio.jpg"
            width={500}
            height={600}
            alt="studio"
            className="rounded-md shadow-sm object-cover animate-left"
          />
        </div>
        <div className="md:col-span-1 col-span-2 ">
          <form action="" className="space-y-4 animate-right z-10">
            <TextField label="نام" />
            <TextField label="ایمیل" />
            <TextField label="پیام" />
            <button className="btn btn_primary w-[30%] bg-[#16579d]">ارسال پیام</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
