"use client";

import Link from "next/link";
import { HiPlusCircle } from "react-icons/hi";
import CouponListTable from "./CouponListTable";
import { useGetCoupons } from "@/hooks/useCoupons";
import Loading from "@/common/Loading";


function page() {
  const { isLoading, data } = useGetCoupons();
  const { coupons } = data || {};
  if (isLoading) return <Loading />;
  return (
    <div className='p-4 bg-slate-800 h-[calc(100vh-2rem)] rounded-xl '>
        <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold mb-5 text-white">کد های تخفیف</h1>
        <Link
          href="/admin/coupons/add"
          className="text-xl font-bold mb-5 text-white flex"
        >
          <HiPlusCircle color="white" className="w-6 h-6 ml-2" /> <span>اضافه کردن کد تحفیف</span>
        </Link>
      </div>
      <CouponListTable  coupons={coupons} />
    </div>
  );
}
export default page;
