import Image from "next/image";
import React from "react";

function CountNumber() {
  return (
    <div className="relative w-full h-screen mb-10  overflow-hidden ">
      <Image
        className="absolute top-0 h-[100%] w-[100%] object-cover "
        src="/images/parallax.png"
        alt="image1"
        width={1800}
        height={400}
      />
      <Image
        className=" h-[100%] w-[100%] overflow-hidden object-fill  "
        src="/images/g-8.jpg"
        alt="image1"
        width={1800}
        height={400}
      />
    </div>
  );
}

export default CountNumber;
