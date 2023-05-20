import { useState } from "react"
import React, { ReactNode } from 'react';
import useModal from '../modal/useModal';

const greenIcon = <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="11" fill="#BAFFB4"/>
<g clip-path="url(#clip0_1_40)">
<path d="M11 18.3881C13.8618 18.3881 16.1902 16.0601 16.1902 13.1985C16.1902 10.3959 11.326 4.03512 11.1188 3.76581L11 3.61194L10.8811 3.76681C10.6742 4.03562 5.80975 10.3969 5.80975 13.199C5.80981 16.0601 8.13823 18.3881 11 18.3881Z" fill="#146C94"/>
</g>
<defs>
<clipPath id="clip0_1_40">
<rect width="14.7761" height="14.7761" fill="white" transform="translate(3.61197 3.61194)"/>
</clipPath>
</defs>
</svg>


const redIcon = <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="11" fill="#FFB4B4"/>
<g clip-path="url(#clip0_1_40)">
<path d="M11 18.3881C13.8618 18.3881 16.1902 16.0601 16.1902 13.1985C16.1902 10.3959 11.326 4.03512 11.1188 3.76581L11 3.61194L10.8811 3.76681C10.6742 4.03562 5.80975 10.3969 5.80975 13.199C5.80981 16.0601 8.13823 18.3881 11 18.3881Z" fill="#146C94"/>
</g>
<defs>
<clipPath id="clip0_1_40">
<rect width="14.7761" height="14.7761" fill="white" transform="translate(3.61197 3.61194)"/>
</clipPath>
</defs>
</svg>

interface DetailBoxProp {
    element: {
        place?: string;
        tds?: Array<number>;
        current?: Array<number>;
        safe?: boolean;
    }
}

export default function DetailBox (props: DetailBoxProp) {
    let icon = props.element.safe
    ? greenIcon
    : redIcon
    

    const {isShowing, toggle} = useModal();
    
    const boxClass = isShowing
    ? "z-50 bottom-5 absolute w-full h-96 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 transition-opacity transition-transform duration-300 opacity-100 translate-y-0"
    : "z-50 bottom-5 absolute w-full h-36 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 transition-opacity transition-transform duration-300 opacity-100 translate-y-0"
    

    return (
        <button onClick={() => toggle()} className={boxClass}>
                <div className="hoverflow-hidden h-full w-full bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-gray-100 flex flex-col gap-y-0"
                >
                    <div className="relative flex flex-row gap-x-4 w-full backdrop-filter pl-4 py-4 z-10 font-bold text-xl text-black">
                        <div className="relative top-1"> {icon} </div>
                        <div className="relative right-2"> ตู้กดน้ำ </div>
                    </div>
                    <div className="relative flex flex-row w-full backdrop-filter pl-3 pr-2 z-10 font-bold text-2xl text-black">
                        {props.element.place}
                    </div>
                </div>
        </button>

    )
}
