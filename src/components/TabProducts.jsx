"use client";
import React, { useRef } from "react";
import { useGetCategories } from "@/hooks/useCategories";
import { useGetProducts } from "@/hooks/useProduct";
import { toPersianNumberWithComma } from "@/utils/toPersianNumber";
import Image from "next/image";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../styles/tab-style.css"
import Title from "@/common/Title";
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
const ProductTabs = () => {
    const swiperRef1 = useRef(null);
    const swiperRef2 = useRef(null)
  const { data: fetchCategories, isLoading } = useGetCategories();
  const { categories } = fetchCategories || {};
  const { data: fetchProducts } = useGetProducts();
  const { products } = fetchProducts || {};
  console.log(products);
  return (
    <div className="h-screen mx-10">
         <Title className="my-8 md:px-16 px-4 " title="جدیدترین محصولات" />
      <Tabs >
        <TabList className="tabs">
          {categories?.map((category) => (
            <Tab className="tab_child"  key={category._id}>{category.title}</Tab>
          ))}
        </TabList>

        {products?.map((product) => (
          <TabPanel key={product._id}>
            <div className="rounded-md md:mx-14 my-10 md:w-fit w-[40%] md:h-80">
              <div className="mb-3 bg-gray-100 rounded-xl p-2  w-fit h-auto">
                <Image
                  src="/images/g-2.jpg"
                  alt="product"
                  width={200}
                  height={200}
                  className="rounded-md object-cover"
                />
              </div>

              <div className="flex items-center justify-between w-full mb-3">
                <span className="text-slate-300 text-sm md:text-base">
                  {product.brand}
                </span>
              </div>

              <div className="flex justify-start items-center mb-3">
                <p className="text-slate-800 text-xs font-semibold  sm:text-base">
                  {product.title}
                </p>

               
              </div>
              <div className="font-medium  text-sm mb-2 sm:text-base">
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
             
              <div className="">
                <Link
                  href={`/products/${product.slug}`}
                  className="w-full text-center text-xs font-semibold text-[#417F56] py-2 md:text-lg"
                >
                  مشاهده و سفارش
                </Link>
              </div>
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default ProductTabs;
