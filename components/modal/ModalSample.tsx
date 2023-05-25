import { useEffect, useState } from "react";
import DetailBox from "../modal/DetailBox";
interface waypoint {
  id: number;
  name: string;
  TDS: number[];
  current: number[];
  temp: number;
  position: { lat: number; lng: number };
  safe: boolean;
}
interface modalSample {
  isOpen: boolean;
  onOpen: (waypoint: waypoint) => void;
  waypoint: waypoint;
}

export const ModalSample = (props: modalSample) => {
  const [showDetail, setShowdetail] = useState<boolean>(false);

  useEffect(() => {
    if (!props.isOpen) {
      setShowdetail(false);
    }
  }, [props.isOpen]);
  if (!props.waypoint) {
    return null;
  }

  let modalClass = props.isOpen
    ? showDetail
      ? "rounded-[1.5rem] z-50 absolute w-full h-fit inset-x-0 bottom-[75vh] flex items-center justify-center bg-opacity-50 transition-opacity transition-transform duration-300 opacity-100 translate-y-0"
      : "cursor-pointer rounded-[1.5rem] z-50 absolute w-full h-fit inset-x-0 bottom-[200px] flex items-center justify-center bg-opacity-50 transition-opacity transition-transform duration-300 opacity-100 translate-y-0"
    : "hidden absolute w-full h-36 inset-x-0 bottom-0 flex items-center justify-center bg-opacity-50 transition-opacity transition-transform duration-300 opacity-0 translate-y-full";

  return (
    <div className={modalClass} onClick={() => setShowdetail(!showDetail)}>
      <DetailBox isOpen={props.isOpen} waypoint={props.waypoint}></DetailBox>
    </div>
  );
};
