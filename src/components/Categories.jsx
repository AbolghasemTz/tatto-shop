"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useGetCategories } from "@/hooks/useCategories";
import Title from "@/common/Title";


function Categories() {
  const { isLoading, data } = useGetCategories();
  const { categories } = data || {};
  const selectedCategories = categories?.slice(0, 3);
  return (
    <div>
      <Title className="my-10 text-center" title="دسته بندی ها" />
      <div className="grid grid-cols-6 gap-4 md:px-12 px-4">
        {selectedCategories?.map((category) => (
          <div
            key={category._id}
            className="mb-8 md:col-span-2 col-span-6 rounded-md p-4 cursor-pointer transition-all duration-150 ease-in-out card-1 card"
          >
            <Link href={`/products?category=${category.englishTitle}`}>
              <div className="rotate-center flex justify-center">
                <Image
                  src="/images/cat.png"
                  alt=""
                  width={150}
                  height={150}
                  className="max-w-[200px] max-h-[200px] w-full object-cover"
                />
              </div>
              <div className="flex flex-row-reverse justify-around items-center">
                <h2 className="text-xl font-semibold text-white shadow-md">
                  {category.title}
                </h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
