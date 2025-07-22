import { useTranslation } from "react-i18next";

import { FloatingDots } from "@/shared/components";
import { Tab } from "../components";

const FfaDiamondView = ():JSX.Element => {
    const { t } = useTranslation('ffaDiamond');

    return (
        <>
            {/* Animations stars floating */}
            <FloatingDots />
            {/* Tab categories */}
            <Tab />
        </>
    )
}

export { FfaDiamondView }