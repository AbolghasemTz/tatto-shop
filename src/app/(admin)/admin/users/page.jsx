"use client"
import React from 'react'
import UserTabel from './UserTabel';
import Loading from '@/common/Loading';
import { useGetAllUser } from '@/hooks/useAuth';


function page() {
   const {isLoading , data}= useGetAllUser();
   const {users} = data || {};
   if(isLoading) return <Loading />
  return (
    <div className="p-4 bg-slate-800 w-full h-[calc(100vh-2rem)] rounded-xl">
     <h1 className='text-white font-semibold  text-2xl'>اطلاعات کاربران</h1>
     <UserTabel users={users}/>
    </div>
  )
}

export default page
