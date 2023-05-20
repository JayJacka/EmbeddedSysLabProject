import { useState } from "react";

interface DetailBoxProp {
    element: {
        place?: string;
        tds?: Array<number>;
        current?: Array<number>;
        safe?: Boolean;
    }
}

export default function useModal() {

    const [isShowing, setShowing] = useState(false);
    const [detail, setDetail] = useState<any>(null);

    const toggle = () => {
        setShowing(!isShowing)
        
    }



    return {
        isShowing,
        toggle
    };
}