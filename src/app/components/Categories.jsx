"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const category = [
  {
    title: "طرح ساده",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    id: 1,
    img: "/images/cat1.png",
  },
  {
    title: "شخصیت خود را نشان ",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    id: 2,
    img: "/images/cat2.png",
  },
  {
    title: "خالکوبی دست کامل",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    id: 3,
    img: "/images/cat3.png",
  },
  {
    title: "راه حل های قدرتمند",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    id: 4,
    img: "/images/cat4.png",
  },
];

function Categories() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".category .scroll-trigger", {
      scrollTrigger: {
        trigger: ".category .scroll-trigger",
        opacity:0
      },
     

      y: 100,
      stagger: 0.3,
      yoyo: true,
    });
  });
  return (
    <div className="my-24 md:px-16 ">
      <div className="category grid grid-cols-12 gap-8 ">
        {category.map((cat) => (
          <div
            key={cat.id}
            className="scroll-trigger mx-5 md:mx-0 col-span-12 md:col-span-3 shadow-lg rounded-md  cursor-pointer"
          >
            <div className="rounded-md">
              <img
                className="w-full rounded-md "
                src={cat.img}
                alt="category picture"
              />
            </div>
            <div className="p-4">
              <h3 className="text-[#080808] text-xl ">{cat.title}</h3>
              <Image
                src="/images/line.svg"
                className="py-4"
                width={24}
                height={6}
                alt="line"
              />
              <p className="text-[#555555] text-sm leading-6">{cat.desc}</p>
              <div className="flex items-center my-4 py-2 px-2 rounded-md shadow-sm bg-black hover:opacity-80 w-fit">
                <Link href="#" className=" ml-2  text-white ">
                  بیشتر بخوانید
                </Link>

                <IoIosArrowBack className="text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
