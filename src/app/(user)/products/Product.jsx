import React from 'react'
import Image from "next/image";
import { toPersianNumberWithComma } from '@/utils/toPersianNumber';

function Product({products}) {
   
  return (
   <>
   {products.map(product => (
     <div   key={product._id} className="md:w-60 w-[80%] md:h-80 h-auto my-2 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-xl hover:shadow-sky-100 transition-shadow">
       <div className=" w-[100%]  rounded-2xl">
         <Image
           classNameName=" rounded-2xl transform hover:scale-105 hover:backdrop-blur-lg duration-300 transition-transform cursor-pointer "
           src="/images/g-2.jpg"
           width={1000}
           height={200}
           alt="product"
         />
       </div>
       <div className="md:mt-0 mt-6">
         <p className="font-extrabold"> {product?.title} </p>
         <p className="">{toPersianNumberWithComma(product?.price)} تومان </p>
       </div>
       <button className="btn btn_primary text-sm hover:opacity-75 transition-colors">
         افزودن به سبد خرید
       </button>
     </div>
  
  
   ))}
   </>
  )
}

export default Product