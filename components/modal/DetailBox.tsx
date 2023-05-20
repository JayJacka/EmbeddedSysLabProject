import { useState } from "react"
import React, { ReactNode } from 'react';
import useModal from '../modal/useModal';



interface DetailBoxProp {
    element: {
        place?: string;
        tds?: Array<number>;
        current?: Array<number>;
    }
}

export default function DetailBox (props: DetailBoxProp) {

    const {isShowing, handleShowDetail, handleHideDetail} = useModal(props);

    const boxClass = isShowing
        ? "z-50 bottom-5 absolute w-full h-96 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 transition-opacity transition-transform duration-300 opacity-100 translate-y-0"
        : "z-50 bottom-5 absolute w-full h-48 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 transition-opacity transition-transform duration-300 opacity-100 translate-y-0"

    return (
        <button className={boxClass}>
                <div className="h-full w-full bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-gray-100"
                >
                    
                    {props.element.place}
                </div>
        </button>

    )
}
