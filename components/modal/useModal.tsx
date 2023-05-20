import { useState } from "react";

interface DetailBoxProp {
    element: {
        place?: string;
        tds?: Array<number>;
        current?: Array<number>;
    }
}

export default function useModal(props: DetailBoxProp) {

    const [isShowing, setShowing] = useState(false);
    const [detail, setDetail] = useState<any>(null);

    const handleShowDetail = (dt: DetailBoxProp) => {
        setShowing(true)
        setDetail(dt)
        console.log("showing detail")
    }

    const handleHideDetail = () => {
        setShowing(false)
    }



    return {
        isShowing,
        handleShowDetail,
        handleHideDetail
    };
}