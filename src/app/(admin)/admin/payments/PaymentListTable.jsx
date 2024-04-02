
import { adminPaymentListTableTHeads } from "@/constant/tableHeads";
import { toLocalDateStringShort } from "@/utils/toLocaleDate";
import { toPersianNumberWithComma } from "@/utils/toPersianNumber";
import Link from "next/link";
import { GrView } from "react-icons/gr";

function PaymentListTable({ payments }) {
  return (
    <div className="overflow-auto mt-4">
       <table className="border-collapse table-auto w-full min-w-[800px] text-sm mb-2 rounded-md">
        <thead className='bg-slate-200 '>
          <tr>
            {adminPaymentListTableTHeads.map((item) => {
              return (
                <th className="whitespace-nowrap text-center" key={item.id}>
                  {item.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => {
            return (
              <tr key={payment._id} className='bg-white font-semibold'>
                <td className="text-[12px] text-center'">{index + 1}</td>
                <td className="text-center">
                  {payment.invoiceNumber}
                </td>
                <td className="text-center">
                  {payment.description}
                </td>
                <td className="text-center">
                  <div className="flex flex-col gap-y-2">
                    <span> {payment.user?.name}</span>
                    <span> {payment.user?.email}</span>
                    <span className="font-bold">
                      {payment.user?.phoneNumber}
                    </span>
                  </div>
                </td>
                <td className="text-center">
                  <div className="flex flex-col gap-y-2 items-start">
                    {payment.cart.productDetail.map((product) => {
                      return (
                        <span
                          className="badge badge--secondary"
                          key={product._id}
                        >
                          {product.title}
                        </span>
                      );
                    })}
                  </div>
                </td>
                <td className="text-center font-bold text-lg">
                  {toPersianNumberWithComma(payment.amount)}
                </td>
                <td className="text-center">
                  {toLocalDateStringShort(payment.createdAt)}
                </td>
                <td className="text-center">
                  {payment.status === "COMPLETED" ? (
                    <span className="badge badge--success">موفق</span>
                  ) : (
                    <span className="badge badge--error">ناموفق</span>
                  )}
                </td>
                <td>
                  <div>
                    <Link
                      href={`/admin/payments/${payment._id}`}
                      className="flex justify-center"
                    >
                        <GrView size={18}  color='#353535'/>
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default PaymentListTable;
