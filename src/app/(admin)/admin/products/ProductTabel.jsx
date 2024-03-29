export const dynamic = "force-dynamic"


import { useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import React from 'react'
import { toast } from 'react-hot-toast'
import { GrView } from 'react-icons/gr';
import { CiTrash } from 'react-icons/ci';
import { AiOutlineEdit } from 'react-icons/ai';
import { useRemoveProducts } from '@/hooks/useProduct'
import { productTabelTHead } from '@/constant/tableHeads'
import { toPersianNumberWithComma, toPersianNumbers } from '@/utils/toPersianNumber'
function ProductTabel({products}) {
 const {mutateAsync} =  useRemoveProducts()
 const queryClient = useQueryClient()
 const removeProduct = async (id) => {
try {
  const {message} = await mutateAsync(id);  
  toast.success(message); 
  queryClient.invalidateQueries({queryKey:["get-products"]})
} catch (error) {
  console.log(error);
}
  }
  return (
    <div className='overflow-auto mt-4'>
      <table className="border-collapse table-auto w-full min-w-[800px] text-sm mb-2 rounded-md">
      <thead className='bg-slate-200 '>
          <tr>
              {productTabelTHead.map((item) => {
                  return (
                    <th className="whitespace-nowrap text-center" key={item.id}>
                          {item.label}
                      </th>
                  )
              })}
          </tr>
      </thead>
      <tbody>
        {products.map((product,index) => {
          return <tr key={product._id}  className='bg-white font-semibold'>
               <td className='text-center pt-1'>{toPersianNumbers(index)}</td>
               <td className=" text-center">{product.title}</td>
               <td className='text-center '>{product.category?.title}</td>
               <td className='text-center '>{toPersianNumberWithComma(product.price)}</td>
               <td className='text-center '>{toPersianNumbers(product.discount)}%</td>
               <td className='text-center '>{toPersianNumberWithComma(product.offPrice)}</td>
               <td className='text-center '>{toPersianNumbers(product.countInStock)}</td>
               
               <td className='flex items-center justify-center pt-1'>
               <Link className='font-semibold' href={`/admin/products/${product._id}`}>
               <GrView size={18}  color='#353535'/>
               </Link>
               <button onClick={() => removeProduct(product._id)} className='mx-3 text-red-500'><CiTrash size={18} /></button>
               <Link className='font-semibold' href={`/admin/products/edit/${product._id}`}>
               <AiOutlineEdit size={18}  color='#353535'/>
               </Link>
                </td>
              
               
          </tr>
        })}
      </tbody>
    </table>
  </div>
  )
}

export default ProductTabel
