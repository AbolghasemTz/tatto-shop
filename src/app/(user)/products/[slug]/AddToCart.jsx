"use client";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-hot-toast";
import { useAddToCart } from "@/hooks/useAddToCart";
import { useGetUser } from "@/hooks/useAuth";

function AddToCart({ product }) {
  const queryClient = useQueryClient();
  const { data } = useGetUser();
  const { user } = data?.data || {};
 
  const { mutateAsync, isLoading } = useAddToCart();
  //   const router = useRouter();
  const addToCartHandler = async () => {
    if (!user) {
      toast.error("لطفا ابتدا لاگین کنید");

      return;
    }

    try {
      const { message } = await mutateAsync(product._id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
    } catch (error) {}
  };
  const inCart = (user, product) => {
    if (!user) return false;
    return user && user.cart?.products.some((p) => p.productId === product._id);
  };
  return (
    <div className="flex-auto text-sm text-center pb-6">
      {inCart(user, product) ? (
        <Link href="/cart">ادمه سفارش</Link>
      ) : (
        <button onClick={addToCartHandler} className="btn btn_primary text-center">
          اضافه کردن به سبد خرید
        </button>
      )}
    </div>
  );
}

export default AddToCart;
