import { useState, useEffect } from "react";
import React, { ReactNode } from "react";
import useModal from "../modal/useModal";
import { Dashboard } from "../Dashboard";
const greenIcon = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="11" cy="11" r="11" fill="#BAFFB4" />
    <g clipPath="url(#clip0_1_40)">
      <path
        d="M11 18.3881C13.8618 18.3881 16.1902 16.0601 16.1902 13.1985C16.1902 10.3959 11.326 4.03512 11.1188 3.76581L11 3.61194L10.8811 3.76681C10.6742 4.03562 5.80975 10.3969 5.80975 13.199C5.80981 16.0601 8.13823 18.3881 11 18.3881Z"
        fill="#146C94"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_40">
        <rect
          width="14.7761"
          height="14.7761"
          fill="white"
          transform="translate(3.61197 3.61194)"
        />
      </clipPath>
    </defs>
  </svg>
);

const redIcon = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="11" cy="11" r="11" fill="#FFB4B4" />
    <g clipPath="url(#clip0_1_40)">
      <path
        d="M11 18.3881C13.8618 18.3881 16.1902 16.0601 16.1902 13.1985C16.1902 10.3959 11.326 4.03512 11.1188 3.76581L11 3.61194L10.8811 3.76681C10.6742 4.03562 5.80975 10.3969 5.80975 13.199C5.80981 16.0601 8.13823 18.3881 11 18.3881Z"
        fill="#146C94"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_40">
        <rect
          width="14.7761"
          height="14.7761"
          fill="white"
          transform="translate(3.61197 3.61194)"
        />
      </clipPath>
    </defs>
  </svg>
);

interface waypoint {
  id: number;
  name: string;
  TDS: number[];
  current: number[];
  temp: number;
  position: { lat: number; lng: number };
  safe: boolean;
}
interface DetailBoxProp {
  isOpen: boolean;
  waypoint: waypoint;
}

export default function DetailBox(props: DetailBoxProp) {
  let icon = props.waypoint.safe ? greenIcon : redIcon;

  const { isShowing, setShowing } = useModal();

  useEffect(() => {
    if (!props.isOpen) {
      setShowing(false);
    }
  }, [props.isOpen, setShowing]);

  const boxClass = isShowing
    ? "z-50 absolute bottom-20 w-full h-[600px] inset-0 flex items-center justify-center transition-opacity transition-transform duration-300 opacity-100 translate-y-0"
    : "z-50 absolute bottom-5 w-full h-36 inset-0 flex items-center justify-center transition-opacity transition-transform duration-300 opacity-100 translate-y-0";

  return (
    <div
      onClick={() => {
        setShowing(!isShowing);
      }}
      className={boxClass}
    >
      <div className="border-2 border-gray-300 rounded-[1.5rem]  bg-gray-100 bg-opacity-30 overflow-hidden h-full w-11/12 max-w-[1000px] bg-clip-padding backdrop-filter backdrop-blur-sm flex flex-col gap-y-0">
        <div className="relative flex flex-row gap-x-4 w-full backdrop-filter pl-4 py-4 z-10 font-bold text-xl text-black">
          <div className="relative top-1"> {icon} </div>
          <div className="relative right-2"> ตู้กดน้ำ </div>
        </div>
        <div className="mb-12 relative flex flex-row w-full backdrop-filter pl-3 pr-2 z-10 font-bold text-2xl text-black">
          {props.waypoint.name}
        </div>
        <div className="overflow-auto px-2">
          <Dashboard waypoint={props.waypoint} />
        </div>
      </div>
    </div>
  );
}
