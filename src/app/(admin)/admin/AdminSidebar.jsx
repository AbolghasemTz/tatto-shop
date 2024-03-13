"use client";
import React, { useState } from "react";
import Link from "next/link";
import { loguot } from "@/services/AuthServices";
import { BsArrowRightShort, BsSearch } from "react-icons/bs";
import { PiTextTThin } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { FiUsers } from "react-icons/fi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { CiShoppingBasket } from "react-icons/ci";
import { MdOutlineLocalOffer } from "react-icons/md";
import { MdOutlineCategory } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
function AdminSideBar() {
  const [open, setOpen] = useState(true);
  const logOutHandler = async () => {
    await loguot();
    //  localStorage.removeItem("userInfo");
    //  localStorage.removeItem("cartItems");
    //  localStorage.removeItem("token");
    document.location.href = "/";
  };
  return (
    <div className="flex ">
      <div className="">
        <div
          className={`bg-slate-800  rounded-xl  h-[calc(100vh-2rem)]  text-white pt-8 pb-3 sticky    ${
            !open ? "w-72" : "md:w-14"
          }`}
        >
          <BsArrowRightShort
            onClick={() => setOpen(!open)}
            className={`bg-white   text-slate-800 cursor-pointer text-3xl rounded-full
      absolute -left-3 top-9 border border-slate-800 ${!open && "-rotate-180"}
      `}
          />

          <div className="flex justify-stert items-center mb-6  mx-4 ">
            <PiTextTThin className=" cursor-pointer block " size={21} />
            {!open && (
              <h1 className=" pr-8 text-white origin-left font-semibold  text-xl mt-1">
                سارا تتو
              </h1>
            )}
          </div>

          <div
            className={`flex flex-row-reverse items-center rounded-md bg-gray-50 px-4 py-2 mx-4 mb-5 ${
              open && "hidden"
            }`}
          >
            <input
              type="text"
              className={`text-base bg-transparent w-full text-white focus:outline-none`}
            />
            <BsSearch
              className={`text-gray-800 text-xl block  rounded-md  cursor-pointer `}
            />
          </div>
          <Link
            href="/"
            className="flex justify-stert items-center mb-6  mx-4 "
          >
            <GoHome className=" cursor-pointer block " size={21} />
            {!open && (
              <span className=" pr-8 text-white origin-left font-semibold  text-base mt-1">
                صفحه اصلی
              </span>
            )}
            <hr />
          </Link>
          <Link
            href="/admin"
            className="flex justify-stert items-center mb-6  mx-4 "
          >
            <RxDashboard className=" cursor-pointer block " size={20} />
            {!open && (
              <span className=" pr-8 text-white origin-left font-semibold  text-base mt-1">
                داشبورد
              </span>
            )}
          </Link>

          <Link
            href="/admin/users"
            className="flex justify-stert items-center mb-6  mx-4 "
          >
            <FiUsers className=" cursor-pointer block " size={20} />
            {!open && (
              <span className=" pr-8 text-white origin-left font-medium  text-xl mt-1">
                کاربران
              </span>
            )}
          </Link>
          <Link
            href="/admin/products"
            className="flex justify-stert items-center mb-6  mx-4 "
          >
            <MdOutlineProductionQuantityLimits
              className=" cursor-pointer block "
              size={20}
            />
            {!open && (
              <span className=" pr-8 text-white origin-left font-semibold  text-base mt-1">
                محصولات
              </span>
            )}
          </Link>
          <Link
            href="/admin/categories"
            className="flex justify-stert items-center mb-6  mx-4 "
          >
            <MdOutlineCategory className=" cursor-pointer block " size={20} />
            {!open && (
              <span className=" pr-8 text-white origin-left font-semibold  text-base mt-1">
                دسته بندی
              </span>
            )}
          </Link>
          <Link
            href="/admin/payments"
            className="flex justify-stert items-center mb-6  mx-4 "
          >
            <CiShoppingBasket className=" cursor-pointer block " size={20} />
            {!open && (
              <span className=" pr-8 text-white origin-left font-semibold  text-base mt-1">
                سفارشات
              </span>
            )}
          </Link>
          <Link
            href="/admin/coupons"
            className="flex justify-stert items-center mb-6  mx-4 "
          >
            <MdOutlineLocalOffer className=" cursor-pointer block " size={20} />
            {!open && (
              <span className=" pr-8 text-white origin-left font-semibold  text-base mt-1">
                کد تخفیف
              </span>
            )}
          </Link>
          <div
            onClick={logOutHandler}
            className="flex justify-stert items-center mb-6  mx-4 "
          >
            <CiLogout className=" cursor-pointer block " size={20} />
            {!open && (
              <button className="pr-8 text-white origin-left font-semibold  text-base mt-1">
                خروج از حساب کاربری
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSideBar;
