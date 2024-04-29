"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiLogin, CiShoppingBasket } from "react-icons/ci";
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
import { loguot } from "@/services/AuthServices";

function HeaderMobile({ isOpen, setIsOpen, menus }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);

  const { data } = useGetUser();
  const { user } = data || {};

  const cartLength = user?.cart?.products?.length;
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
  const logOutHandler = async () => {
    await loguot();

  };
  return (
    <div className="md:hidden flex justify-between items-center  px-5 w-full h-[10vh] login-dropdown">
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
        <Image src="/images/logo.png" width={90} height={46} alt="logo" />
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
              <FaUser className="text-white  ml-3" size={14} />
              <MdKeyboardArrowDown className="text-white" size={16} />
            </button>

            <div id="dropdown-content" className="absolute top-20 md:left-10 left-5 bg-white w-56  mx-auto  rounded-md shadow-lg   login-dropdown">
              {isOpenDropDown && (
                <div className="p-4   login-dropdown">
                  <div className="border-b border-gray-300 ">
                  <p className="">{user?.name}</p>
                    <p className="py-2 text-sm">
                    {toPersianNumbers(user?.phoneNumber)}
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
                      <Link className="text-sm" href="/profile/payments">
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
                      <button
                        className="text-sm "
                        onClick={logOutHandler}
                      >
                        خروج{" "}
                      </button>
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
            <CiLogin className="text-white rotate-180 ml-3" size={20} />
            <span className="text-white text-[12px]">ورود</span>
            <Modal
              open={isOpenModal}
              onClose={() => setIsOpenModal(false)}
              title="ورود"
            >
              <AuthPage onClose={() => setIsOpenModal(false)} />
            </Modal>
          </div>
        )}
          <div className="">
              <div className="login relative ">
                <Link href="/cart">
                  <CiShoppingBasket
                    size={25}
                    className="text-white mr-5 cursor-pointer"
                  />
                </Link>
                <span className="absolute -top-2 right-8 bg-white w-4 h-4 text-[12px] text-red-500 rounded-full flex justify-center items-center">
                  {cartLength ? cartLength : 0}
                </span>
              </div>
            </div>
      </div>
    </div>
  );
}

export default HeaderMobile;
