import React from "react";
import AddToCart from "./AddToCart";
import { toPersianNumberWithComma } from "@/utils/toPersianNumber";
import ProductDetailsCarousel from "./ProductDetailsCarousel";

function ContentInfo({ product }) {

  return (
    <div className="w-full md:py-20 py-10  z-[20] ">
      <div className="w-full  px-5 md:px-10 mx-auto ">
        <div className="flex md:flex-row flex-col  ">
          <div className=" w-full md:w-auto flex-[1] max-w-[500] lg:max-w-full mx-auto">
            <ProductDetailsCarousel />
          </div>

          <div className="flex-[1] py-3 bg-white rounded-md p-3">
            <div className="md:text-[34px] text-[26px] font-semibold mb-2 leading-10">
              {product?.title}
            </div>

            <div className="flex items-center text-black/[0.5] mb-5">
              <p className="mr-2 text-lg font-semibold \">
                {toPersianNumberWithComma(product.price)} تومان
              </p>
            </div>
            <div className="text-md mb-5">
              <p>{product?.description}</p>
            </div>
            <div className="flex justify-start items-center ">
              {product.tags.map((tag,index) => (
                
                <p key={index} className="border border-gray-500 mx-2 p-1  rounded-md"> {tag}</p>
              ))}
            </div>
            <AddToCart product={product}/>

          
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentInfo;
