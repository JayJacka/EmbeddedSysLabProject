import { MarkerF } from "@react-google-maps/api";
import { useMemo } from "react";

const redMarkerSVG =
  '<svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">' +
  '<path fill-rule="evenodd" clip-rule="evenodd" d="M0 16C0 7.2 7.2 -4.24883e-06 16 -4.24883e-06C24.8 -4.24883e-06 32 7.2 32 16C32 26.1336 19.6744 37.4998 17.6577 39.3595C17.5251 39.4818 17.437 39.563 17.4 39.6C17 39.8 16.4 40 16 40C15.6 40 15 39.8 14.6 39.6C14.563 39.563 14.4749 39.4818 14.3423 39.3595C12.3256 37.4998 0 26.1336 0 16ZM4 16C4 22.8 11.8 31.4 16 35.4C20.2 31.4 28 22.6 28 16C28 9.4 22.6 4 16 4C9.4 4 4 9.4 4 16Z" fill="#FFB4B4"/>' +
  '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 35.4C11.8 31.4 4 22.8 4 16C4 9.4 9.4 4 16 4C22.6 4 28 9.4 28 16C28 22.6 20.2 31.4 16 35.4ZM8 16C8 11.6 11.6 8 16 8C20.4 8 24 11.6 24 16C24 20.4 20.4 24 16 24C11.6 24 8 20.4 8 16Z" fill="#FFB4B4"/>' +
  '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C11.6 8 8 11.6 8 16C8 20.4 11.6 24 16 24C20.4 24 24 20.4 24 16C24 11.6 20.4 8 16 8ZM12 16C12 18.2 13.8 20 16 20C18.2 20 20 18.2 20 16C20 13.8 18.2 12 16 12C13.8 12 12 13.8 12 16Z" fill="#FFB4B4"/>' +
  '<path d="M16 20C13.8 20 12 18.2 12 16C12 13.8 13.8 12 16 12C18.2 12 20 13.8 20 16C20 18.2 18.2 20 16 20Z" fill="#FFB4B4"/>' +
  '<path d="M16.5 23.658C19.5326 23.658 22 21.1911 22 18.1587C22 15.1888 16.8454 8.44844 16.6259 8.16305L16.5 8L16.374 8.16412C16.1548 8.44897 11 15.1899 11 18.1592C11.0001 21.1911 13.4674 23.658 16.5 23.658Z" fill="#146C94"/>' +
  "</svg>";

const greenMarkerSVG =
  '<svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">' +
  '<path fill-rule="evenodd" clip-rule="evenodd" d="M0 16C0 7.2 7.2 -4.24883e-06 16 -4.24883e-06C24.8 -4.24883e-06 32 7.2 32 16C32 26.1336 19.6744 37.4998 17.6577 39.3595C17.5251 39.4818 17.437 39.563 17.4 39.6C17 39.8 16.4 40 16 40C15.6 40 15 39.8 14.6 39.6C14.563 39.563 14.4749 39.4818 14.3423 39.3595C12.3256 37.4998 0 26.1336 0 16ZM4 16C4 22.8 11.8 31.4 16 35.4C20.2 31.4 28 22.6 28 16C28 9.4 22.6 4 16 4C9.4 4 4 9.4 4 16Z" fill="#BAFFB4"/>' +
  '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 35.4C11.8 31.4 4 22.8 4 16C4 9.4 9.4 4 16 4C22.6 4 28 9.4 28 16C28 22.6 20.2 31.4 16 35.4ZM8 16C8 11.6 11.6 8 16 8C20.4 8 24 11.6 24 16C24 20.4 20.4 24 16 24C11.6 24 8 20.4 8 16Z" fill="#BAFFB4"/>' +
  '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C11.6 8 8 11.6 8 16C8 20.4 11.6 24 16 24C20.4 24 24 20.4 24 16C24 11.6 20.4 8 16 8ZM12 16C12 18.2 13.8 20 16 20C18.2 20 20 18.2 20 16C20 13.8 18.2 12 16 12C13.8 12 12 13.8 12 16Z" fill="#BAFFB4"/>' +
  '<path d="M16 20C13.8 20 12 18.2 12 16C12 13.8 13.8 12 16 12C18.2 12 20 13.8 20 16C20 18.2 18.2 20 16 20Z" fill="#BAFFB4"/>' +
  '<path d="M16.5 23.658C19.5326 23.658 22 21.1911 22 18.1587C22 15.1888 16.8454 8.44844 16.6259 8.16305L16.5 8L16.374 8.16412C16.1548 8.44897 11 15.1899 11 18.1592C11.0001 21.1911 13.4674 23.658 16.5 23.658Z" fill="#146C94"/>' +
  "</svg>";

export const SmallWaypoint = (props: any) => {
  let markerSVG = redMarkerSVG;
  if (props.waypoint.safe) {
    markerSVG = greenMarkerSVG;
  }
  return (
    <MarkerF
      position={props.waypoint.position}
      icon={{
        anchor: new google.maps.Point(16, 40),
        url:
          "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(markerSVG),
      }}
      onClick={() => {
        props.recenter();
      }}
    />
  );
};
