
import { useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import React from 'react'
import { toast } from 'react-hot-toast';
import { GrView } from 'react-icons/gr';
import { CiTrash } from 'react-icons/ci';
import { AiOutlineEdit } from 'react-icons/ai';
import { useRemoveCategory } from '@/hooks/useCategories';
import { categoriesTabelTHead } from '@/constant/tableHeads';


function CategoryListTabel({categories}) {
  const {mutateAsync} =  useRemoveCategory()
  const queryClient = useQueryClient()
  const removeCategoy = async (id) => {
 try {
   const {message} = await mutateAsync(id);  
   toast.success(message); 
   queryClient.invalidateQueries({queryKey:["get-categories"]})
 } catch (error) {
   console.log(error);
 }
}
  return (
    <div className='overflow-auto mt-4 '>
    <table className="border-collapse table-auto w-full min-w-[800px] text-sm mb-2 rounded-md">
    <thead className='bg-slate-200 '>
          <tr>
              {categoriesTabelTHead.map((item) => {
                
                  return (
                    <th key={item.id} className="whitespace-nowrap text-center key={item.id">
                          {item.label}
                      </th>
                  )
              })}
          </tr>
      </thead>
      <tbody>
        {categories.map((category,index) => {
          return <tr className='bg-white font-semibold'  key={category._id}>
               <td className='text-center pt-1'>{index}</td>
               <td className="truncate whitespace-nowrap text-center pt-1">{category.title}</td>
               
               <td className='text-center pt-1'>{category.description}</td>
               <td className='text-center pt-1'>{category.englishTitle}</td>
               <td className='text-center pt-1'>{category.type}</td>
            
               
               { <td className='flex items-center justify-center pt-1'>
               <Link className='font-semibold' href={`/admin/categories/${category._id}`}>
               <GrView size={18}  color='#353535'/>
               </Link>
               <button onClick={() => removeCategoy(category._id)} className='mx-3 text-red-500'><CiTrash size={18} /></button>
               <Link className='font-semibold' href={`/admin/categories/edit/${category._id}`}>
               <AiOutlineEdit size={18}  color='#353535'/>
               </Link>
                </td> }
              
               
          </tr>
        })}
      </tbody>
    </table>
  </div>
  )
}

export default CategoryListTabel
