import React from "react";
import { FaBuysellads } from "react-icons/fa";
import { GiDeliveryDrone } from "react-icons/gi";
import { FaGetPocket } from "react-icons/fa6";
import Image from "next/image";

const infoProducts = [
  {
    title: " از هر جایی سفارش دهید",
    desc: "از طریق گوشی هوشمند به راحتی تجهیزات تتو را در هر جایی سفارش دهید",
    icon: <FaBuysellads size={32} />,
  },
  {
    title: "تحویل سریع ",
    desc: "تحویل با پیک حرفه ای و در زمان مقرر",
    icon: <GiDeliveryDrone size={32} />,
  },
  {
    title: "به موقع دریافت کنید",
    desc: "بسته بندی حرفه ای و سالم دریافت",
    icon: <FaGetPocket size={32} />,
  },
];
function DeliveryHome() {
  return (
    <div>
      <div className="grid grid-cols-4 text-white gap-4 w-full px-10 md:pt-10  pb-10  items-center">
        <div className="md:col-span-2 col-span-4">
          <h3 className="font-semibold md:text-2xl text-xl pb-8">
            سفارش شما
            <span className="inline-block px-1 text-[#1B6DC4] font-bold">
              {" "}
              به سرعت
            </span>{" "}
            تحویل داده می شود
          </h3>
          <div className="">
            {infoProducts?.map((item, index) => (
              <div key={index} className="flex items-center py-4">
                <div className="ml-4 border border-[#1B6DC4] bg-[#1b6dc48c] w-14 h-14 flex justify-center items-center rounded-md">
                  {item.icon}
                </div>
                <div className="">
                  {" "}
                  <h4> {item.title} </h4>
                  <p className="text-xs pt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      <div className="md:col-span-2 col-span-4 text-white">
        <div className="w-full">
          <Image className="rounded-md" src="/images/delevry.jpeg" width={800} height={300} alt="delevry" />
        </div>
      </div>
    </div>
      </div>
  );
}

export default DeliveryHome;
