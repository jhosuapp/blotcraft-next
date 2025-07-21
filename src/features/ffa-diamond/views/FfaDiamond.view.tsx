import { useTranslation } from "react-i18next";

import { FloatingDots } from "@/shared/components";
import { Tab } from "../components";

const FfaDiamondView = ():JSX.Element => {
    const { t } = useTranslation('ffaDiamond');

    return (
        <>
            {/* Animations stars floating */}
            <FloatingDots />
            {/* Hero banner */}
            <h1 className="pb-[80px] pt-[120px] text-center text-[25px] text-white lg:text-[50px]">FFA DIAMOND</h1>
            {/* Tab categories */}
            <Tab />
        </>
    )
}

export { FfaDiamondView }