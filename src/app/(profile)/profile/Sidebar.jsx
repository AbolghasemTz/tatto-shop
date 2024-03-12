"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { GoHome } from "react-icons/go";
import { AiOutlineProfile } from "react-icons/ai";
import { BsBox2Heart } from "react-icons/bs";
import { IoExitOutline } from "react-icons/io5";
import { GrContactInfo } from "react-icons/gr";
import { loguot } from "@/services/AuthServices";
const routSidebar = [
  { name: "صفحه اصلی", href: "/", icon: <GoHome size={20} /> },
  { name: "پروفایل", href: "/profile", icon: <AiOutlineProfile size={20} /> },
  {
    name: "اطلاعات کاربری",
    href: "/profile/me",
    icon: <GrContactInfo size={20} />,
  },
  { name: "سفارشات", href: "/profile/payments", icon: <BsBox2Heart size={18} /> },
];
function Sidebar() {
  const router = useRouter();
  
  const logOutHandler = async () => {
    await loguot();
    router.replace("/");
  };
  return (
    <div className="">
      
      <div >
        <div className="bg-black md:mb-20 mb-4 rounded-lg md:justify-start flex justify-center">
          <Image src="/images/logo.png" width={144} height={76} alt="logo" />
        </div>
        <ul className="flex md:items-start items-center md:justify-center justify-around md:flex-col md:space-y-8">
          {routSidebar.map((item) => (
            <li
              key={item.name}
              className="flex md:flex-row flex-col items-center hover:text-cyan-800"
            >
              <Link
                className="md:text-base text-[10px] flex md:flex-row flex-col items-center "
                href={item.href}
              >
                <div className="ml-2   text-slate-800 md:pb-0 pb-2">{item.icon}</div>

                {item.name}
              </Link>
            </li>
          ))}

          <li className="flex md:flex-row flex-col  items-center">
            <IoExitOutline size={20} className="md:ml-2 text-slate-800" />
            <button
              className="md:text-base text-[10px] md:block "
              onClick={logOutHandler}
            >
              خروج{" "}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
