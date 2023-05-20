import { useState } from "react";
import DetailBox from "../modal/DetailBox"
import useModal from "../modal/useModal"


export const ModalSample = (props: any) => {

  const example = {
    place: "ใต้โถง ชั่น 1 อาคาร 3 คณะวิศวกรรมศาสตร์",
    tds: [1.2, 3.5, 2.2],
    current: [1.58, 1.29, 3.24],
    safe: true
  }


  if (!props.waypoint) {
    return null;
  }
  const modalClass = props.isOpen
    ? "z-50 absolute w-full h-36 inset-x-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50 transition-opacity transition-transform duration-300 opacity-100 translate-y-0"
    : "absolute w-full h-36 inset-x-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50 transition-opacity transition-transform duration-300 opacity-0 translate-y-full";
  return (
    <>
      <div className={modalClass}>
        <DetailBox isOpen={props.isOpen} waypoint={props.waypoint}></DetailBox>
      </div>
    </>
  );
};
