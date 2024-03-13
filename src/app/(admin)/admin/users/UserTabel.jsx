
import React from 'react'
import Link from 'next/link'
import { GrView } from 'react-icons/gr';
import { userListTabelHeads } from '@/constant/tableHeads';
import { toLocalDateStringShort } from '@/utils/toLocaleDate';

function UserTabel({users}) {
   
  return (
    <div className='overflow-x-auto mt-4 '>
      <table className="border-collapse table-auto w-full min-w-[800px] text-sm mb-2 rounded-md">
        <thead className='bg-slate-200 '>
            <tr>
                {userListTabelHeads.map((item) => {
                    return (
                        <th className="whitespace-nowrap text-center" key={item.id}>
                            {item.label}
                        </th>
                    )
                })}
            </tr>
        </thead>
        <tbody>
          {users?.map((user,index) => {
            return <tr key={user._id} className='bg-white font-semibold'>
                 <td className='text-[12px] text-center'>{index}</td>
                 <td className="text-center">{user.name}</td>
                 <td className='text-center'>{user.email}</td>
                 <td className='text-center'>{user.phoneNumber} {user.isVerifiedPhoneNumber && <h6 className='text-green-600'>verify</h6>}</td>
                 <td className='text-center'>{user.Products?.map((product,index) => {
                  return <div key={index}>{product.title}</div>
                 })}</td>
                 <td className='text-center'>{toLocalDateStringShort(user.createdAt)}</td>
                 <td className='flex justify-center'><Link href={`/admin/users/${user._id}`}><GrView size={18} /></Link></td>
                
                 
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default UserTabel
