import React from "react";
import OtpInput from "react-otp-input";
import { IoMdArrowForward } from "react-icons/io";
import Loading from "../../../common/Loading";

function CheckOtpForm({
  otp,
  setOtp,
  onSubmit,
  onBack,
  time,
  onResendOtp,
  otpResponse,
  checkOtpLoading
}) {
  return (
    <div className="">
      <button className="mb-4" onClick={onBack}>
        <IoMdArrowForward className="text-black " size={24} />
      </button>
      <div className="flex justify-between items-center mb-4">
        <div className="">
          {otpResponse && otpResponse?.message}
          <button onClick={onBack} >ویرایش</button>
        </div>
        <div className="">
          {time > 0 ? (
            <p>{time} تا ارسال مجدد کد</p>
          ) : (
            <button onClick={onResendOtp}>ارسال مجدد کد</button>
          )}
        </div>
      </div>
      <form className="space-y-8" action="">
        <p>کد تایید را وارد کنید</p>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          inputStyle={{
            width: "90%",
            padding: "0.5rem 0.2rem",
            border: "1px solid #070F2B",
            borderRadius: "0.5rem",
          }}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center"
          renderInput={(props) => <input type="number" {...props} />}
        />
        {checkOtpLoading ? (
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

export default CheckOtpForm;
