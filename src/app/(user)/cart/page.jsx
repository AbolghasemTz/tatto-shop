"use client";
import Link from "next/link";
import React from "react";
import CartItem from "./CartItem";
import CartSummery from "./CartSummery";
import { useGetUser } from "@/hooks/useAuth";
import Loading from "@/common/Loading";

function page() {
  const { data, isLoading } = useGetUser();
  const { user, cart } = data || {};
  if (isLoading) return <Loading />;
  if (!user || !data)
    return (
      <div className="container  h-[calc(100vh-9rem)] lg:max-w-screen-lg text-white mt-8">
        <p className="font-bold mb-4">برای مشاهده سبد خرید لطفا ثبت نام کنید</p>
        <Link href="/" className="text-lg font-bold text-white">
          لطفا وارد شوید!
        </Link>
      </div>
    );

  if (!user.cart?.products || user.cart?.products.length === 0)
    return (
      <div className="h-screen text-center  text-white">
        <p className="my-8">سبد خرید خالی است</p>
        <Link href="/products" className="text-lg font-bold ">
          رفتن به صفحه محصولات
        </Link>
      </div>
    );

  return (
    <div className="flex items-start md:flex-row flex-col md:px-6  mx-auto w-full mt-6">
      <div className="flex flex-col gap-y-2 md:gap-y-4 px-4 sm:flex-1 w-full">
        {cart &&
          cart.productDetail?.map((item) => {
            return <CartItem key={item._id} cartItem={item} />;
          })}
      </div>
      <CartSummery payDetail={cart.payDetail} />
    </div>
  );
}

export default page;

