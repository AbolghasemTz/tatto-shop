"use client"

import { useGetProducts } from '@/hooks/useProduct';
import ProductTabel from './ProductTabel';
import Link from 'next/link';
import Loading from '@/common/Loading';

function page() {
  const {isLoading,data} =  useGetProducts();
  const {products} = data || {}

  if(isLoading) return <Loading />
  return (
    <div className='p-4 bg-slate-800 h-[calc(100vh-2rem)] rounded-xl '>
        <div className="flex justify-between items-center">
      <h1 className="text-xl font-bold mb-5 text-white">محصولات</h1>
        <Link className="text-xl font-bold mb-5 text-white" href={`/admin/products/add`}>اضافه کردن محصول</Link>

        </div>
      <ProductTabel products={products}/>
    </div>
  )
}

export default page
