import Image from "next/image";
import React from "react";
import TextField from "../common/TextField";


function ContactMe() {
  return (
    <div className="md:px-24 px-10 my-24">
      <div className="grid grid-cols-2 gap-2">
        <div className="md:col-span-1 col-span-2">
          <Image
            src="/images/studio.jpg"
            width={500}
            height={600}
            alt="studio"
            className="rounded-md shadow-sm object-cover"
          />
        </div>
        <div className="md:col-span-1 col-span-2">
          <form action="" className="space-y-4">
            <TextField label="نام" />
            <TextField label="ایمیل" />
            <TextField label="پیام" />
            <button className="btn btn_primary w-[30%]">ارسال پیام</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
