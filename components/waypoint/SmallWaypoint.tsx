import { Marker } from "@react-google-maps/api";

const redMarkerSVG =
  '<svg height="40" width="32" stroke-miterlimit="10" style="fill-rule:nonzero;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;" version="1.1" viewBox="0 0 32 40" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:vectornator="http://vectornator.io" xmlns:xlink="http://www.w3.org/1999/xlink">' +
  "<defs/>" +
  '<clipPath id="ArtboardFrame">' +
  '<rect height="40" width="32" x="0" y="0"/>' +
  "</clipPath>" +
  '<g clip-path="url(#ArtboardFrame)" id="Untitled" vectornator:layerName="Untitled">' +
  '<path d="M0 16C0 7.2 7.2-4.24883e-06 16-4.24883e-06C24.8-4.24883e-06 32 7.2 32 16C32 26.1336 19.6744 37.4998 17.6577 39.3595C17.5251 39.4818 17.437 39.563 17.4 39.6C17 39.8 16.4 40 16 40C15.6 40 15 39.8 14.6 39.6C14.563 39.563 14.4749 39.4818 14.3423 39.3595C12.3256 37.4998 0 26.1336 0 16Z" fill="#ffb4b4" fill-rule="nonzero" opacity="1" stroke="none"/>' +
  '<path d="M3.97249 15.8785" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="0.1"/>' +
  '<path d="M16 20C13.8 20 12 18.2 12 16C12 13.8 13.8 12 16 12C18.2 12 20 13.8 20 16C20 18.2 18.2 20 16 20Z" fill="#ffb4b4" fill-rule="nonzero" opacity="1" stroke="none" vectornator:layerName="path"/>' +
  '<path d="M16 22.6581C18.7569 22.6581 21 20.4155 21 17.6588C21 14.9588 16.314 8.83125 16.1145 8.5718L16 8.42357L15.8855 8.57277C15.6862 8.83173 11 14.9598 11 17.6592C11.0001 20.4155 13.2431 22.6581 16 22.6581Z" fill="#146c94" fill-rule="nonzero" opacity="1" stroke="none" vectornator:layerName="path"/>' +
  '<path d="M-8.61618 3.12236" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="0"/>' +
  "</g>" +
  "</svg>";

const bigRedMarkerSVG =
  '<svg height="101" width="80" stroke-miterlimit="10" style="fill-rule:nonzero;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;" version="1.1" viewBox="0 0 81 101" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:vectornator="http://vectornator.io" xmlns:xlink="http://www.w3.org/1999/xlink">' +
  "<defs/>" +
  '<clipPath id="ArtboardFrame">' +
  '<rect height="101" width="81" x="0" y="0"/>' +
  "</clipPath>" +
  '<g clip-path="url(#ArtboardFrame)" id="Untitled" vectornator:layerName="Untitled">' +
  '<g opacity="1" vectornator:layerName="g">' +
  '<g opacity="1" vectornator:layerName="g">' +
  '<path d="M0 40.4C0 18.18 18.18-1.07283e-05 40.4-1.07283e-05C62.62-1.07283e-05 80.8 18.18 80.8 40.4C80.8 65.9874 49.6778 94.6869 44.5856 99.3827C44.2508 99.6915 44.0285 99.8965 43.935 99.99C42.925 100.495 41.41 101 40.4 101C39.39 101 37.875 100.495 36.865 99.99C36.7715 99.8965 36.5492 99.6915 36.2144 99.3827C31.1222 94.687 0 65.9874 0 40.4Z" fill="#4e4e4e" fill-opacity="0.56" fill-rule="nonzero" opacity="1" stroke="none"/>' +
  '<path d="M40.4 50.5C34.845 50.5 30.3 45.955 30.3 40.4C30.3 34.845 34.845 30.3 40.4 30.3C45.955 30.3 50.5 34.845 50.5 40.4C50.5 45.955 45.955 50.5 40.4 50.5Z" fill="#4e4e4e" fill-opacity="0.56" fill-rule="nonzero" opacity="1" stroke="none" vectornator:layerName="path"/>' +
  "</g>" +
  '<path d="M7 40.5C7 21.9985 21.9985 7 40.5 7C59.0015 7 74 21.9985 74 40.5C74 59.0015 59.0015 74 40.5 74C21.9985 74 7 59.0015 7 40.5Z" fill="#ffb4b4" fill-rule="nonzero" opacity="1" stroke="none" vectornator:layerName="circle"/>' +
  '<g opacity="1" vectornator:layerName="rect">' +
  '<clipPath id="ClipPath">' +
  '<path d="M18 18L63 18L63 18L63 63L63 63L18 63L18 63L18 18L18 18Z"/>' +
  "</clipPath>" +
  '<g clip-path="url(#ClipPath)">' +
  '<path d="M40.4998 63C49.2153 63 56.3066 55.9104 56.3066 47.1955C56.3066 38.6603 41.4927 19.2888 40.8618 18.4686L40.4998 18L40.1379 18.4717C39.5079 19.2903 24.6933 38.6632 24.6933 47.197C24.6934 55.9104 31.7845 63 40.4998 63Z" fill="#146c94" fill-rule="nonzero" opacity="1" stroke="none" vectornator:layerName="path"/>' +
  "</g></g></g></g></svg>";

