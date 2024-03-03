import React from "react";
import { getProducts } from "@/services/productService";
import { getCategories } from "@/services/categoriesService";
import Product from "./Product";
import FilterMobile from "./filterMobile";
import Sidebar from "./Sidebar";

async function Products() {
  const { products } = await getProducts();
  const { categories } = await getCategories();
  console.log(products);
  return (
    <div className="grid grid-cols-4 gap-4  ">
      <div className="md:hidden block bg-black text-white col-span-4">
        <FilterMobile />
      </div>
      <div className="md:col-span-1 md:block hidden bg-black text-white my-6 rounded-md px-6 ">
        <Sidebar />
      </div>
      <div className="md:col-span-3 col-span-4  min-h-screen flex justify-around  my-4  flex-wrap  ">
        <Product products={products} />
      </div>
    </div>
  );
}

export default Products;
