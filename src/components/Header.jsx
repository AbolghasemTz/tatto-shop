"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiLogin } from "react-icons/ci";
import { FaUser } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { CiShoppingBasket } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Drawer from "./Drower";
import { toPersianNumbers } from "../utils/toPersianNumber";
import HeaderMobile from "./HeaderMobile";
import AuthPage from "../app/(user)/auth/page";
import Modal from "../common/Modal";

import { useGetUser } from "../hooks/useAuth";
import { usePathname } from "next/navigation";
const menus = [
  { name: "خانه", href: "/" },
  { name: "فروشگاه", href: "/products" },
  { name: "گالری", href: "/gallery" },
  { name: "درباره ما", href: "/about" },
  { name: "تماس با ما", href: "/contact" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const { data } = useGetUser();
  const { user } = data?.data || {};
  const cartLength = user?.cart?.products?.length;
  const pathname = usePathname();

  const toggleDropdown = () => {
    setIsOpenDropDown(!isOpenDropDown);
    if (!isOpenDropDown) {
      gsap.fromTo(
        "#dropdown-content",
        { y: -80, opacity: 0 },
        { duration: 0.5, y: 0, opacity: 1, ease: "power2.inOut" }
      );
    }
  };
  return (
    <div className="bg-[#272B35]  h-20 z-[99] ">
      <div className=" md:flex justify-between items-center h-full w-full px-10 hidden z-[99]">
        <div className="z-[99] ">
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
          {user && user ? (
            <div className="z-[99]">
              <button
                onClick={toggleDropdown}
                href="/#"
                className=" login flex border-2 shadow-sm border-white p-1 rounded-lg overflow-hidden cursor-pointer"
              >
                <FaUser className="text-white  ml-3" size={18} />
                <MdKeyboardArrowDown className="text-white" size={20} />
              </button>

              <div
                id="dropdown-content"
                className="absolute top-20 left-10 bg-white w-56  mx-auto  rounded-md shadow-lg z-[99]"
              >
                {isOpenDropDown && (
                  <div className="p-4 ">
                    <div className="border-b border-gray-300 ">
                      <p className="">{user?.name}</p>
                      <p className="py-2 text-sm">
                        {toPersianNumbers(user?.phoneNumber)}
                      </p>
                    </div>

                    <div className="flex flex-col justify-center  pt-4">
                      <div className="flex items-center  hover:bg-gray-100 py-2  rounded-md ">
                        <Image
                          className="ml-2 cursor-pointer"
                          src="/images/home.svg"
                          width={18}
                          height={18}
                          alt="icon"
                        />
                        <Link className="text-sm" href="/profile">
                          پروفایل شما
                        </Link>
                      </div>
                      <div className="flex items-center hover:bg-gray-100 py-2   rounded-md ">
                        <Image
                          className="ml-2 cursor-pointer"
                          src="/images/order.svg"
                          width={18}
                          height={18}
                          alt="icon"
                        />
                        <Link className="text-sm" href="">
                          سفارشات
                        </Link>
                      </div>
                      <div className="flex items-center  hover:bg-gray-100 hover:text-[#f66868] py-2  rounded-md ">
                        <Image
                          className="ml-2 cursor-pointer"
                          src="/images/logout.svg"
                          width={18}
                          height={18}
                          alt="icon"
                        />
                        <Link className="text-sm" href="">
                          خروج
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
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
          )}

          <div>
            {pathname === "/" ? (
              <button className="login" onClick={() => setIsOpen(true)}>
                <FaBarsStaggered
                  size={24}
                  className="text-white mr-5 cursor-pointer"
                />
              </button>
            ) : (
              <div className="login relative">
                <Link href="/cart">
                  <CiShoppingBasket
                    size={32}
                    className="text-white mr-5 cursor-pointer"
                  />
                </Link>
                <span className="absolute top-0 right-10 bg-white w-5 h-5 text-sm text-black rounded-full flex justify-center items-center">
                  {cartLength}
                </span>
              </div>
            )}

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <div className="mt-[20%] px-6 ">
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
