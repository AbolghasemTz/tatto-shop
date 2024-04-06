import React from "react";
import { userPaymentTHeads } from "@/constant/tableHeads";
import { toLocalDateStringShort } from "@/utils/toLocaleDate";
import { toPersianNumberWithComma } from "@/utils/toPersianNumber";

function PaymentTabel({ payments }) {
  return (
    <div className="overflow-x-auto ">
      <table className="border-collapse table-auto w-full min-w-[800px] text-sm">
        <thead className="bg-slate-200 mb-2">
          <tr className="">
            {userPaymentTHeads.map((item) => {
              return (
                <th className="whitespace-nowrap" key={item.id}>
                  {item.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="">
          {payments.map((pay, index) => {
            return (
              <tr key={pay._id} className="">
                <td className=" text-[12px] ">{index}</td>
                <td className="truncate whitespace-nowrap  text-[13px] ">
                  {pay.invoiceNumber}
                </td>
                <td className=" text-[11px] ">
                  {pay.description}
                </td>
                <td className=" text-[11px] ">
                  {pay.cart.productDetail.map((product) => {
                    return <div key={product._id}>{product.title}</div>;
                  })}
                </td>
                <td className=" text-[12px] ">
                  {toPersianNumberWithComma(pay.amount)}

                  تومان
                </td>
                <td className=" text-[12px] ">
                  {toLocalDateStringShort(pay.createdAt)}

                </td>
                <td className={`h-5 flex justify-center items-center my-2  ${pay.status === "COMPLETED" ? "bg-green-400" : "bg-red-400"}`}>
                  {pay.status === "COMPLETED" ? "موفق" : "ناموفق"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PaymentTabel;
