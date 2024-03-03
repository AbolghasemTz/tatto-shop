"use client";
import Image from "next/image";
import React from "react";
import { Player, ControlBar, PlayToggle } from 'video-react';
import "video-react/dist/video-react.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function (props) {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".animate-video ", {
      scrollTrigger: {
        trigger: ".animate-video ",
      },

      opacity: 0,
      y: 400,
      direction: 2,
    });
  });
  return (
    <>
      <div className="">
        <div className="md:w-[60%] w-[83%]  max-h-max relative  mb-10 mt-24 mx-auto flex justify-center items-center ">
          <Player
            
            poster="/assets/poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          >
            <ControlBar autoHide={false} disableDefaultControls={false}>
              <PlayToggle />
            </ControlBar>
          </Player>
          <div className="animate-video absolute -top-[20%]  w-[100%]  z-[10] ">
            <Image src="/images/v-pic.png" width={1000} height={200} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
