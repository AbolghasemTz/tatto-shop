"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetProducts } from "@/hooks/useProduct";
import Image from "next/image";
import { toPersianNumberWithComma } from "@/utils/toPersianNumber";
import Title from "@/common/Title";

import AddToCart from "@/app/(user)/products/[slug]/AddToCart";
function TabProducts() {
  const { data, isLoading } = useGetProducts();
  const { products } = data || {};
  const selectedProducts = products?.slice(0, 6);
  const settings = {
    dots: true,
    infinite: true,

    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 2,

    responsive: [
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="">
      <Title className="text-center my-10" title="جدیدترین محصولات" />
      <div className="slider-container md:mb-20 mb-28 md:w-[90%] w-[75%] mx-auto ">
        <Slider {...settings}>
          {selectedProducts?.map((product) => (
            <div key={product._id}>
              <div className="flex-[1_1_calc(30%_-_30px)] m-[10px] relative overflow-hidden bg-[#f8f8f8] rounded-md">
                <div className="w-full h-fit block  ">
                  <Image
                    src={product.imageLink}
                    alt="product"
                    width={300}
                    height={200}
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="flex justify-center items-center mb-3  mt-10 ">
                  <p className="text-slate-800 text-xs font-semibold  sm:text-base">
                    {product.title}
                  </p>
                </div>
                <div className="font-medium text-center text-sm mb-2 sm:text-base">
                  <span
                    className={`line-through text-xs sm:text-sm  text-[#777777] ${
                      product.offPrice && "hidden sm:block"
                    }`}
                  >
                    {toPersianNumberWithComma(product.price)}تومان
                  </span>
                  <span className="text-sm sm:text-base  text-[#353535] mx-2">
                    {toPersianNumberWithComma(product.offPrice)}تومان
                  </span>
                </div>
                <div className="flex justify-center items-center">
                  <AddToCart product={product} />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TabProducts;
