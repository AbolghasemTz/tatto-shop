import React from "react";
import queryString from "query-string";
import CategoriesSideBar from "./CategoriesSideBar";

import FiltersMobile from "./FiltersMobile";

import { getProducts } from "@/services/ProductServices";
import { getCategories } from "@/services/categoriesService";
import Product from "./Product";

export const daynamic = "force-dynamic"; //uq to cache store ssr

async function Menu({ searchParams }) {
  const { products } = await getProducts(queryString.stringify(searchParams));
  const { categories } = await getCategories();

  return (
    <div className="grid grid-cols-4 gap-4 min-h-screen  bg-gray-50 ">
      <div className="md:hidden block  col-span-4 -mb-16">
        <FiltersMobile categories={categories} />
      </div>

      {/* sidebar */}

      
        <div className="md:col-span-1 md:block hidden  mb-6 mt-14 rounded-md px-6  bg-[#F2F6F7]">
          <CategoriesSideBar categories={categories} />
          
         
        
        
      </div>
        <div className=" md:col-span-3 col-span-4  flex justify-around  my-4  flex-wrap ">
        <Product products={products} />
      </div>
    </div>
  );
}

export default Menu;
