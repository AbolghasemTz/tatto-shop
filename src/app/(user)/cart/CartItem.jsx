"use client";

import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import Image from "next/image";
import { BsPlusLg, BsTrash } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import { useAddToCart, useDecrementFromCart } from "@/hooks/useAddToCart";
import { toPersianNumberWithComma, toPersianNumbers } from "@/utils/toPersianNumber";
function CartItem({ cartItem }) {
  const { mutateAsync: addToCartAysnc } = useAddToCart();
  const { mutateAsync: decFromCart } = useDecrementFromCart();
  const queryClient = useQueryClient();
  const addToCartHandler = async () => {
    try {
      const { message } = await addToCartAysnc(cartItem._id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
      
    } catch (error) {
      if (error?.response?.data) {
        toast.error(error?.response?.data?.message);
      }
    }
  };
  const decrementHandler = async () => {
    try {
      const { message } = await decFromCart(cartItem._id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey:[ "get-user"] });
      
    } catch (error) {
      if (error?.response?.data) {
        toast.error(error?.response?.data?.message);
      }
    }
  };

  return (
    <div className="bg-white rounded-lg  p-3 flex items-stretch shadow-lg justify-between">
      <div className="w-16 md:w-24 h-auto rounded-md">
        <Image
          className="w-full h-auto  rounded-md"
          src="/images/g-4.jpg"
          alt="product"
          width={200}
          height={200}
        />
      </div>
      <div className="flex flex-col justify-between text-xs md:text-xl flex-1 mr-3">
        <span className="font-bold text-slate-800">{cartItem.title}</span>
        <span className="text-orange-600 font-medium ">
          {toPersianNumberWithComma(cartItem.price)} تومان
        </span>
      </div>
      
       
        <div className="flex  items-center gap-x-1 md:gap-x-3">
          <button
            onClick={addToCartHandler}
            className="flex cursor-pointer items-center justify-center rounded-full bg-gray-200 w-6 h-6 md:w-7 md:h-7"
          >
            <BsPlusLg size={18} />
          </button>
          <span className="flex items-center justify-center border border-orange-500 rounded w-3 h-5 md:w-6 md:h-7 text-xs md:text-base">
            {toPersianNumbers(cartItem.quantity)}
          </span>

          <button
            onClick={decrementHandler}
            className=""
          >
            {cartItem.quantity === 1 ? (
              <span className="bg-rose-100  rounded-full flex cursor-pointer items-center justify-center  w-6 h-6 md:w-7 md:h-7">
                <BsTrash size={17} color="#f43f5e" />
              </span>
            ) : (
              <span className="bg-orange-200  rounded-full flex cursor-pointer items-center justify-center  w-6 h-6 md:w-7 md:h-7">
                <AiOutlineMinus size={18} />{" "}
              </span>
            )}
          </button>
        </div>
      </div>
   
  );
}

export default CartItem;

