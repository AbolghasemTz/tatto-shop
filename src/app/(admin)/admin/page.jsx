"use client";
import React from "react";
import { useGetUser } from "@/hooks/useAuth";
import Loading from "@/common/Loading";


function page() {
  const { data, isLoading } = useGetUser();
  const { user } = data || {};

  if (isLoading) return <Loading />;
  return (
    <div className="p-4 bg-slate-800 h-[calc(100vh-2rem)] rounded-xl">
    <div className="bg-white md:max-w-fit w-full mt-8 md:mr-8 shadow-md p-4 rounded-md">
      <h1 className="flex items-center justify-center">
        <span className="font-semibold md:text-3xl text-xl text-black">
          {user?.name} عزیز 😍:
        </span>
        <span className="inline-block mr-4 md:text-xl text-base">خوش آمدی 🙏</span>{" "}
      </h1>
    </div>
    
  </div>
  );
}

export default page;
