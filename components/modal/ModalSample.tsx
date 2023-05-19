export const ModalSample = (props: any) => {
  if (!props.waypoint) {
    return null;
  }
  const modalClass = props.isOpen
    ? "z-50 bottom-5 absolute w-3/4 h-48 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 transition-opacity transition-transform duration-300 opacity-100 translate-y-0"
    : "bottom-5 absolute w-3/4 h-48 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 transition-opacity transition-transform duration-300 opacity-0 translate-y-full";
  return (
    <>
      <div className={modalClass}>{props.waypoint.id}</div>
    </>
  );
};
