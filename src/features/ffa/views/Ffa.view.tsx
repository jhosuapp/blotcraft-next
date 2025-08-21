import { useEffect } from "react";

import { FloatingDots } from "@/shared/components";
import { Tab } from "../components";
import { useTabStore } from "../stores";
import { IrequestType } from "../interfaces";

type Props = {
    title: string;
    requestType: IrequestType;
}

const FfaView = ({ title, requestType:requestTypeView }:Props):JSX.Element => {
    const setRequestType  = useTabStore( state => state.setRequestType );
    const requestType  = useTabStore( state => state.requestType );

    useEffect(()=>{
        setRequestType(requestTypeView);
    },[ requestType, requestTypeView ]);

    return (
        <>
            {/* Animations stars floating */}
            <FloatingDots />
            {/* Tab categories */}
            <Tab title={ title } />
        </>
    )
}

export { FfaView }