const greenMarkerSVG =
  '<svg height="40" width="32" stroke-miterlimit="10" style="fill-rule:nonzero;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;" version="1.1" viewBox="0 0 32 40" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:vectornator="http://vectornator.io" xmlns:xlink="http://www.w3.org/1999/xlink">' +
  "<defs/>" +
  '<clipPath id="ArtboardFrame">' +
  '<rect height="40" width="32" x="0" y="0"/>' +
  "</clipPath>" +
  '<g clip-path="url(#ArtboardFrame)" id="Untitled" vectornator:layerName="Untitled">' +
  '<path d="M0 16C0 7.2 7.2-4.24883e-06 16-4.24883e-06C24.8-4.24883e-06 32 7.2 32 16C32 26.1336 19.6744 37.4998 17.6577 39.3595C17.5251 39.4818 17.437 39.563 17.4 39.6C17 39.8 16.4 40 16 40C15.6 40 15 39.8 14.6 39.6C14.563 39.563 14.4749 39.4818 14.3423 39.3595C12.3256 37.4998 0 26.1336 0 16Z" fill="#BAFFB4" fill-rule="nonzero" opacity="1" stroke="none"/>' +
  '<path d="M3.97249 15.8785" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="0.1"/>' +
  '<path d="M16 20C13.8 20 12 18.2 12 16C12 13.8 13.8 12 16 12C18.2 12 20 13.8 20 16C20 18.2 18.2 20 16 20Z" fill="#BAFFB4" fill-rule="nonzero" opacity="1" stroke="none" vectornator:layerName="path"/>' +
  '<path d="M16 22.6581C18.7569 22.6581 21 20.4155 21 17.6588C21 14.9588 16.314 8.83125 16.1145 8.5718L16 8.42357L15.8855 8.57277C15.6862 8.83173 11 14.9598 11 17.6592C11.0001 20.4155 13.2431 22.6581 16 22.6581Z" fill="#146c94" fill-rule="nonzero" opacity="1" stroke="none" vectornator:layerName="path"/>' +
  '<path d="M-8.61618 3.12236" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="0"/>' +
  "</g>" +
  "</svg>";

const bigGreenMarkerSVG =
  '<svg height="101" width="80" stroke-miterlimit="10" style="fill-rule:nonzero;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;" version="1.1" viewBox="0 0 81 101" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:vectornator="http://vectornator.io" xmlns:xlink="http://www.w3.org/1999/xlink">' +
  "<defs/>" +
  '<clipPath id="ArtboardFrame">' +
  '<rect height="101" width="81" x="0" y="0"/>' +
  "</clipPath>" +
  '<g clip-path="url(#ArtboardFrame)" id="Untitled" vectornator:layerName="Untitled">' +
  '<g opacity="1" vectornator:layerName="g">' +
  '<g opacity="1" vectornator:layerName="g">' +
  '<path d="M0 40.4C0 18.18 18.18-1.07283e-05 40.4-1.07283e-05C62.62-1.07283e-05 80.8 18.18 80.8 40.4C80.8 65.9874 49.6778 94.6869 44.5856 99.3827C44.2508 99.6915 44.0285 99.8965 43.935 99.99C42.925 100.495 41.41 101 40.4 101C39.39 101 37.875 100.495 36.865 99.99C36.7715 99.8965 36.5492 99.6915 36.2144 99.3827C31.1222 94.687 0 65.9874 0 40.4Z" fill="#4e4e4e" fill-opacity="0.56" fill-rule="nonzero" opacity="1" stroke="none"/>' +
  '<path d="M40.4 50.5C34.845 50.5 30.3 45.955 30.3 40.4C30.3 34.845 34.845 30.3 40.4 30.3C45.955 30.3 50.5 34.845 50.5 40.4C50.5 45.955 45.955 50.5 40.4 50.5Z" fill="#4e4e4e" fill-opacity="0.56" fill-rule="nonzero" opacity="1" stroke="none" vectornator:layerName="path"/>' +
  "</g>" +
  '<path d="M7 40.5C7 21.9985 21.9985 7 40.5 7C59.0015 7 74 21.9985 74 40.5C74 59.0015 59.0015 74 40.5 74C21.9985 74 7 59.0015 7 40.5Z" fill="#baffb4" fill-rule="nonzero" opacity="1" stroke="none" vectornator:layerName="circle"/>' +
  '<g opacity="1" vectornator:layerName="rect">' +
  '<clipPath id="ClipPath">' +
  '<path d="M18 18L63 18L63 18L63 63L63 63L18 63L18 63L18 18L18 18Z"/>' +
  "</clipPath>" +
  '<g clip-path="url(#ClipPath)">' +
  '<path d="M40.4998 63C49.2153 63 56.3066 55.9104 56.3066 47.1955C56.3066 38.6603 41.4927 19.2888 40.8618 18.4686L40.4998 18L40.1379 18.4717C39.5079 19.2903 24.6933 38.6632 24.6933 47.197C24.6934 55.9104 31.7845 63 40.4998 63Z" fill="#146c94" fill-rule="nonzero" opacity="1" stroke="none" vectornator:layerName="path"/>' +
  "</g></g></g></g></svg>";

export const SmallWaypoint = (props: any) => {
  let markerSVG = redMarkerSVG;
  let bigMarkerSVG = bigRedMarkerSVG;
  if (props.waypoint.safe) {
    markerSVG = greenMarkerSVG;
    bigMarkerSVG = bigGreenMarkerSVG;
  }

  if (props.active) {
    markerSVG = bigMarkerSVG;
  }

  return (
    <Marker
      position={props.waypoint.position}
      icon={{
        anchor: props.active
          ? new google.maps.Point(40, 101)
          : new google.maps.Point(16, 40),
        url:
          "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(markerSVG),
      }}
      onClick={() => {
        props.handleOpenModal();
        props.recenter();
      }}
      animation={
        props.active ? google.maps.Animation.BOUNCE : google.maps.Animation.DROP
      }
    />
  );
};
