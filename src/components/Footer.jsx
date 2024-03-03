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

    gsap.from(".animate-logo-footer", {
      scrollTrigger: {
        trigger: ".animate-logo-footer",
      },
      x: 40,
      ease: "slow(0.7,0.7,false)",
      opacity: 0,
      duration: 1,
    });
    gsap.from(".animate-social-footer", {
      scrollTrigger: {
        trigger: ".animate-social-footer",
      },
      x: -40,
      ease: "slow(0.7,0.7,false)",
      opacity: 0,
      duration: 1,
    });
    gsap.from(".animate-menu-footer", {
      scrollTrigger: {
        trigger: ".animate-menu-footer",
      },
      x: 40,
      ease: "slow(0.7,0.7,false)",
      opacity: 0,
      duration: 1,
    });
  });
  return (
    <div className="bg-black h-[400px] text-white flex flex-col space-y-14 justify-center items-center">
      <div className="flex justify-center items-center animate-logo-footer">
        <Image src="/images/logo.png" width={144} height={76} alt="logo" />
      </div>

      <div className="flex justify-center items-center md:gap-x-8 gap-x-8 text-white animate-social-footer">
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
      <ul className="flex justify-center items-center md:gap-x-14 gap-x-8 animate-menu-footer">
        <li>خانه</li>
        <li>فروشگاه</li>
        <li>تماس با ما</li>
        <li>گالری</li>
      </ul>
    </div>
  );
}

export default Footer;
