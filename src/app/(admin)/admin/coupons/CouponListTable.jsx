
import { couponListTableTHeads } from "@/constant/tableHeads";
import { useRemoveCoupon } from "@/hooks/useCoupons";
import { toLocalDateStringShort } from "@/utils/toLocaleDate";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { HiEye, HiTrash } from "react-icons/hi";
import { RiEdit2Line } from "react-icons/ri";

function CouponListTable({ coupons }) {
  const { mutateAsync } = useRemoveCoupon();
  const queryClient = useQueryClient();

  const removeCouponHandler = async (id) => {
    try {
      const { message } = await mutateAsync(id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["get-coupons"] });
    } catch (error) {
      toast.error(error?.respone?.data?.message);
    }
  };

  return (
    <div className='overflow-auto mt-4'>
      <table className="border-collapse table-auto w-full min-w-[800px] text-sm mb-2 rounded-md">
      <thead className='bg-slate-200 '>
          <tr>
            {couponListTableTHeads.map((item) => {
              return (
                <th className="whitespace-nowrap text-center" key={item.id}>
                  {item.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {coupons.map((coupon, index) => {
            return (
              <tr key={coupon._id}  className='bg-white font-semibold'>
                <td  className='text-center pt-1'>{index + 1}</td>
                <td className="text-center  whitespace-nowrap font-bold">
                  {coupon.code}
                </td>
                <td className="text-center">
                  <span className="badge badge--primary">{coupon.type}</span>
                </td>
                <td className="text-center">{coupon.amount}</td>
                <td className="flex justify-center">
                  <div className="space-y-2 flex flex-col items-start">
                    {coupon.productIds.map((p) => {
                      return (
                        <span className="badge badge--secondary">
                          {p.title}
                        </span>
                      );
                    })}
                  </div>
                </td>
                <td className="text-center">{coupon.usageCount}</td>
                <td className="text-center">{coupon.usageLimit}</td>
                <td className="text-center">
                  {toLocalDateStringShort(coupon.expireDate)}
                </td>
                <td className="flex justify-center  font-bold text-lg">
                  <div className="flex items-center gap-x-4">
                    <Link href={`/admin/coupons/${coupon._id}`}>
                      <HiEye className="text-primary-900 w-6 h-6" />
                    </Link>
                    <button onClick={() => removeCouponHandler(coupon._id)}>
                      <HiTrash className="text-rose-600 w-6 h-6" />
                    </button>
                    <Link href={`/admin/coupons/edit/${coupon._id}`}>
                      <RiEdit2Line className="w-6 h-6 text-secondary-600" />
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
export default CouponListTable;
