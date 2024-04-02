"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiLogin } from "react-icons/ci";
import { FaUser } from "react-icons/fa6";

import { CiShoppingBasket } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { gsap } from "gsap";
import { toPersianNumbers } from "../utils/toPersianNumber";
import HeaderMobile from "./HeaderMobile";
import AuthPage from "../app/(user)/auth/page";
import Modal from "../common/Modal";

import { useGetUser } from "../hooks/useAuth";
import { useRouter } from "next/navigation";
import { loguot } from "@/services/AuthServices";
const menus = [
  { name: "خانه", href: "/" },
  { name: "فروشگاه", href: "/products" },
  { name: "تماس با ما", href: "/contact" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const { data, isLoading } = useGetUser();
  const { user } = data || {};
  const cartLength = user?.cart?.products?.length;

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


  const logOutHandler = async () => {
    await loguot();
    
  };
  return (
    <div className="  login-dropdown 0">
      <div className="h-20 ">
        <div
          className={` md:flex justify-between items-center h-full w-full px-10   login-dropdown  hidden ${isLoading ? "blur-sm opacity-70" : "opacity-100 blur-0  "
            }`}
        >
          <div className=" ">
            <Image src="/images/logo.png" width={144} height={76} alt="logo" />
          </div>
          <ul className="flex ">
            {menus.map((menu, index) => (
              <li
                key={index}
                className="mx-4 font-semibold text-white relative"
              >
                <Link
                  className="hover-underline-animation link"
                  href={menu.href}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-center items-center ">
            {user ? (
              <div className="">
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
                  className="login-dropdown absolute top-20 left-10 bg-white w-56  mx-auto  rounded-md shadow-lg "
                >

                  {isOpenDropDown && (
                    <div className="p-4  login-dropdown">
                      <div className="border-b border-gray-300 ">
                        <p className="">{user?.name}</p>
                        <p className="py-2 text-sm">
                          {toPersianNumbers(user?.phoneNumber)}
                        </p>
                      </div>

                      <div className="flex flex-col justify-center  login-dropdown pt-4">
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
              <div className=" login-dropdown">
                <button
                  onClick={() => setIsOpenModal(true)}
                  href="#"
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

            <div className="">
              <div className="login relative ">
                <Link href="/cart">
                  <CiShoppingBasket
                    size={32}
                    className="text-white mr-5 cursor-pointer"
                  />
                </Link>
                <span className="absolute top-0 right-10 bg-white w-5 h-5 text-sm text-black rounded-full flex justify-center items-center">
                  {cartLength ? cartLength : 0}
                </span>
              </div>
            </div>
          </div>
        </div>
        <HeaderMobile isOpen={isOpen} setIsOpen={setIsOpen} menus={menus} />
      </div>
    </div>
  );
}

export default Header;
