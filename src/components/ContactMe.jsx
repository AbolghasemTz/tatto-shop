"use client";
import Image from "next/image";
import React from "react";
import TextField from "../common/TextField";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ContactMe() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".animate-left", {
      scrollTrigger: {
        trigger: ".animate-left",
      },
      x: 40,
      opacity: 0,
      duration: 1,
      ease: "slow(0.7,0.7,false)",
    });
    gsap.from(".animate-right", {
      scrollTrigger: {
        trigger: ".animate-right",
      },
      x: -40,
      opacity: 0,
      duration: 1,
      ease: "slow(0.7,0.7,false)",
    });
  });

  return (
    <div className="md:px-24 px-10 my-24">
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
          <form action="" className="space-y-4 animate-right">
            <TextField label="نام" />
            <TextField label="ایمیل" />
            <TextField label="پیام" />
            <button className="btn btn_primary w-[30%]">ارسال پیام</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
