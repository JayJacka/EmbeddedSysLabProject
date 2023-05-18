"use client";

import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { use, useCallback, useEffect, useMemo, useState } from "react";
import { SmallWaypoint } from "./waypoint/SmallWaypoint";

const waterDis = [
  {
    position: { lat: 13.736785800000003, lng: 100.53269589418949 },
    safe: true,
  },
  {
    position: { lat: 13.736817210935303, lng: 100.53337530387972 },
    safe: false,
  },
];

export const MapBackground = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: ["places"],
  });

  const [mapRef, setMapRef] = useState<google.maps.Map | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const mapCenter = useMemo(
    () => ({ lat: 13.736785800000003, lng: 100.53269589418949 }),
    []
  );

  const onMapLoad = (map: google.maps.Map) => {
    setMapRef(map);
    setIsMapLoaded(true);
  };

  const handleMarkerClick = (lat: number, lng: number) => {
    console.log("handleMarkerClick", lat, lng);
    mapRef?.panTo({ lat, lng });
  };

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
      scrollwheel: false,
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
        >
          {isMapLoaded &&
            waterDis.map((waypoint, index) => (
              <SmallWaypoint
                key={index}
                waypoint={waypoint}
                recenter={() =>
                  handleMarkerClick(
                    waypoint.position.lat,
                    waypoint.position.lng
                  )
                }
              />
            ))}
        </GoogleMap>
      )}
    </>
  );
};
