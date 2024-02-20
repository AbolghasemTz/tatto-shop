"use client";
import React from "react";
import TextField from "../common/TextField";
import Loading from "../common/Loading";

function SendOtpForm({ phoneNumber, onChange, onSubmit, otpLoading }) {
  return (
    <div>
      <form>
        <TextField
          label="شماره موبایل"
          name="phoneNumber"
          onChange={onChange}
          value={phoneNumber}
          placeholder="09354947002"
        />
        {otpLoading ? (
          <Loading />
        ) : (
          <button
            className="w-full btn btn_primary"
            type="submit"
            onClick={ onSubmit }
          >
            تایید
          </button>
        )}
      </form>
    </div>
  );
}

export default SendOtpForm;
