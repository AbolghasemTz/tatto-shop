"use client";
import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaTelegram } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Footer() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".animate-logo", {
      scrollTrigger: {
        trigger: ".animate-logo",
      },
      x: 40,
      opacity: 0,
      duration: 1,
      ease: "slow(0.7,0.7,false)",
    });
    gsap.from(".animate-social", {
      scrollTrigger: {
        trigger: ".animate-social",
      },
      x: -40,
      opacity: 0,
      duration: 1,
      ease: "slow(0.7,0.7,false)",
    });
    gsap.from(".animate-menu", {
      scrollTrigger: {
        trigger: ".animate-menu",
      },
      x: 40,
      opacity: 0,
      duration: 1,
      ease: "slow(0.7,0.7,false)",
    });
  });
  return (
    <div className="bg-black h-[400px] text-white flex flex-col space-y-14 justify-center items-center">
      <div className="flex justify-center items-center animate-logo">
        <Image src="/images/logo.png" width={144} height={76} alt="logo" />
      </div>

      <div className="flex justify-center items-center md:gap-x-8 gap-x-8 text-white animate-social">
        <div>
          <FaFacebookF
            className="text-white cursor-pointer hover:opacity-80 transition-opacity duration-300 ease-in-out"
            size={28}
          />
        </div>
        <div>
          <FaInstagram
            className="text-white cursor-pointer hover:opacity-80 transition-opacity duration-300 ease-in-out"
            size={28}
          />
        </div>
        <div>
          <FaTelegram
            className="text-white cursor-pointer hover:opacity-80 transition-opacity duration-300 ease-in-out"
            size={28}
          />
        </div>
      </div>
      <ul className="flex justify-center items-center md:gap-x-14 gap-x-8 animate-menu">
        <li>خانه</li>
        <li>فروشگاه</li>
        <li>تماس با ما</li>
        <li>گالری</li>
      </ul>
    </div>
  );
}

export default Footer;
