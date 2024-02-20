"use client";
import React from "react";
import TextField from "../common/TextField";
import Loading from "../common/Loading";

function CompleteProfile({
  name,
  setName,
  email,
  setEmail,
  onSubmit,
  checkLoading,
}) {
  return (
    <div className="flex justify-center ">
      <div className="w-full md:max-w-md ">
        <form className="space-y-6"  action="">
          <TextField
            name="name"
            label="نام و نام خانوادگی"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="سارا فیروزبخش"
          />
          <TextField
            name="email"
            label="ایمیل"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="sara@gmail.com"
          />
              {checkLoading ? (
          <Loading />
        ) : (
          <button
            className="w-full btn btn_primary"
            type="submit"
            onClick={onSubmit}
          >
            تایید
          </button>
        )}
        </form>
      </div>
    </div>
  );
}

export default CompleteProfile;
