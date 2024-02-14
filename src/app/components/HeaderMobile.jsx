"use client";

import Image from "next/image";
import Link from "next/link";
import { CiLogin } from "react-icons/ci";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

import Drawer from "./Drower";

function HeaderMobile({ isOpen, setIsOpen, menus }) {
  return (
    <div className="md:hidden flex justify-between items-center h-full w-full px-5  z-[99]">
      <div className="z-[99]">
        <button onClick={() => setIsOpen(true)}>
          <FaBarsStaggered size={24} className="text-white cursor-pointer" />
        </button>
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen} className="">
        <div onClick={() => setIsOpen(false)} className="text-white cursor-pointer absolute left-8 top-6">
            <IoCloseOutline size={28}/>
            </div>

          <ul className="pt-[20%] w-full  flex flex-col gap-y-5">
            {menus.map((menu, index) => (
              <li key={index} className="  text-white  mr-10">
                <Link className="" href={menu.href}>
                  {menu.name}
                </Link>
              </li>
            ))}
            <div className="flex justify-center  items-center gap-8  mt-8 text-white z-[99]">
              <div>
                <FaFacebookF
                  className="text-white cursor-pointer hover:opacity-80 transition-opacity duration-300 ease-in-out"
                  size={24}
                />
              </div>
              <div>
                <FaInstagram
                  className="text-white cursor-pointer hover:opacity-80 transition-opacity duration-300 ease-in-out"
                  size={24}
                />
              </div>
              <div>
                <FaTelegram
                  className="text-white cursor-pointer hover:opacity-80 transition-opacity duration-300 ease-in-out"
                  size={24}
                />
              </div>
            </div>
          </ul>
          
        </Drawer>
      </div>

      <div className="z-[90]">
        <Image src="/images/logo.png" width={144} height={76} alt="logo" />
      </div>
      <div className="flex justify-center items-center z-[99]">
        <div className="flex border-2 border-white p-1 rounded-lg overflow-hidden cursor-pointer">
          <CiLogin className="text-white rotate-180 ml-3" size={24} />
          <span className="text-white text-sm">ورود</span>
        </div>
      </div>
    </div>
  );
}

export default HeaderMobile;
