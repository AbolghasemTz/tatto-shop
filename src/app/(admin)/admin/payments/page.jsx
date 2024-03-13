"use client";

import { useGetPayments } from "@/hooks/usePayments";
import PaymentListTable from "./PaymentListTable";
import Loading from "@/common/Loading";




function page() {
  const { isLoading, data } = useGetPayments();
  const { payments } = data || {};

  if (isLoading) return <Loading/>;
  return (
    <div className="p-4 bg-slate-800 w-full h-[calc(100vh-2rem)] rounded-xl">
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-white font-semibold  text-2xl">سفارشات</h1>
      </div>
      <PaymentListTable payments={payments} />
    </div>
  );
}
export default page;
