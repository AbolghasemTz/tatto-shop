"use client"
import React from 'react'
import CategoryListTabel from './CategoryListTabel';
import Link from 'next/link';
import { useGetCategories } from '@/hooks/useCategories';
import Loading from '@/common/Loading';

function page() {
 const {isLoading,data} =  useGetCategories();
  const {categories} = data || {}
console.log(categories);
  if(isLoading) return <Loading />
  return (
    <div className='p-4 bg-slate-800 w-full h-[calc(100vh-2rem)] rounded-x'>
        <div className="l flex justify-between ">
      <h1 className="text-white font-semibold  text-2xl">دسته بندی </h1>
        <Link className="text-white font-semibold  text-2xl" href={`/admin/categories/add`}>اضافه کردن دسته بندی</Link>

        </div>
      <CategoryListTabel categories={categories}/>
    </div>
  )
}

export default page
