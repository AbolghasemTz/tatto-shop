"use client";
import React, { useEffect, useState } from "react";
import SendOtpForm from "./SendOtpForm";

import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import CheckOtpForm from "./CheckOtpForm";
import CompleteProfile from "./CompleteProfile";
import { useRouter } from "next/navigation";
import { checkOtp, completeProfile, getOtp } from "@/services/AuthServices";
// import { useForm } from 'react-hook-form';

const RESEND_TIME = 90;
function AuthPage({ onClose }) {
  const router = useRouter();
  const queryClient = useQueryClient()
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [time, setTime] = useState(RESEND_TIME);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const {
    isPending: otpLoading,
    error,
    mutateAsync: mutateSendOtp,
  } = useMutation({ mutationFn: getOtp });
  // const { handleSubmit, register, getValues } = useForm();
  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };
  const {
    isPending: checkOtpLoading,
    data: otpResponse,
    mutateAsync: mutateCheckOtp,
  } = useMutation({ mutationFn: checkOtp });
  // const { handleSubmit, register, getValues } = useForm();

  const {
    isPending: checkLoading,

    mutateAsync: mutateCheckProfile,
  } = useMutation({ mutationFn: completeProfile });
  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateSendOtp({ phoneNumber });
      toast.success(data?.data?.message);

      setStep(2);
      setTime(RESEND_TIME);
      setOtp("");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await mutateCheckOtp({ phoneNumber, otp });
      toast.success("کد تایید شد !خوش آمدید");
      if (data?.user?.isActive) {
        onClose();
        queryClient.invalidateQueries(["get-user"])
      } else {
        setStep(3);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const CheckProfileHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await mutateCheckProfile({ name, email });
      toast.success(data?.message);
      console.log(data?.message);
      router.push("/");
      queryClient.invalidateQueries(["get-user"])
      onClose();
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error?.response?.data?.message);
    }
  };
  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);
  const renderSteps = () => {
    switch (step) {
      case 1:
        return (
          <SendOtpForm
            phoneNumber={phoneNumber}
            onChange={phoneNumberHandler}
            onSubmit={sendOtpHandler}
            otpLoading={otpLoading}
          />
        );
      case 2:
        return (
          <CheckOtpForm
            onBack={() => setStep((s) => s - 1)}
            otp={otp}
            setOtp={setOtp}
            onSubmit={checkOtpHandler}
            time={time}
            onResendOtp={sendOtpHandler}
            otpResponse={otpResponse}
            checkOtpLoading={checkOtpLoading}
          />
        );
      case 3:
        return (
          <CompleteProfile
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            onSubmit={CheckProfileHandler}
            checkLoading={checkLoading}
          />
        );
      default:
        return null;
    }
  };
  return (
    <div className="flex justify-center ">
      <div className="w-full md:max-w-md ">{renderSteps()}</div>
    </div>
  );
}

export default AuthPage;
