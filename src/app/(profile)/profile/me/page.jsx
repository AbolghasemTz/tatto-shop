"use client";
import React, { useState } from "react";
import Loading from "@/common/Loading";
import { useGetUser } from "@/hooks/useAuth";
import TextField from "@/common/TextField";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updatedProfile } from "@/services/userServices";

function Me() {
  const { data, isLoading } = useGetUser();
  const queryClient = useQueryClient()
  const { user } = data?.data || {};
 const {isPending,mutateAsync} =  useMutation({mutationFn:updatedProfile})
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    biography: user?.biography || "",
  });
console.log(formData);
  const handlerForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync(formData );
      queryClient.invalidateQueries(["get-user"])
      toast.success(data?.data?.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  if (isLoading) return <Loading />;

  return (
    <div className="p-4">
      <h1 className="font-semibold  my-4">اطلاعات کاربری</h1>
      <form action="" className="space-y-5">
        <TextField
          label="بایوگرافی"
          name="biography"
          value={formData.biography}
          onChange={handlerForm}
        />
        <TextField
          label="نام"
          name="name"
          value={formData.name}
          onChange={handlerForm}
        />
        <TextField
          label="ایمیل"
          name="email"
          value={formData.email}
          onChange={handlerForm}
        />
        <TextField
          label="شماره تلفن"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handlerForm}
        />
        {isLoading ? (
          <Loading />
        ) : (
          <button
            className="w-36 btn btn_primary"
            type="submit"
            onClick={submitHandler}
          >
            تایید
          </button>
        )}
      </form>
    </div>
  );
}

export default Me;
