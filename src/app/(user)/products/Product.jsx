"use client";
import React from "react";
import Image from "next/image";
import { toPersianNumberWithComma } from "@/utils/toPersianNumber";
import LikeProduct from "./LikeProducts";
import Link from "next/link";

function Product({ products }) {
  return (
    <>
      {products?.map((product) => {
        return (


          <div
            key={product._id}
            className="rounded-md flex-[1_1_300px] m-[10px] p-[15px] text-center border-[1px] border-[solid] border-[#e3e3e3] my-12"
          >
            <div className="mb-3 bg-gray-100 rounded-xl p-2  max-w-full h-auto ">
              <Image
                src={product.imageLink}
                alt="product"
                width={500}
                height={500}
                className="rounded-md object-cover"
              />
            </div>

            <div className="flex items-center justify-between w-full mb-3">
              <span className="text-slate-300 text-sm md:text-base">
                {product.brand}
              </span>
            </div>

            <div className="flex justify-between items-center mb-3">
              <p className="text-slate-800 text-xs font-semibold  sm:text-base">
                {product.title}
              </p>

              <LikeProduct product={product} />
            </div>
            <div className="font-medium text-center text-sm mb-2 sm:text-base">
              <span
                className={`line-through text-xs sm:text-sm  text-[#777777] ${product.offPrice && "hidden sm:block"
                  }`}
              >
              تومان  {toPersianNumberWithComma(product.price)}
              </span>
              <span className="text-sm sm:text-base  text-[#353535] mx-2">
               {toPersianNumberWithComma(product.offPrice)} تومان
              </span>
            </div>
            <hr />
            <div className="flex justify-center items-center">
              <Link
                href={`/products/${product.slug}`}
                className="w-full text-center text-xs font-semibold text-[#417F56] py-2 md:text-lg"
              >
                مشاهده و سفارش
              </Link>
            </div>
          </div>


        );
      })}
    </>
  );
}

export default Product;
