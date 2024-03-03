"use client";
import React from "react";
import Loading from "@/common/Loading";
import { useGetUser } from "@/hooks/useAuth";
import { CiCalendarDate } from "react-icons/ci";
import { BsBox2Heart } from "react-icons/bs";
import { toLocalDateStringShort } from "@/utils/toLocaleDate";
function Profile() {
  const { data, isLoading } = useGetUser();
  const { user } = data?.data || {};
  console.log(user, "user");
  if (isLoading) return <Loading />;
  return (
    <div className="p-4 ">
      <div className="bg-white md:max-w-fit w-full mt-8 md:mr-8 shadow-md p-4 rounded-md">
        <h1 className="flex items-center justify-center">
          <span className="font-semibold md:text-3xl text-xl text-[#555775]">
            {user?.name} عزیز 😍:
          </span>
          <span className="inline-block mr-4 md:text-xl text-base">خوش آمدی 🙏</span>{" "}
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="flex items-center bg-white md:w-64 w-full mt-8  shadow-md p-4  rounded-md">
          <div className="ml-4 bg-[#64748B] rounded-xl p-2">
            <CiCalendarDate className="text-white" size={36} />
          </div>
          <div className="">
            <p className="text-[#9496A9] text-sm">تاریخ پیوستن</p>
            <p className="text-[#555775] pt-1 font-semibold">
              {toLocalDateStringShort(user?.createdAt)}
            </p>
          </div>
        </div>
        <div className="flex items-center bg-white md:w-64 w-full mt-8  shadow-md p-4  rounded-md">
          <div className="ml-4 bg-[#64748B] rounded-xl p-2">
            <BsBox2Heart className="text-white" size={36} />
          </div>
          <div className="">
            <p className="text-[#9496A9] text-sm"> سفارشات</p>
            <p className="text-[#555775] pt-1 font-semibold">
              {user?.Products?.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
