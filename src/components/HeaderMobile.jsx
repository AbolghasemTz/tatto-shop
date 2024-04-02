"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiLogin } from "react-icons/ci";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import Drawer from "./Drower";
import Modal from "../common/Modal";
import AuthPage from "../app/(user)/auth/page";
import { MdKeyboardArrowDown } from "react-icons/md";
import { toPersianNumbers } from "../utils/toPersianNumber";
import { useGetUser } from "../hooks/useAuth";
import gsap from "gsap";

function HeaderMobile({ isOpen, setIsOpen, menus }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);

  const { data } = useGetUser();
  const { user } = data || {};
  const toggleDropdown = () => {
    setIsOpenDropDown(!isOpenDropDown);
    if (!isOpenDropDown) {
      gsap.fromTo(
        "#dropdown-content",
        { y: -40, opacity: 0 },
        { duration: 0.5, y: 0, opacity: 1, ease: "power2.inOut" }
      );
    }
  };
  return (
    <div className="md:hidden flex justify-between items-center h-full w-full px-5   login-dropdown">
      <div className="">
        <button onClick={() => setIsOpen(true)}>
          <FaBarsStaggered size={24} className="text-white cursor-pointer" />
        </button>
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen} className="">
          <div
            onClick={() => setIsOpen(false)}
            className="text-white cursor-pointer absolute left-8 top-6"
          >
            <IoCloseOutline size={28} />
          </div>

          <ul className="pt-[20%] w-full  flex flex-col gap-y-5">
            {menus.map((menu, index) => (
              <li key={index} className="  text-white  mr-10">
                <Link className="" href={menu.href}>
                  {menu.name}
                </Link>
              </li>
            ))}
            <div className="flex justify-center  items-center gap-8  mt-8 text-white  login-dropdown">
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

      <div className="">
        <Image src="/images/logo.png" width={144} height={76} alt="logo" />
      </div>
      <div className="flex justify-center items-center ">
        {user ? (
          <div className="">
            <button
             
              onClick={toggleDropdown}
              href="/#"
              id=""
              className="login flex border-2 shadow-sm border-white p-1 rounded-lg overflow-hidden cursor-pointer"
            >
              <FaUser className="text-white  ml-3" size={18} />
              <MdKeyboardArrowDown className="text-white" size={20} />
            </button>

            <div id="dropdown-content" className="absolute top-20 md:left-10 left-5 bg-white w-56  mx-auto  rounded-md shadow-lg   login-dropdown">
              {isOpenDropDown && (
                <div className="p-4   login-dropdown">
                  <div className="border-b border-gray-300 ">
                    <p className="">امید تازیکی</p>
                    <p className="py-2 text-sm">
                      {toPersianNumbers("09354947002")}
                    </p>
                  </div>

                  <div className="flex flex-col justify-center  login-dropdown  pt-4">
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
          <div
            onClick={() => setIsOpenModal(true)}
            className="flex border-2 border-white p-1   login-dropdown rounded-lg overflow-hidden cursor-pointer"
          >
            <CiLogin className="text-white rotate-180 ml-3" size={24} />
            <span className="text-white text-sm">ورود</span>
            <Modal
              open={isOpenModal}
              onClose={() => setIsOpenModal(false)}
              title="ورود"
            >
              <AuthPage onClose={() => setIsOpenModal(false)} />
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
}

export default HeaderMobile;
