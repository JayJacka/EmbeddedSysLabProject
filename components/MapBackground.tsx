"use client";

import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useEffect, useMemo, useState } from "react";
import { SmallWaypoint } from "./waypoint/SmallWaypoint";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, get, child } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY as string,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN as string,
  projectId: process.env.NEXT_PUBLIC_PROJECTID as string,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET as string,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID as string,
  appId: process.env.NEXT_PUBLIC_APPID as string,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL as string,
};

// Initialize Firebase

interface waypoint {
  id: number;
  name: string;
  TDS: number[];
  current: number[];
  temp: number;
  position: { lat: number; lng: number };
  safe: boolean;
}

interface mapBackgroundInterface {
  handleModalOpen: (waypoint: waypoint) => void;
  handleModalClose: () => void;
}

export const MapBackground = (props: mapBackgroundInterface) => {
  const [temp, setTemp] = useState<number>(0);
  const [tds, setTds] = useState<number[]>([]);
  const [energy, setEnergy] = useState<number[]>([]);
  const waterDis = [
    {
      id: 1,
      name: "สวนรวมใจ",
      TDS: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      current: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      temp: 10,
      position: { lat: 13.736785800000003, lng: 100.53269589418949 },
      safe: true,
    },
    {
      id: 2,
      name: "ใต้โถงอาคาร 3",
      TDS: tds,
      current: energy,
      temp: temp,
      position: { lat: 13.736817210935303, lng: 100.53337530387972 },
      safe: tds.every((e) => e < 200),
    },
    {
      id: 3,
      name: "iCanteen",
      TDS: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      current: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      temp: 10,
      position: { lat: 13.736866985703676, lng: 100.53419730166667 },
      safe: true,
    },
    {
      id: 4,
      name: "อาคาร 4",
      TDS: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      current: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      temp: 10,
      position: { lat: 13.736081627069641, lng: 100.53387911263876 },
      safe: false,
    },
  ];

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    // libraries: ["places"],
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

  const handleMarkerClick = (waypoint: waypoint) => {
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
    const app = initializeApp(firebaseConfig);

    const database = getDatabase();
    get(ref(database, "/test/temp")).then((snapshot) => {
      setTemp(snapshot.val());
    });
    get(ref(database, "/test/TDS")).then((snapshot) => {
      setTds(Object.values(snapshot.val()));
    });
    get(ref(database, "/test/energy")).then((snapshot) => {
      setEnergy(Object.values(snapshot.val()));
    });
  }, [isMapLoaded, mapRef]);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  // onValue(dbRef, (snapshot) => {
  //   const data = snapshot.val();
  //   // setTds(data.value);
  //   console.log(Object.values(data));
  //   setTds(Object.values(data));
  // });

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
