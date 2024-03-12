"use client"
import React from "react";
import PaymentTabel from "./PaymentTabel";
import { useGetUser } from "@/hooks/useAuth";
import Loading from "@/common/Loading";

function payments() {
   const {data,isLoading} =  useGetUser();
   const {user , payments} = data || {};

if(isLoading) return <Loading />
  return (
    <div className="mx-[24px]">
      <h1 className="font-semibold  my-4">سفارشات</h1>
      <PaymentTabel payments={payments}/>
    </div>
  );
}

export default payments;
