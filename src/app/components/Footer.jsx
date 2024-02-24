import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-black h-[400px] text-white flex flex-col space-y-14 justify-center items-center">
      <div className="flex justify-center items-center ">
        <Image src="/images/logo.png" width={144} height={76} alt="logo" />
      </div>

      <div className="flex justify-center items-center md:gap-x-8 gap-x-8 text-white">
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
      <ul className="flex justify-center items-center md:gap-x-14 gap-x-8">
        <li>خانه</li>
        <li>فروشگاه</li>
        <li>تماس با ما</li>
        <li>گالری</li>
      </ul>
    </div>
  );
}

export default Footer;
