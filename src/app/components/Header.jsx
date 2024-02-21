"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiLogin } from "react-icons/ci";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Drawer from "./Drower";
import { toPersianNumbers } from "../utils/toPersianNumber";
import HeaderMobile from "./HeaderMobile";
import AuthPage from "../auth/page";
import Modal from "../common/Modal";
const menus = [
  { name: "خانه", href: "/" },
  { name: "فروشگاه", href: "/shop" },
  { name: "گالری", href: "/gallery" },
  { name: "درباره ما", href: "/about" },
  { name: "تماس با ما", href: "/contact" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({ default: { duration: 1 } });
    tl.from(".logo", { delay: 1, opacity: 0, x: 20, ease: "expo.inOut" });
    tl.from(".login", { delay: 0.2, opacity: 0, x: -20, ease: "expo.inOut" });
    tl.from(".link", { delay: 1.2, opacity: 0, y: -20, ease: "power3.inOut" });
  });
  return (
    <div className="bg-slate-800  h-20 z-[99] ">
      <div className="md:flex justify-between items-center h-full w-full px-10 hidden z-[99]">
        <div className="z-[99] logo">
          <Image src="/images/logo.png" width={144} height={76} alt="logo" />
        </div>
        <ul className="flex z-[99]">
          {menus.map((menu, index) => (
            <li key={index} className="mx-4 font-semibold text-white relative">
              <Link className="hover-underline-animation link" href={menu.href}>
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center z-[99]">
          <div className="">
            <button
              onClick={() => setIsOpenModal(true)}
              href="/auth"
              className="login flex border-2 shadow-sm border-white p-1 rounded-lg overflow-hidden cursor-pointer"
            >
              <CiLogin className="text-white rotate-180 ml-3" size={28} />
              <span className="text-white">ورود</span>
            </button>
            <Modal
              open={isOpenModal}
              onClose={() => setIsOpenModal(false)}
              title="  ثبت نام / ورود"
            >
              <AuthPage onClose={() => setIsOpenModal(false)} />
            </Modal>
          </div>

          <div>
            <button className="login" onClick={() => setIsOpen(true)}>
              <FaBarsStaggered
                size={24}
                className="text-white mr-5 cursor-pointer"
              />
            </button>
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <div className="mt-[20%] px-6">
                <div className="mb-4 ">
                  <Image
                    src="/images/logo.png"
                    width={144}
                    height={76}
                    alt="logo"
                  />
                </div>
                <p className="text-white mb-4 leading-8">
                  با تتو, هر جزعی از زندگی خودت را میسازی .هویت تو در هر رنگ و
                  نقش نمایان میشود.
                </p>
                <div className="text-white">
                  <p> ایران , گرگان</p>
                  <p className="ml-4  my-2">
                    موبایل:{" "}
                    <span className="inline-block mr-2">
                      {toPersianNumbers("0996-002-6303")}
                    </span>
                  </p>
                  <p className="ml-4 ">
                    {" "}
                    ایمیل:
                    <span className="inline-block mr-2 mb-16">
                      saratattoo@gmail.com
                    </span>
                  </p>
                </div>
                <div className="flex justify-center items-center gap-x-8 text-white">
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
              </div>
            </Drawer>
          </div>
        </div>
      </div>
      <HeaderMobile isOpen={isOpen} setIsOpen={setIsOpen} menus={menus} />
    </div>
  );
}

export default Header;
