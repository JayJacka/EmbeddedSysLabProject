import DetailBox from "../modal/DetailBox"


export const ModalSample = (props: any) => {

  const example = {
    place: "Hall",
    tds: [1.2, 3.5, 2.2],
    current: [1.58, 1.29, 3.24]
  }

  if (!props.waypoint) {
    return null;
  }
  const modalClass = props.isOpen
    ? "z-50 bottom-5 absolute w-3/4 h-48 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 transition-opacity transition-transform duration-300 opacity-100 translate-y-0"
    : "bottom-5 absolute w-3/4 h-48 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 transition-opacity transition-transform duration-300 opacity-0 translate-y-full";
  return (
    <>
      <div className={modalClass}>
        <DetailBox element = {example}></DetailBox>
      </div>
    </>
  );
};
