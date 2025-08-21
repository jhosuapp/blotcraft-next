import { useTranslation } from "react-i18next";

import { FloatingDots } from "@/shared/components";
import { Tab } from "../components";

type Props = {
    title: string;
}

const FfaDiamondView = ({ title }:Props):JSX.Element => {
    const { t } = useTranslation('ffaDiamond');

    return (
        <>
            {/* Animations stars floating */}
            <FloatingDots />
            {/* Tab categories */}
            <Tab title={ title } />
        </>
    )
}

export { FfaDiamondView }