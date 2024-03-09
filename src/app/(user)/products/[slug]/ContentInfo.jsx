import React from "react";
import Image from "next/image";
import AddToCart from "./AddToCart";
import { toPersianNumberWithComma } from "@/utils/toPersianNumber";

function ContentInfo({ product }) {
  return (
    <div className="flex flex-col xl:flex-row md:bg-white rounded-lg  md:p-4">
      <div className=" flex md:flex-row-reverse flex-col justify-between w-full items-center gap-y-9 md:flex-auto bg-blue- lg:flex-row md:justify-start md:items-start">
        <div className="md:w-[40%] w-[80%] rounded-md h-auto">
          <Image
            className="w-[100%] h-auto rounded-md object-cover"
            src="/images/g-2.jpg"
            alt="product"
            width={1000}
            height={1000}
          />
          <div className="hidden md:flex items-center justify-between gap-x-4  mt-2">
            <div className="border rounded-lg p-2 border-gray-400">
              <Image
                className="w-full h-auto"
                src="/images/g-2.jpg"
                width={200}
                height={200}
                alt=""
              />
            </div>
            <div className="border rounded-lg p-2 border-gray-400">
              <Image
                className="w-full h-auto"
                src="/images/g-2.jpg"
                width={200}
                height={200}
                alt=""
              />
            </div>
            <div className="border rounded-lg p-2 border-gray-400">
              <Image
                className="w-full h-auto"
                src="/images/g-2.jpg"
                width={200}
                height={200}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-[60%]">
          <div className="mb-8 text-center md:text-right">
            <h1 className="text-slate-800 font-bold text-lg mb-1 md:mb-2 md:text-2xl">
              {product.title}
            </h1>
            <h2 className="font-thin text-gray-500 md:text-lg">
              {product.brand}
            </h2>
          </div>
          <hr className="hidden md:block mb-8 ml-4" />
        

         

          <div className="text-slate-700 mb-20 sm:mb-5 font-bold bg-white p-4 rounded-lg md:p-0 md:bg-none">
            <h2 className="text-base lg:text-xl mb-5">ویژگی های کالا</h2>
            <ul className="list-disc flex flex-col gap-y-2 list-inside">
              <li className="flex flex-col  items-start gap-y-2 lg:flex-row lg:gap-x-2">
                <span className="font-semibold text-slate-600 text-sm xl:text-lg ">
                  توضیحات:
                </span>
                <span className="text-sm font-medium">
                  {product.description}
                </span>
              </li>
              <li className="flex flex-col gap-y-2 lg:flex-row lg:gap-x-2">
                <p className="font-light text-slate-600">
                  قیمت محصول :
                  <span
                    className={`text-base font-medium mr-2 ${
                      product.discount ? "line-through" : "font-bold"
                    }`}
                  >
                    {toPersianNumberWithComma(product.price)} تومان
                  </span>
                </p>
              </li>
              <li className="flex  gap-y-2 flex-row lg:gap-x-2">
                <span className="font-light text-slate-600">تگ ها: </span>
                {product?.tags?.map((t, i) => {
                  return (
                    <span
                      key={i}
                      className="border border-gray-150 rounded-md cursor-pointer p-2  flex justify-center items-center mx-1"
                    >
                      {t}
                    </span>
                  );
                })}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* left box bottn add to cart in desktop */}

      <div className="md:w-1/2 md:h-full hidden md:block ">
          <div className="">
              {!!product.discount && (
                <div className="flex items-center gap-x-2">
                  <p className="text-sm">
                    قیمت با تخفیف :{" "}
                    {toPersianNumbersWithComma(product.offPrice)}
                  </p>
                  <div className="bg-rose-500 px-2 py-0.5 rounded-xl text-white text-sm">
                    {toPersianNumbersWithComma(product.discount)} %
                  </div>
                </div>
              )} 
            </div>
            <AddToCart product={product} />
          </div>
        </div>
     
    
  );
}

export default ContentInfo;
