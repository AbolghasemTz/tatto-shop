"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { useGetCategories } from "@/hooks/useCategories";
import Title from "@/common/Title";

function Categories() {
  const { isLoading, data } = useGetCategories();
  const { categories } = data || {};

 
  return (
    <div id="animate-caegory" >
     <Title className="my-8 text-center " title="دسته بندی ها" />
      <div id="category_scroll"  className="grid grid-cols-6 gap-4 md:px-12 px-4">
        {categories?.map((category) => (
          <div
         
            key={category._id}
            className="mb-8 md:col-span-2 col-span-6 bg-[#F2F6F7] w-full  rounded-md shadow-md text-black "
          >
            <Link
              className="flex flex-row-reverse justify-around items-center "
              href={`products?category=${category?.englishTitle}`}
            >
              <h2 className="text-xl font-semibold">{category?.title}</h2>
              <div className="w-[150px] ">
                <Image src="/images/cat.png" width={200} height={200} alt="" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
