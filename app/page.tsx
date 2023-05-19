"use client";

import { MapBackground } from "@/components/MapBackground";
import { ModalSample } from "@/components/modal/ModalSample";
import { useState } from "react";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [waypoint, setWaypoint] = useState<any>(null);

  const handleModalOpen = (waypoint: any) => {
    console.log("handleModalOpen", waypoint);
    setWaypoint(waypoint);
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };
  return (
    <div className="overflow-hidden">
      <div className="w-full backdrop-filter backdrop-blur-sm absolute pl-4 py-4 z-10 font-bold text-4xl text-black">
        Water Dis
      </div>
      <ModalSample
        isOpen={modalOpen}
        onClose={handleModalClose}
        waypoint={waypoint}
      ></ModalSample>
      <MapBackground
        handleModalOpen={handleModalOpen}
        handleModalClose={handleModalClose}
      ></MapBackground>
    </div>
  );
}
