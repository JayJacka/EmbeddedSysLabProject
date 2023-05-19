"use client";

import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { use, useCallback, useEffect, useMemo, useState } from "react";
import { SmallWaypoint } from "./waypoint/SmallWaypoint";

const waterDis = [
  {
    id: 1,
    position: { lat: 13.736785800000003, lng: 100.53269589418949 },
    safe: true,
  },
  {
    id: 2,
    position: { lat: 13.736817210935303, lng: 100.53337530387972 },
    safe: false,
  },
  {
    id: 3,
    position: { lat: 13.736866985703676, lng: 100.53419730166667 },
    safe: true,
  },
  {
    id: 4,
    position: { lat: 13.736081627069641, lng: 100.53387911263876 },
    safe: false,
  },
];

export const MapBackground = (props: any) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: ["places"],
  });

  const [mapRef, setMapRef] = useState<google.maps.Map | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [activeMarker, setActiveMarker] = useState<number | null>(null);

  const mapCenter = useMemo(
    () => ({ lat: 13.736785800000003, lng: 100.53269589418949 }),
    []
  );

  const onMapLoad = (map: google.maps.Map) => {
    setMapRef(map);
    setIsMapLoaded(true);
  };

  const handleMarkerClick = (waypoint: {
    id: number;
    position: { lat: number; lng: number };
    safe: boolean;
  }) => {
    setActiveMarker(waypoint.id);
    console.log(
      "handleMarkerClick",
      waypoint.position.lat,
      waypoint.position.lng
    );
    mapRef?.panTo({
      lat: waypoint.position.lat - 0.00025,
      lng: waypoint.position.lng,
    });
    if (mapRef) {
      if (mapRef.getZoom() !== 18) {
        mapRef.setZoom(18);
      }
    }
  };

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
      scrollwheel: false,
      gestureHandling: "greedy",
    }),
    []
  );
  useEffect(() => {
    if (isMapLoaded) {
      console.log(mapRef);
    }
  }, [isMapLoaded, mapRef]);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }
  return (
    <>
      {typeof window !== "undefined" && (
        <GoogleMap
          options={mapOptions}
          zoom={18}
          center={mapCenter}
          mapTypeId={google.maps.MapTypeId.ROADMAP}
          mapContainerStyle={{ width: "100vw", height: "100vh" }}
          onLoad={onMapLoad}
          onClick={() => {
            setActiveMarker(null);
            props.handleModalClose();
          }}
        >
          {isMapLoaded &&
            waterDis.map((waypoint, index) => (
              <SmallWaypoint
                key={index}
                waypoint={waypoint}
                handleOpenModal={() => props.handleModalOpen(waypoint)}
                recenter={() => handleMarkerClick(waypoint)}
                active={waypoint.id === activeMarker}
              />
            ))}
        </GoogleMap>
      )}
    </>
  );
};
