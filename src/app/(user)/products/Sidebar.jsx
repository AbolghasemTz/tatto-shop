"use client";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
function Sidebar() {
  const [caategoryOpen, setCategoryOpen] = useState(true);
  const [sortOpen, setSortOpen] = useState(false);
  const [priceFilterOpen, setPriceFilterOpen] = useState(false);
  return (
    <div className="">
      <div className="">
        <div
          onClick={() => setCategoryOpen(!caategoryOpen)}
          className="flex justify-between items-center  cursor-pointer "
        >
          <h3 className="font-semibold my-8">دسته بندی محصولات</h3>
          <MdKeyboardArrowDown
            className={`text-white transition-transform duration-300 cursor-pointer ${
              caategoryOpen ? "rotate-180" : "rotate-0"
            }`}
            size={25}
          />
        </div>
        <div className="">
          {caategoryOpen && (
            <ul className="space-y-4 bg-white rounded-md text-black px-2 py-3 ">
              <li>دستگاه تتو</li>
              <li>سوزن تتو</li>
              <li>جوهر تتو</li>
            </ul>
          )}
        </div>
      </div>
      <div className="">
        <div
          onClick={() => setSortOpen(!sortOpen)}
          className="flex justify-between items-center  cursor-pointer "
        >
          <h3 className="font-semibold my-8 ">مرتب سازی</h3>
          <MdKeyboardArrowDown
            className={`text-white transition-transform duration-300 cursor-pointer ${
              sortOpen ? "rotate-180" : "rotate-0"
            }`}
            size={25}
          />
        </div>
        {sortOpen && (
          <ul className="space-y-4 bg-white rounded-md text-black px-2 py-3 ">
            <li>جدید ترین</li>
            <li>قدیمی ترین</li>
          </ul>
        )}
      </div>
      <div className="">
      <div
          onClick={() => setPriceFilterOpen(!priceFilterOpen)}
          className="flex justify-between items-center  cursor-pointer "
        >
        <h3 className="font-semibold my-8 ">فیلتر قیمت</h3>
        <MdKeyboardArrowDown
            className={`text-white transition-transform duration-300 cursor-pointer ${
              priceFilterOpen ? "rotate-180" : "rotate-0"
            }`}
            size={25}
          />
        </div>
        {priceFilterOpen && (
          <ul className="space-y-4 bg-white rounded-md text-black px-2 py-3 ">
          <li>ارزان ترین</li>
          <li>گران ترین</li>
        </ul>
         )}
      </div>
    </div>
  );
}

export default Sidebar;
