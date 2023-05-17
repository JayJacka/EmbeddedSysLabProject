"use client";

import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

export const MapBackground = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: ["places"],
  });

  const mapCenter = useMemo(
    () => ({ lat: 13.736785800000003, lng: 100.53269589418949 }),
    []
  );

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );
  if (!isLoaded) {
    return <p>Loading...</p>;
  }
  return (
    <GoogleMap
      options={mapOptions}
      zoom={20}
      center={mapCenter}
      mapTypeId={google.maps.MapTypeId.ROADMAP}
      mapContainerStyle={{ width: "100vw", height: "100vh" }}
      onLoad={() => console.log("Map Component Loaded...")}
    />
  );
};
