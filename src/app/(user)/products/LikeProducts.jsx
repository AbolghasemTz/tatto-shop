"use client";
import React from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { likeProducts } from "@/services/ProductServices";


function LikeProduct({ product }) {
 const router = useRouter()
  const likeHandler = async () => {
    try {
      const { message } = await likeProducts(product._id);
      toast.success(message);
      router.refresh();

    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div>
      <div onClick={likeHandler} className="cursor-pointer">
       {product.likesCount === 1 ? <AiFillHeart size={22} color="#ef4444" /> : <AiOutlineHeart size={22} color=""/>}
      </div>
    </div>
  );
}

export default LikeProduct;
